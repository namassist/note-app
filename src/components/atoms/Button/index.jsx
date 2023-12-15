import { PropTypes } from "prop-types";

export const Button = ({ onClick, myClass, children }) => {
  return (
    <button
      onClick={onClick}
      className={`px-2 py-1 rounded-md capitalize ${myClass}`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  myClass: PropTypes.string,
};
