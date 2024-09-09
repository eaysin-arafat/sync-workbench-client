import { Department } from "./department";
import { EmployeeStatus } from "./employee-status";
import { EmploymentStatus } from "./employment-status";
import { MultipleEntityAttributes, SingleEntityAttributes } from "./root";
import { User } from "./user";

export interface EmployeeType {
  identity: string;
  date_of_hire: Date | null;
  position_id: ReferenceType;
  salary: string;
  employment_status: SingleEntityAttributes<EmploymentStatus>;
  employee_status: SingleEntityAttributes<EmployeeStatus>;
  is_internship: boolean;
  attendances: ReferenceType;
  documents: ReferenceType;
  department: SingleEntityAttributes<Department>;
  projects: ReferenceType;
  tasks: ReferenceType;
  leaves: ReferenceType;
  performance_reviews: ReferenceType;
  payrolls: ReferenceType;
  employee_skills: ReferenceType;
  employee_certifications: ReferenceType;
  user_info: SingleEntityAttributes<User>;
  reporting_employees: MultipleEntityAttributes<EmployeeType>;
  reporting_manager: SingleEntityAttributes<EmployeeType>;
  manager_of_departments: SingleEntityAttributes<Department>;
  employee_of_departments: MultipleEntityAttributes<Department>;
}

export interface ReferenceType {
  type: string;
  relation_with: string;
}
