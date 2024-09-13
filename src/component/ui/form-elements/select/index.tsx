import { BaseInputType } from "@/constants/form-interface/form-input";
import { Select as MantineSelect } from "@mantine/core";
import React from "react";

export interface SelectOptionDataType {
  label: string;
  value: string;
}

interface Props {
  value?: string;
  onChange?: (
    value: string | null,
    option: SelectOptionDataType | undefined
  ) => void;
  options?: SelectOptionDataType[];
  variant?: "default" | "filled" | "unstyled";
  searchable?: boolean;
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
      variant = "default",
      readOnly,
      searchable = true,
    }: SelectProps,
    ref
  ) => {
    return (
      <MantineSelect
        ref={ref}
        label={label}
        placeholder={
          placeholder ? placeholder : `Enter ${label?.toLowerCase()}`
        }
        variant={variant}
        data={
          options.map((option) => ({
            label: option.label,
            value: option.value,
          })) || []
        }
        readOnly={readOnly}
        value={value}
        onChange={onChange}
        defaultValue={defaultValue}
        styles={{ label: { fontWeight: 500 } }}
        searchable={searchable}
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
