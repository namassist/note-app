import { useAppContext } from "../../../context/app-context";

export const Loader = () => {
  const { theme } = useAppContext();

  return (
    <div className="flex space-x-2 justify-center items-center mt-10">
      <span className="sr-only">Loading...</span>
      <div
        className={`h-3 w-3 rounded-full animate-bounce [animation-delay:-0.3s] ${
          theme === "light" ? "bg-black" : "bg-gray-50"
        }`}
      ></div>
      <div
        className={`h-3 w-3 rounded-full animate-bounce [animation-delay:-0.15s] ${
          theme === "light" ? "bg-black" : "bg-gray-50"
        }`}
      ></div>
      <div
        className={`h-3 w-3 rounded-full animate-bounce ${
          theme === "light" ? "bg-black" : "bg-gray-50"
        }`}
      ></div>
    </div>
  );
};
