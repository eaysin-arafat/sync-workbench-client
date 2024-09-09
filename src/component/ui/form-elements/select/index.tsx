import { BaseInputType } from "@/constants/form-interface/form-input";
import { Select as MantineSelect } from "@mantine/core";
import React from "react";

interface Option {
  label: string;
  value: string;
}

interface Props {
  value?: string;
  onChange?: (value: string | null, option: Option | undefined) => void;
  options?: Option[];
}

export type SelectProps = BaseInputType & Props;

// Define Select using React.forwardRef
const Select = React.forwardRef<HTMLInputElement, SelectProps>(
  (
    {
      disabled,
      error,
      label,
      name,
      onChange,
      placeholder,
      required,
      value,
      options = [],
      defaultValue,
      id,
    }: SelectProps,
    ref
  ) => {
    // Handle change event
    const handleChange = (val: string | null) => {
      const selectedOption = options.find((option) => option.value === val);
      if (onChange) {
        onChange(val, selectedOption);
      }
    };

    return (
      <MantineSelect
        ref={ref} // Forward the ref to the MantineSelect
        label={label}
        placeholder={placeholder ? placeholder : `Enter ${label}`}
        data={options.map((option) => ({
          label: option.label,
          value: option.value,
        }))}
        value={value}
        onChange={handleChange}
        defaultValue={defaultValue}
        styles={{ label: { fontWeight: 400 } }}
        searchable
        withAsterisk={required}
        name={name}
        id={id}
        error={error}
        disabled={disabled}
      />
    );
  }
);

export default Select;
