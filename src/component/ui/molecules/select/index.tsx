import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import InputError from "../../atoms/input-error";
import InputLabel from "../../atoms/input-label";

interface Option {
  label: string;
  value: string | number;
}

interface SelectProps {
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  name?: string;
  label?: string;
  required?: boolean;
  errMsg?: number | string;
  disabled?: boolean;
  className?: string;
  placeholder?: string;
  readOnly?: boolean;
  options?: Option[] | (string | number)[];
  height?: string;
  width?: string;
  defaultValue?: string | number;
}

const Select = ({
  className,
  disabled,
  errMsg,
  label,
  name,
  onChange,
  placeholder,
  required,
  value,
  options = [],
  height,
  width,
  defaultValue,
}: SelectProps) => {
  const processedOptions: Option[] = options.map((option) =>
    typeof option === "string" || typeof option === "number"
      ? { label: option.toString(), value: option }
      : option
  );

  return (
    <div className="h-full w-full">
      {label && <InputLabel label={label} required={required} />}

      <div className="relative z-20 bg-bgColor" style={{ height, width }}>
        <select
          value={value}
          name={name}
          onChange={onChange}
          disabled={disabled}
          defaultValue={defaultValue}
          className={`relative z-20 appearance-none bg-bgColor px-4 active:border-primary w-full rounded-lg border border-formBorder py-2 pl-4 pr-10 text-sm text-textColor outline-none focus:border-primary focus-visible:shadow-none ${className}`}
        >
          <option value="" className="text-body">
            {placeholder || "Select an option"}
          </option>
          {processedOptions.map((option) => (
            <option
              key={option.value}
              value={option.value}
              className="text-body"
            >
              {option.label}
            </option>
          ))}
        </select>

        <span className="absolute top-1/2 right-2 z-20 -translate-y-1/2 text-textColor">
          <RiArrowDropDownLine className="" size={25} />
        </span>
      </div>

      {errMsg && <InputError />}
    </div>
  );
};

export default Select;
