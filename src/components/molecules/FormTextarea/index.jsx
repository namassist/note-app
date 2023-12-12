import { Textarea } from "../../atoms";

export const FormTextarea = ({ label, ...props }) => {
  return (
    <label className="block">
      <span className="text-gray-700">{label}</span>
      <Textarea {...props} />
    </label>
  );
};
