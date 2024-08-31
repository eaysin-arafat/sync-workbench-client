import InputError from "../../atoms/input-error";
import InputLabel from "../../atoms/input-label";

type TextareaProps = {
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void | undefined;
  name?: string;
  label?: string;
  required?: boolean;
  errMsg?: string;
  disabled?: boolean;
  placeholder?: string;
  id?: string;
  rows?: number;
};

// Textarea input component
function Textarea({
  value,
  onChange,
  name,
  label,
  required,
  errMsg,
  disabled,
  placeholder,
  id,
  rows = 6,
}: TextareaProps) {
  return (
    <div>
      {label && <InputLabel label={label} required={required} />}

      <textarea
        value={value}
        name={name}
        onChange={onChange}
        id={id}
        rows={rows}
        disabled={disabled}
        placeholder={placeholder ? placeholder : `Enter ${placeholder}`}
        className="w-full rounded-lg border-[1.5px] border-formBorder bg-formBg py-3 px-5 text-textColor outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
      />

      {errMsg && <InputError errMsg={errMsg} />}
    </div>
  );
}

export default Textarea;
