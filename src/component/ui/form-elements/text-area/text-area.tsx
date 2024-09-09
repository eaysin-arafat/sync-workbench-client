import { BaseInputType } from "@/constants/form-interface/form-input";
import { Textarea as MantineTextarea } from "@mantine/core";

type Props = {
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void | undefined;
  rows?: number;
};

type TextareaProps = BaseInputType & Props;

// Textarea input component
function Textarea({
  value,
  onChange,
  name,
  label,
  required,
  error,
  disabled,
  placeholder,
  id,
  rows,
}: TextareaProps) {
  return (
    <MantineTextarea
      value={value}
      name={name}
      label={label}
      onChange={onChange}
      withAsterisk={required}
      styles={{ label: { fontWeight: 400 } }}
      id={id}
      rows={rows}
      disabled={disabled}
      placeholder={placeholder ? placeholder : `Enter ${placeholder}`}
      error={error}
    />
  );
}

export default Textarea;
