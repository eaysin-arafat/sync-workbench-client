import { EmployeeType } from "./employee";
import { MultipleEntityAttributes } from "./root";

export interface Designation {
  name: string;
  description: string;
  employees: MultipleEntityAttributes<EmployeeType>;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
