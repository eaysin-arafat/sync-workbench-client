import clsx from "clsx";
import Asterisk from "../asterisk";

interface InputLabelProps {
  className?: string;
  label: string;
  htmlFor?: string;
  required?: boolean;
}

const InputLabel = ({
  label,
  className,
  htmlFor,
  required,
}: InputLabelProps) => {
  return (
    <div className="flex w-full">
      <label
        className={clsx(
          "mb-1 block font-medium text-sm text-textColor",
          className
        )}
        htmlFor={htmlFor}
      >
        {label}
      </label>
      {required && <Asterisk />}
    </div>
  );
};

export default InputLabel;
