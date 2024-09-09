import { BaseInputType } from "@/constants/form-interface/form-input";
import { NumberInput as MantineNumberInput } from "@mantine/core";
import React from "react";

interface Props {
  onChange?: (value: string | number) => void;
}

type NumberInputProps = BaseInputType & Props;

// Define the Input component using React.forwardRef
const NumberInput = React.forwardRef<HTMLInputElement, NumberInputProps>(
  (Props: NumberInputProps, ref) => {
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
    } = Props;

    return (
      <MantineNumberInput
        ref={ref}
        value={value}
        withAsterisk={required}
        label={label}
        styles={{ label: { fontWeight: 400 } }}
        name={name}
        placeholder={placeholder ? placeholder : `Enter ${label}`}
        readOnly={readOnly}
        onClick={onClick}
        id={id}
        error={error}
        onChange={onChange}
        disabled={disabled}
      />
    );
  }
);

export default NumberInput;
