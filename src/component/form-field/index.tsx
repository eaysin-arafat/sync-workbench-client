import CheckBox, { CheckboxProps } from "@/component/ui/form-elements/checkbox";
import DateInput, {
  DateInputProps,
} from "@/component/ui/form-elements/date-input/date-input";
import Input from "@/component/ui/form-elements/input";
import Select, { SelectProps } from "@/component/ui/form-elements/select";
import { BaseInputType } from "@/constants/form-interface/form-input";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import MultiSelect, {
  MultiSelectProps,
} from "../ui/form-elements/multi-select";
import NumberInput from "../ui/form-elements/number-input/number-input";
import PasswordInput, {
  PasswordInputProps,
} from "../ui/form-elements/password-input";
import Textarea from "../ui/form-elements/text-area/text-area";

const formComponents = {
  select: Select,
  numberInput: NumberInput,
  textarea: Textarea,
  multiSelect: MultiSelect,
  date: DateInput,
  input: Input,
  checkbox: CheckBox,
  password: PasswordInput,
};

type FormComponentKeys = keyof typeof formComponents;

type FormFieldProps<T extends FieldValues> = {
  formType: FormComponentKeys;
  name: Path<T>;
  control: Control<T>;
  options?: { value: string; label: string }[];
  label: string;
  error?: string;
} & (
  | SelectProps
  | MultiSelectProps
  | DateInputProps
  | BaseInputType
  | CheckboxProps
  | PasswordInputProps
);

const FormField = <T extends FieldValues>({
  name,
  control,
  label,
  options,
  formType,
  error,
}: FormFieldProps<T>) => {
  const FieldComponent = formComponents[formType];

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FieldComponent
          {...field}
          label={label}
          options={options}
          error={error}
        />
      )}
    />
  );
};

export default FormField;
