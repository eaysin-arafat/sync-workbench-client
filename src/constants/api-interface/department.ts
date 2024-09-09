import { EmployeeType } from "./employee";
import { MultipleEntityAttributes, SingleEntityAttributes } from "./root";

export interface Department {
  department_name: string;
  description?: string;
  location?: string;
  projects?: number[];
  manager: SingleEntityAttributes<EmployeeType>;
  employees?: MultipleEntityAttributes<EmployeeType>;
}
