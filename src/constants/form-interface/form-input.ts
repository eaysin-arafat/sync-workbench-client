export interface BaseInputType {
  type?: string;
  label?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  placeholder?: string;
  disabled?: boolean;
  defaultValue?: string;
  icon?: React.ReactNode;
  readOnly?: boolean;
  id?: string;
  errMsg?: string;
  required?: boolean;
  onClick?: () => void;
}
