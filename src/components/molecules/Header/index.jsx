import { useEffect } from "react";
import { Button } from "../../atoms";
import { VscSignOut } from "react-icons/vsc";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../../../context/app-context";
import { MdDarkMode, MdSunny, MdTranslate } from "react-icons/md";

export const Header = () => {
  const navigate = useNavigate();
  const {
    theme,
    setTheme,
    language,
    setLanguage,
    accessToken,
    setAccessToken,
    putLocalStorage,
    getUserLogged,
    setUser,
    user,
  } = useAppContext();

  useEffect(() => {
    putLocalStorage("theme", theme);
    putLocalStorage("language", language);

    if (accessToken && !user) {
      getUser();
    }
  }, [theme, language]);

  const getUser = async () => {
    const userLogged = await getUserLogged();
    setUser(userLogged);
  };

  const toogleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  const toogleLanguage = () => {
    const newLanguage = language === "id" ? "eng" : "id";
    setLanguage(newLanguage);
  };

  const toogleLogout = () => {
    localStorage.removeItem("accessToken");
    setAccessToken(null);
    navigate("/");
  };

  return (
    <header
      className={`py-5 transition-all duration-500 h-20 ${
        theme === "dark" ? "bg-black text-gray-50" : "bg-gray-50 text-black"
      }`}
    >
      <div className="container mx-auto">
        <div className="w-full flex justify-between items-center">
          <Link to="/">
            <h1 className="text-2xl font-bold underline">
              {language === "id" ? "Aplikasi Catatan" : "Notes App"}
            </h1>
          </Link>
          <div className="flex space-x-5 items-center">
            {accessToken ? (
              <Link to="/archieved">
                <h4 className="text-lg font-semibold underline">
                  {language === "id" ? "Catatan Arsip" : "Archieve Note"}
                </h4>
              </Link>
            ) : (
              ""
            )}

            <Button onClick={toogleTheme}>
              {theme === "dark" ? (
                <MdSunny size={25} />
              ) : (
                <MdDarkMode size={25} />
              )}
            </Button>

            <Button onClick={toogleLanguage}>
              <MdTranslate size={25} />
            </Button>

            {accessToken ? (
              <Button onClick={toogleLogout}>
                <VscSignOut size={25} />
                <span className="text-yellow-500 capitalize">
                  {user?.data?.name}
                </span>
              </Button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
