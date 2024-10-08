import { Employee } from "./employee";
import { MultipleEntityAttributes, SingleEntityAttributes } from "./root";

export interface Department {
  name: string;
  description?: string;
  location?: string;
  projects?: number[];
  manager: SingleEntityAttributes<Employee>;
  employees?: MultipleEntityAttributes<Employee>;
}
