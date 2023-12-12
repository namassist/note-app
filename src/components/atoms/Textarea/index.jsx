export const Textarea = ({ value, onChange, placeholder }) => {
  return (
    <textarea
      value={value}
      onChange={onChange}
      className="mt-1 block w-full border border-[#F5F5F7] rounded-md text-[#354052]"
      placeholder={placeholder}
    />
  );
};
