import { BaseInputType } from "@/constants/form-interface/form-input";
import withController from "@/hoc/withController";
import { Select as MantineSelect } from "@mantine/core";
import { Control, FieldPath, FieldValues } from "react-hook-form";

interface Option {
  label: string;
  value: string;
}

interface Props {
  value?: string;
  onChange?: (value: string | null, option: Option | undefined) => void;
  options?: Option[];
}

type SelectProps = BaseInputType & Props;

const Select = ({
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
}: SelectProps) => {
  // Handle change event
  const handleChange = (val: string | null) => {
    const selectedOption = options.find((option) => option.value === val);
    if (onChange) {
      onChange(val, selectedOption);
    }
  };

  return (
    <MantineSelect
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
      withAsterisk={required}
      name={name}
      id={id}
      error={errMsg}
      disabled={disabled}
    />
  );
};

// Define the props for the controlled select component
interface ControlledSelectProps<T extends FieldValues> extends SelectProps {
  control: Control<T>;
  name: FieldPath<T>;
}

// Wrap the Select component with `withController`
export const ControlledSelect = <T extends FieldValues>(
  props: ControlledSelectProps<T>
) => withController<T, ControlledSelectProps<T>>(Select)(props);

export default Select;
