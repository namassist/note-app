import { Link, useLocation } from "react-router-dom";
import { PropTypes } from "prop-types";

export const Header = ({ title }) => {
  const { pathname } = useLocation();

  return (
    <header className="bg-black py-5 text-gray-50">
      <div className="container">
        <div className="w-full flex justify-between items-center">
          <Link to="/">
            <h1 className="text-2xl font-bold underline">{title}</h1>
          </Link>
          <Link to={pathname === "/" ? "/archieved" : "/"}>
            <h4 className="text-lg font-semibold underline">
              {pathname === "/" ? "Archieved" : "Active"} Note
            </h4>
          </Link>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
