import { BaseInputType } from "@/constants/form-interface/form-input";
import { MultiSelect as MantineMultiSelect } from "@mantine/core";
import React from "react";

interface Option {
  label: string;
  value: string;
}

interface Props {
  value?: string[] | null;
  onChange?: (value: string[], selectedOptions: Option[]) => void;
  options?: Option[];
  defaultValue?: string[] | null;
}

export type MultiSelectProps = BaseInputType & Props;

const MultiSelect = React.forwardRef<HTMLInputElement, MultiSelectProps>(
  (Props, ref) => {
    const {
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
    } = Props;

    // Ensure options are in the correct format
    const formattedOptions = options.map((option) => ({
      label: option.label,
      value: option.value,
    }));

    // Convert value and defaultValue to string arrays if necessary
    const valueArray = Array.isArray(value) ? value : [];
    const defaultValueArray = Array.isArray(defaultValue) ? defaultValue : [];

    // Handle changes
    const handleChange = (val: string[]) => {
      const selectedOptions = formattedOptions.filter((option) =>
        val.includes(option.value)
      );
      if (onChange) {
        onChange(val, selectedOptions);
      }
    };

    return (
      <MantineMultiSelect
        ref={ref}
        label={label}
        placeholder={placeholder ? placeholder : `Select ${label}`}
        data={formattedOptions}
        value={valueArray}
        onChange={handleChange}
        defaultValue={defaultValueArray}
        withAsterisk={required}
        name={name}
        id={id}
        error={error}
        disabled={disabled}
        searchable
        styles={{
          label: { fontWeight: 400 },
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
