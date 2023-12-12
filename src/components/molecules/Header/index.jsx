import { Link, useLocation } from "react-router-dom";

export const Header = ({ title }) => {
  const { pathname } = useLocation();

  return (
    <header className="bg-sky-500 py-5 text-gray-50">
      <div className="container">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-2xl">{title}</h1>
          <Link to={pathname === "/" ? "/archieve" : "/"}>
            {pathname === "/" ? "Archieve" : "Active"}
          </Link>
        </div>
      </div>
    </header>
  );
};
