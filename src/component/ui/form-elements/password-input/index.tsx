import { PasswordInput as MantinePasswordInput } from "@mantine/core";
import React from "react";

export interface PasswordInputProps {
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
}

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  (props, ref) => {
    const {
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
    } = props;
    return (
      <MantinePasswordInput
        ref={ref}
        name={name}
        value={value}
        label={label}
        onChange={onChange}
        styles={{ label: { fontWeight: 500 } }}
        onClick={onClick}
        disabled={disabled}
        placeholder={
          placeholder ? placeholder : `Enter ${label?.toLowerCase()}`
        }
        id={id}
        readOnly={readOnly}
        error={error}
        withAsterisk={required}
        {...props}
      />
    );
  }
);

export default PasswordInput;
