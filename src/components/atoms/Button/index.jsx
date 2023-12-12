export const Button = ({ onClick, text }) => {
  return (
    <button
      onClick={onClick}
      className="p-3 bg-sky-200 rounded-md capitalize w-full"
    >
      {text}
    </button>
  );
};
