import Button from "@/component/ui/button";
import Input from "@/component/ui/form-elements/input";
import { ChangeEvent } from "react";

interface DepartmentFilterProps {
  searchParams: {
    departmentId: string;
    departmentName: string;
  };
  setSearchParams: (newParams: {
    departmentId: string;
    departmentName: string;
  }) => void;
  handleSortReset: () => void;
}

const DepartmentFilter = ({
  searchParams,
  setSearchParams,
  handleSortReset,
}: DepartmentFilterProps) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSearchParams({
      ...searchParams,
      [name]: value,
    });
  };

  return (
    <div className="grid md:grid-cols-3 items-center gap-2">
      <Input
        name="departmentId"
        placeholder="Department Id"
        value={searchParams.departmentId}
        onChange={handleInputChange}
      />
      <Input
        name="departmentName"
        placeholder="Department Name"
        value={searchParams.departmentName}
        onChange={handleInputChange}
      />
      <Button onClick={handleSortReset}>Reset</Button>
    </div>
  );
};

export default DepartmentFilter;
