import Button from "@/component/ui/button";
import Input from "@/component/ui/form-elements/input";
import Select, {
  SelectOptionDataType,
} from "@/component/ui/form-elements/select";
import { ChangeEvent } from "react";

export interface EmployeeSearchParams {
  identity: string;
  username: string;
  designation: string;
}

interface Props {
  designationOptions: SelectOptionDataType[];
  searchParams: EmployeeSearchParams;
  setSearchParams: (newParams: EmployeeSearchParams) => void;
  handleSortReset: () => void;
}

const EmployeeFilter = ({
  designationOptions,
  searchParams,
  setSearchParams,
  handleSortReset,
}: Props) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSearchParams({
      ...searchParams,
      [name]: value,
    });
  };

  const handleSelectChange = (value: string) => {
    setSearchParams({
      ...searchParams,
      designation: value,
    });
  };

  return (
    <div className="grid md:grid-cols-4 items-center gap-2">
      <Input
        placeholder="Search identity"
        name="identity"
        value={searchParams?.identity}
        onChange={handleChange}
      />
      <Input
        placeholder="Search username"
        name="username"
        value={searchParams?.username}
        onChange={handleChange}
      />
      <Select
        options={designationOptions}
        placeholder="Select Designation"
        value={searchParams?.designation}
        onChange={(value) => handleSelectChange(value as string)}
      />
      <div className="h-full">
        <Button size="sm" fullWidth onClick={handleSortReset}>
          Reset
        </Button>
      </div>
    </div>
  );
};

export default EmployeeFilter;
