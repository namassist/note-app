import { PropTypes } from "prop-types";

export const Input = ({ type, value, onChange, placeholder, className }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      className={`mt-1 block w-full border border-yellow-500 rounded-md text-gray-600 ${className}`}
      placeholder={placeholder}
      required
    />
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};
