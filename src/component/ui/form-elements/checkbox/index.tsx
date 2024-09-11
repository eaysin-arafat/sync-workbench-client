import { BaseInputType } from "@/constants/form-interface/form-input";
import { Checkbox as MantineCheckbox } from "@mantine/core";
import React from "react";

interface Props {
  checked?: boolean; // The boolean checked state of the checkbox
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
  readOnly?: boolean;
}

export type CheckboxProps = BaseInputType & Props;

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (Props: CheckboxProps, ref) => {
    const {
      disabled,
      error,
      id,
      label,
      name,
      onChange,
      onClick,
      readOnly,
      checked = false,
    } = Props;

    // const [isChecked, setIsChecked] = useState<boolean>(value || false);

    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //   const newCheckedState = !isChecked;
    //   setIsChecked(newCheckedState);
    //   if (onChange) onChange(e);
    // };

    return (
      <MantineCheckbox
        ref={ref}
        styles={{
          root: { marginTop: "8px" },
          label: { fontWeight: 500, fontSize: "15px" },
        }}
        size="xs"
        checked={checked}
        onChange={onChange}
        onClick={onClick}
        readOnly={readOnly}
        name={name}
        label={label}
        id={id}
        error={error}
        disabled={disabled}
      />
    );
  }
);

export default Checkbox;
