import { useState, useEffect } from "react";
import { data } from "../utils/data";
import { useSearchParams, useNavigate } from "react-router-dom";

export function useNotes() {
  const maxTitle = 50;
  const navigate = useNavigate();

  const [notes, setNotes] = useState(data);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchValue = searchParams.get("keyword") || "";

  const handleInputChange = (e) => {
    if (input.title.length <= maxTitle) {
      setInput({ ...input, title: e.target.value.slice(0, maxTitle) });
    }
  };

  const filteredNotes = notes?.filter((note) =>
    note?.title.toLowerCase().includes(searchValue.toLowerCase())
  );
  console.log("filteredNotes", filteredNotes);

  const handleDelete = (id) => {
    const updatedNotes = notes?.filter((note) => note.id !== id);
    console.log("updatedNotes", updatedNotes);
    setNotes(updatedNotes);
    navigate("/");
  };

  const getDate = (dateString) => {
    const date = new Date(dateString);

    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    return date.toLocaleString("id-ID", options);
  };

  return {
    maxTitle,
    notes,
    searchValue,
    filteredNotes,
    handleInputChange,
    handleDelete,
    setSearchParams,
    getDate,
  };
}
