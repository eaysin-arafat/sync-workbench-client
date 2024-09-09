import { PasswordInput as MantinePasswordInput } from "@mantine/core";
import React from "react";

type PasswordInputProps = {
  label?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  placeholder?: string;
  disabled?: boolean;
  readOnly?: boolean;
  id?: string;
  error?: string;
  required?: boolean;
  className?: string;
  onClick?: () => void;
  [x: string]: any;
};

const PasswordInput = ({
  placeholder = "",
  label,
  error,
  required,
  disabled,
  name,
  onChange,
  onClick,
  readOnly,
  id,
  value,
  ...props
}: PasswordInputProps) => {
  return (
    <MantinePasswordInput
      name={name}
      value={value}
      onChange={onChange}
      onClick={onClick}
      disabled={disabled}
      placeholder={placeholder ? placeholder : `Enter ${label}`}
      id={id}
      readOnly={readOnly}
      error={error}
      withAsterisk={required}
      {...props}
    />
  );
};

export default PasswordInput;
