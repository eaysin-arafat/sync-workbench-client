import clsx from "clsx";
import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import InputError from "../../atoms/input-error";
import InputLabel from "../../atoms/input-label";

type PasswordInputProps = {
  label?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  placeholder?: string;
  disabled?: boolean;
  readOnly?: boolean;
  id?: string;
  errMsg?: string;
  required?: boolean;
  className?: string;
  onClick?: () => void;
  inputClassName?: string;
  labelClassName?: string;
  iconClassName?: string;
  [x: string]: any;
};

const PasswordInput = ({
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
  labelClassName,
  iconClassName,
  ...props
}: PasswordInputProps) => {
  // password visibility state
  const [showPassword, setShowPassword] = useState(false);

  // toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={clsx("mb-4", className)}>
      {label && <InputLabel label={label} required={required} />}

      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          name={name}
          value={value}
          onChange={onChange}
          onClick={onClick}
          disabled={disabled}
          placeholder={placeholder ? placeholder : `Enter ${label}`}
          id={id}
          readOnly={readOnly}
          className={clsx(
            "w-full rounded-lg border border-formBorder bg-formBg py-3 pl-4 pr-10 text-sm text-textColor outline-none focus:border-primary focus-visible:shadow-none",
            inputClassName
          )}
          {...props}
        />

        {/* VISIBILITY TOGGLER */}
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-4 top-1/2 text-base transform -translate-y-1/2 cursor-pointer dark:text-gray-500"
        >
          {showPassword ? (
            <FiEyeOff size={15} className="text-xl text-grayTextColor" />
          ) : (
            <FiEye size={15} className="text-xl text-grayTextColor" />
          )}
        </button>
      </div>

      {errMsg && <InputError errMsg={errMsg} />}
    </div>
  );
};

export default PasswordInput;
