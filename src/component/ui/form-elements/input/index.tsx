import { BaseInputType } from "@/constants/form-interface/form-input";
import { Input as MantineInput } from "@mantine/core";
import React from "react";

// Define the Input component using React.forwardRef
const Input = React.forwardRef<HTMLInputElement, BaseInputType>(
  (Props: BaseInputType, ref) => {
    const {
      type = "text",
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
    } = Props;

    return (
      <MantineInput.Wrapper
        withAsterisk={required}
        label={label}
        error={error}
        styles={{ label: { fontWeight: 400 } }}
      >
        <MantineInput
          ref={ref} // Forward the ref to the MantineInput
          value={value}
          name={name}
          type={type}
          placeholder={placeholder ? placeholder : `Enter ${label}`}
          readOnly={readOnly}
          onClick={onClick}
          id={id}
          error={error}
          onChange={onChange}
          disabled={disabled}
          styles={{
            input: {
              backgroundColor: "var(--bgColor)",
            },
          }}
        />
      </MantineInput.Wrapper>
    );
  }
);

export default Input;
