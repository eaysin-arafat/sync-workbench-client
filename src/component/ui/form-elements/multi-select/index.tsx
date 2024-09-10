import { BaseInputType } from "@/constants/form-interface/form-input";
import { MultiSelect as MantineMultiSelect } from "@mantine/core";
import React from "react";

interface Option {
  label: string;
  value: string;
}

interface Props {
  value?: string[];
  onChange?: (value: string[]) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  options?: Option[];
  defaultValue?: string[] | null;
}

export type MultiSelectProps = BaseInputType & Props;

const MultiSelect = React.forwardRef<HTMLInputElement, MultiSelectProps>(
  (props, ref) => {
    const {
      disabled,
      error,
      label,
      name,
      onChange,
      placeholder,
      required,
      onBlur,
      value,
      options = [],
      defaultValue,
      id,
    } = props;

    // Ensure options are in the correct format
    const formattedOptions = options.map((option) => ({
      label: option.label,
      value: option.value,
    }));

    // Convert value and defaultValue to string arrays if necessary
    const valueArray = Array.isArray(value) ? value : [];
    const defaultValueArray = Array.isArray(defaultValue) ? defaultValue : [];

    // Handle changes
    // Handle changes
    const handleChange = (val: string[]) => {
      if (onChange) {
        onChange(val); // Pass only the value array
      }
    };

    return (
      <MantineMultiSelect
        ref={ref}
        label={label}
        placeholder={
          placeholder ? placeholder : `Select ${label?.toLowerCase()}`
        }
        data={formattedOptions}
        value={valueArray}
        onChange={handleChange}
        defaultValue={defaultValueArray}
        withAsterisk={required}
        name={name}
        id={id}
        error={error}
        onBlur={onBlur}
        disabled={disabled}
        searchable
        styles={{
          label: { fontWeight: 500 },
          pill: {
            borderRadius: "0px",
            backgroundColor: "transparent",
            paddingLeft: "4px",
            fontSize: "14px",
            margin: 0,
          },
        }}
      />
    );
  }
);

export default MultiSelect;
