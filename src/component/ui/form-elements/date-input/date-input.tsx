import { BaseInputType } from "@/constants/form-interface/form-input";
import { DateInput as MantineDateInput } from "@mantine/dates";
import React from "react";

// INPUT PROPS
type Props = {
  value?: Date;
  onChange: (date: Date | null) => void;
  height?: string;
};

export type DateInputProps = BaseInputType & Props;

// Define DateInput using React.forwardRef
const DateInput = React.forwardRef<HTMLInputElement, DateInputProps>(
  (Props: DateInputProps, ref) => {
    const {
      value,
      onChange,
      name,
      label,
      required,
      error,
      disabled,
      placeholder,
      readOnly = false,
      onClick,
      id,
      height,
    } = Props;

    return (
      <MantineDateInput
        ref={ref} // Forward the ref to the MantineDateInput
        value={value}
        name={name}
        onChange={(date) => onChange(date)}
        styles={{
          input: { height: height },
          label: { fontWeight: 400 },
        }}
        label={label}
        placeholder={placeholder ? placeholder : `Enter ${label}`}
        withAsterisk={required}
        disabled={disabled}
        error={error}
        readOnly={readOnly}
        id={id}
        onClick={onClick}
      />
    );
  }
);

export default DateInput;
