import React, { useRef, useState } from "react";
import { BsCheck } from "react-icons/bs";
import { HiOutlineSelector } from "react-icons/hi";
import Asterisk from "../../atoms/asterisk";
import InputLabel from "../../atoms/input-label";

interface Option {
  label: string;
  value: number;
}

interface MultiSelectProps {
  options?: Option[];
  value: number[];
  onChange: (selected: number[]) => void;
  label?: string;
  placeholder?: string;
  id?: string;
}

const MultiSelect: React.FC<MultiSelectProps> = ({
  options,
  value,
  onChange,
  label,
  id,
  placeholder = "Select...",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelectOption = (optionValue: number) => {
    if (value.includes(optionValue)) {
      onChange(value.filter((val) => val !== optionValue));
    } else {
      onChange([...value, optionValue]);
    }
  };

  const isSelected = (optionValue: number) => value.includes(optionValue);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  // Close the dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setIsFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className={`relative h-full w-full ${isFocused ? "border-primary" : ""}`}
      onClick={toggleDropdown}
      onFocus={handleFocus}
      onBlur={handleBlur}
      tabIndex={0}
      ref={dropdownRef}
    >
      {label && (
        <div className="flex w-full">
          <InputLabel htmlFor={id} label={label} />
          {true && <Asterisk />}
        </div>
      )}
      <div
        className={`flex items-center justify-between cursor-pointer p-2 w-full rounded-lg border border-formBorder bg-bgColor pl-4 text-sm text-textColor ${
          isFocused ? "border-primary ring-[.002rem] ring-primary" : ""
        }`}
        onClick={toggleDropdown}
        onFocus={handleFocus}
        onBlur={handleBlur}
        tabIndex={0}
        ref={dropdownRef}
        id={id}
      >
        <div>
          {value.length > 0 ? (
            options
              ?.filter((option) => value.includes(option.value))
              .map((option) => option.label)
              .join(", ")
          ) : (
            <p className="text-placeholderColor">{placeholder}</p>
          )}
        </div>

        <span>
          <HiOutlineSelector size={16} />
        </span>
      </div>
      {isOpen && (
        <div className="absolute z-10 mt-1 w-full rounded-lg border border-stroke bg-bgColor shadow-sm">
          {options?.map((option) => (
            <div
              key={option.value}
              className={`px-4 py-2 flex items-center gap-2 text-[15px] cursor-pointer text-textColor ${
                isSelected(option.value)
                  ? "bg-hoverColor"
                  : "hover:bg-hoverColor"
              }`}
              onClick={() => handleSelectOption(option.value)}
            >
              {isSelected(option.value) && <BsCheck size={18} />}
              <label>{option.label}</label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelect;
