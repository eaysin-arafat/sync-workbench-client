import { Employee } from "./employee";
import { MultipleEntityAttributes } from "./root";

export interface Designation {
  name: string;
  description: string;
  employees: MultipleEntityAttributes<Employee>;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
