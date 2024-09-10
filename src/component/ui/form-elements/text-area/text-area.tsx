import { BaseInputType } from "@/constants/form-interface/form-input";
import { Textarea as MantineTextarea } from "@mantine/core";
import React from "react";

type Props = {
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  rows?: number;
};

type TextareaProps = BaseInputType & Props;

// Textarea input component
const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (Props: TextareaProps, ref) => {
    const {
      disabled,
      error,
      id,
      label,
      name,
      onChange,
      placeholder,
      onBlur,
      required,
      value,
      rows,
    } = Props;

    return (
      <MantineTextarea
        ref={ref}
        value={value}
        name={name}
        label={label}
        onChange={onChange}
        onBlur={onBlur}
        withAsterisk={required}
        styles={{ label: { fontWeight: 500 } }}
        id={id}
        rows={rows}
        disabled={disabled}
        placeholder={
          placeholder ? placeholder : `Enter ${label?.toLowerCase()}`
        }
        error={error}
      />
    );
  }
);

export default Textarea;
