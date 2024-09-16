import { BaseInputType } from "@/constants/form-interface/form-input";
import { Checkbox as MantineCheckbox } from "@mantine/core";
import React, { useState } from "react";

interface Props {
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
  readOnly?: boolean;
  indeterminate?: boolean;
  isTopMargin?: boolean;
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
      isTopMargin = true,
    } = Props;

    const [isChecked, setIsChecked] = useState<boolean>(checked || false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newCheckedState = !isChecked;
      setIsChecked(newCheckedState);
      if (onChange) onChange(e);
    };

    return (
      <MantineCheckbox
        ref={ref}
        styles={{
          root: { marginTop: isTopMargin ? "8px" : "" },
          label: { fontWeight: 500, fontSize: "15px" },
        }}
        size="xs"
        checked={checked}
        onChange={handleChange}
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
