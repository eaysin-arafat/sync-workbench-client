import clsx from "clsx";
import React from "react";
import InputError from "../../atoms/input-error";
import InputLabel from "../../atoms/input-label";

type InputProps = {
  type?: string;
  label?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  placeholder?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  readOnly?: boolean;
  id?: string;
  errMsg?: string;
  required?: boolean;
  className?: string;
  onClick?: () => void;
  inputClassName?: string;
  iconClassName?: string;
  [x: string]: any;
};

const Input = ({
  type = "text",
  placeholder = "",
  label,
  icon,
  errMsg,
  required,
  disabled,
  name,
  onChange,
  onClick,
  readOnly,
  id,
  value,
  className,
  inputClassName,
  iconClassName,
  ...props
}: InputProps) => {
  return (
    <div className={clsx(className)}>
      {label && <InputLabel label={label} required />}

      <div className="relative">
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onClick={onClick}
          disabled={disabled}
          placeholder={placeholder ? placeholder : `Enter ${label}`}
          id={id}
          readOnly={readOnly}
          className={clsx(
            "w-full rounded-lg border border-formBorder bg-bgColor py-2 pl-4 pr-4 text-sm text-textColor outline-none focus:border-primary focus-visible:shadow-none placeholder:text-placeholderColor",
            inputClassName
          )}
          {...props}
        />
        {icon && (
          <span className={clsx("absolute right-4 top-3.5", iconClassName)}>
            {icon}
          </span>
        )}
      </div>

      {errMsg && <InputError errMsg={errMsg} />}
    </div>
  );
};

export default Input;
