import { createContext, useContext } from "react";
import { useState } from "react";

export const AppContext = createContext({});

export function useAppContext() {
  return useContext(AppContext);
}

export default function AppProvider({ children }) {
  const BASE_URL = "https://notes-api.dicoding.dev/v1";

  const [accessToken, setAccessToken] = useState(
    getLocalStorage("accessToken")
  );
  const [notes, setNotes] = useState();
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [theme, setTheme] = useState(getLocalStorage("theme") || "light");
  const [language, setLanguage] = useState(getLocalStorage("language") || "id");

  function getLocalStorage(name) {
    return localStorage.getItem(name);
  }

  function putLocalStorage(name, value) {
    return localStorage.setItem(name, value);
  }

  const filteredNote = (keyword, data) => {
    return data?.filter((note) =>
      note?.title.toLowerCase().includes(keyword.toLowerCase())
    );
  };

  async function fetchWithToken(url, options = {}) {
    return fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${getLocalStorage("accessToken")}`,
      },
    });
  }

  async function login({ email, password }) {
    const response = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const responseJson = await response.json();

    if (responseJson.status !== "success") {
      alert(responseJson.message);
      return { error: true, data: null };
    }

    return { error: false, data: responseJson.data };
  }

  async function register({ name, email, password }) {
    const response = await fetch(`${BASE_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    const responseJson = await response.json();

    if (responseJson.status !== "success") {
      alert(responseJson.message);
      return { error: true };
    }

    return { error: false };
  }

  async function getUserLogged() {
    const response = await fetchWithToken(`${BASE_URL}/users/me`);
    const responseJson = await response.json();

    if (responseJson.status !== "success") {
      return { error: true, data: null };
    }

    return { error: false, data: responseJson.data };
  }

  async function addNote({ title, body }) {
    const response = await fetchWithToken(`${BASE_URL}/notes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, body }),
    });

    const responseJson = await response.json();

    if (responseJson.status !== "success") {
      return { error: true, data: null };
    }

    return { error: false, data: responseJson.data };
  }

  async function getActiveNotes() {
    try {
      setIsLoading(true);
      const response = await fetchWithToken(`${BASE_URL}/notes`);
      const responseJson = await response.json();
      if (responseJson.status !== "success") {
        return { error: true, data: null };
      }
      return { error: false, data: responseJson.data };
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function getArchivedNotes() {
    try {
      setIsLoading(true);
      const response = await fetchWithToken(`${BASE_URL}/notes/archived`);
      const responseJson = await response.json();

      if (responseJson.status !== "success") {
        return { error: true, data: null };
      }

      return { error: false, data: responseJson.data };
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function getNote(id) {
    try {
      setIsLoading(true);
      const response = await fetchWithToken(`${BASE_URL}/notes/${id}`);
      const responseJson = await response.json();

      if (responseJson.status !== "success") {
        return { error: true, data: null };
      }

      return { error: false, data: responseJson.data };
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function archiveNote(id) {
    const response = await fetchWithToken(`${BASE_URL}/notes/${id}/archive`, {
      method: "POST",
    });

    const responseJson = await response.json();

    if (responseJson.status !== "success") {
      return { error: true, data: null };
    }

    return { error: false, data: responseJson.data };
  }

  async function unarchiveNote(id) {
    const response = await fetchWithToken(`${BASE_URL}/notes/${id}/unarchive`, {
      method: "POST",
    });

    const responseJson = await response.json();

    if (responseJson.status !== "success") {
      return { error: true, data: null };
    }

    return { error: false, data: responseJson.data };
  }

  async function deletedNote(id) {
    const response = await fetchWithToken(`${BASE_URL}/notes/${id}`, {
      method: "DELETE",
    });

    const responseJson = await response.json();
    if (responseJson.status !== "success") {
      return { error: true, data: null };
    }

    return { error: false, responseJson };
  }

  const appContextValue = {
    accessToken,
    notes,
    language,
    theme,
    isLoading,
    user,
    setUser,
    setAccessToken,
    setNotes,
    setLanguage,
    setTheme,
    setIsLoading,
    login,
    register,
    getUserLogged,
    addNote,
    getNote,
    getActiveNotes,
    getArchivedNotes,
    archiveNote,
    unarchiveNote,
    deletedNote,
    getLocalStorage,
    putLocalStorage,
    filteredNote,
  };

  return (
    <AppContext.Provider value={appContextValue}>
      {children}
    </AppContext.Provider>
  );
}
