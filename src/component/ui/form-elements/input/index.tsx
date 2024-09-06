import { BaseInputType } from "@/constants/form-interface/form-input";
import withController from "@/hoc/withController";
import { Input as MantineInput } from "@mantine/core";
import { Control, FieldPath, FieldValues } from "react-hook-form";

// Define the props for the ControlledInput
export interface ControlledInputProps<T extends FieldValues>
  extends BaseInputType {
  control: Control<T>;
  name: FieldPath<T>;
}

const Input = ({
  type = "text",
  placeholder = "",
  label,
  errMsg,
  required,
  disabled,
  name,
  onChange,
  onClick,
  readOnly,
  id,
  value,
}: BaseInputType) => {
  return (
    <MantineInput.Wrapper
      withAsterisk={required}
      label={label}
      error={errMsg}
      styles={{ label: { fontWeight: 400 } }}
    >
      <MantineInput
        value={value}
        name={name}
        type={type}
        placeholder={placeholder ? placeholder : `Enter ${label}`}
        readOnly={readOnly}
        onClick={onClick}
        id={id}
        error={errMsg}
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
};

export const ControlledInput = <T extends FieldValues>(
  props: ControlledInputProps<T>
) => withController<T, ControlledInputProps<T>>(Input)(props);

export default Input;
