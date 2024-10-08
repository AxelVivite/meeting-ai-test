import clsx from "clsx";
import { ErrorMessage, Field } from "formik";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  error?: boolean | string;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type,
  required,
  error,
}) => {
  const borderColor = error ? "border-red-400" : "border-zinc-400";

  return (
    <div className="relative">
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-white"
      >
        {label}
        {required && <span className="text-red-500"> *</span>}
      </label>
      <Field
        type={type ?? "text"}
        id={id}
        name={id}
        className={clsx(
          borderColor,
          "block w-full rounded-md border-0 bg-white/5 px-3 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
        )}
      />
      <ErrorMessage
        name={id}
        component="div"
        className="absolute right-0 top-1 text-xs text-red-500"
      />
    </div>
  );
};

export default Input;
