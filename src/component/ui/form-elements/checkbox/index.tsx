import { Checkbox as MantineCheckbox } from "@mantine/core";
import { useState } from "react";

interface CheckBoxProps {
  value?: boolean; // The boolean checked state of the checkbox
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  label?: string;
  errMsg?: string;
  disabled?: boolean;
  readOnly?: boolean;
  onClick?: () => void;
  id?: string;
}

const Checkbox = ({
  disabled,
  errMsg,
  id,
  label,
  name,
  onChange,
  onClick,
  readOnly,
  value,
}: CheckBoxProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(value || false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    if (onChange) onChange(e);
  };

  return (
    <MantineCheckbox
      styles={{
        input: {
          height: "17px",
          width: "17px",
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
        },
        icon: {
          height: "9px",
          width: "9px",
          marginTop: "4px",
        },
        inner: {
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
        },
      }}
      checked={isChecked}
      onChange={handleChange}
      onClick={onClick}
      readOnly={readOnly}
      name={name}
      label={label}
      id={id}
      error={errMsg}
      disabled={disabled}
    />
  );
};

export default Checkbox;
