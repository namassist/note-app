import React from "react";
import { Header } from "../../molecules";
import { useAppContext } from "../../../context/app-context";

export const Layout = ({ children }) => {
  const { theme } = useAppContext();
  return (
    <>
      <Header />
      <main
        className={`py-5 space-y-3 transition-all duration-500 min-h-[calc(100vh_-_5rem)] ${
          theme === "dark" ? "bg-black text-gray-50" : "text-black bg-gray-50"
        }`}
      >
        <div className="container mx-auto">{children}</div>
      </main>
    </>
  );
};
