import { Department } from "./department";
import { Designation } from "./designations";
import { EmployeeStatus } from "./employee-status";
import { EmploymentStatus } from "./employment-status";
import { MultipleEntityAttributes, SingleEntityAttributes } from "./root";
import { User } from "./user";

export interface Employee {
  date_of_hire: Date | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  salary: string;
  identity: string;
  payrolls: ReferenceType;
  designation: SingleEntityAttributes<Designation>;
  employment_status: SingleEntityAttributes<EmploymentStatus>;
  employee_status: SingleEntityAttributes<EmployeeStatus>;
  is_internship: boolean;
  attendances: ReferenceType;
  documents: ReferenceType;
  projects: ReferenceType;
  tasks: ReferenceType;
  leaves: ReferenceType;
  performance_reviews: ReferenceType;
  employee_skills: ReferenceType;
  employee_certifications: ReferenceType;
  user_info: SingleEntityAttributes<User>;
  reporting_employees: MultipleEntityAttributes<Employee>;
  reporting_manager: SingleEntityAttributes<Employee>;
  manager_of_departments: SingleEntityAttributes<Department>;
  employee_of_departments: SingleEntityAttributes<Department>;
}

export interface ReferenceType {
  type: string;
  relation_with: string;
}
