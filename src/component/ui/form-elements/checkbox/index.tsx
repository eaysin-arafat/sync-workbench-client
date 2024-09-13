import { BaseInputType } from "@/constants/form-interface/form-input";
import { Checkbox as MantineCheckbox } from "@mantine/core";
import React from "react";

interface Props {
  checked?: boolean; // The boolean checked state of the checkbox
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
  readOnly?: boolean;
  indeterminate?: boolean;
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
      indeterminate,
      checked = false,
    } = Props;

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
        indeterminate={indeterminate}
        id={id}
        error={error}
        disabled={disabled}
      />
    );
  }
);

export default Checkbox;
