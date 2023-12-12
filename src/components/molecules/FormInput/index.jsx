import { Input } from "../../atoms";

export const FormInput = ({ label, ...props }) => {
  return (
    <label className="block">
      <span className="text-gray-700">{label}</span>
      <Input {...props} />
    </label>
  );
};
