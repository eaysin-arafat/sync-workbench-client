import { BaseInputType } from "@/constants/form-interface/form-input";
import withController from "@/hoc/withController";
import { MultiSelect as MantineMultiSelect } from "@mantine/core";
import { Control, FieldPath, FieldValues } from "react-hook-form";

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

type MultiSelectProps = BaseInputType & Props;

const MultiSelect = ({
  disabled,
  errMsg,
  label,
  name,
  onChange,
  placeholder,
  required,
  value,
  options = [],
  defaultValue,
  id,
}: MultiSelectProps) => {
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
      label={label}
      placeholder={placeholder ? placeholder : `Select ${label}`}
      data={formattedOptions}
      value={valueArray}
      onChange={handleChange}
      defaultValue={defaultValueArray}
      withAsterisk={required}
      name={name}
      id={id}
      error={errMsg}
      disabled={disabled}
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
};

export default MultiSelect;

// Define the props for the controlled select component
interface ControlledMultiSelectProps<T extends FieldValues>
  extends MultiSelectProps {
  control: Control<T>;
  name: FieldPath<T>;
}

// Wrap the Select component with `withController`
export const ControlledMultiSelect = <T extends FieldValues>(
  props: ControlledMultiSelectProps<T>
) => withController<T, ControlledMultiSelectProps<T>>(MultiSelect)(props);
