import CheckBox from "@/component/ui/form-elements/checkbox";
import DateInput from "@/component/ui/form-elements/date-input/date-input";
import Input from "@/component/ui/form-elements/input";
import MultiSelect from "@/component/ui/form-elements/multi-select";
import Select from "@/component/ui/form-elements/select";
import Typography from "@/component/ui/typography";
import { useReadDepartmentsQuery } from "@/features/department/department-api";
import { useCreateEmployeeMutation } from "@/features/employee/employee-api";
import { useFindUsersQuery } from "@/features/users/users-api";
import { Button } from "@mantine/core";
import { useState } from "react";

export type EmployeeFormType = {
  date_of_hire: Date | null;
  department_id?: string;
  position_id?: string;
  salary?: number;
  employment_status?: string;
  employee_status?: string;
  is_internship?: boolean;
  attendances?: number[];
  documents?: number[];
  manager?: string;
  employee_of_departments?: number[];
  projects?: number[];
  tasks?: number[];
  leaves?: number[];
  performance_reviews?: number[];
  payrolls?: number[];
  user_info?: string;
};

const initialState: EmployeeFormType = {
  date_of_hire: null,
  department_id: "",
  position_id: "",
  salary: 0,
  employment_status: "",
  employee_status: "",
  is_internship: false,
  manager: "",
  employee_of_departments: [],
  projects: [],
  tasks: [],
  attendances: [],
  documents: [],
  leaves: [],
  performance_reviews: [],
  payrolls: [],
  user_info: "",
};

const CreateEmployee = ({ onClose }: { onClose: () => void }) => {
  const [formState, setFormState] = useState<EmployeeFormType>({
    ...initialState,
  });
  const [createEmployee] = useCreateEmployeeMutation();
  const { data: users } = useFindUsersQuery(undefined);

  const userOptions = users?.map((user) => ({
    value: String(user?.id),
    label: user?.username,
  }));
  const { data: departments } = useReadDepartmentsQuery({});
  const departmentOptions = departments?.data?.map((department) => ({
    label: department?.attributes?.name,
    value: String(department?.id),
  }));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSelectChange = (name: string) => (data: any) => {
    setFormState((prevState) => ({
      ...prevState,
      [name]: data,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const payload: EmployeeFormType = {
      ...formState,
      department_id: formState?.department_id,
      position_id: formState?.position_id,
      user_info: formState?.user_info,
      attendances: formState?.attendances?.map((attendance) =>
        Number(attendance)
      ),
      documents: formState?.documents?.map((document) => Number(document)),
      // departments: formState?.employee_of_departments?.map((department) =>
      //   Number(department)
      // ),
      projects: formState?.projects?.map((project) => Number(project)),
      tasks: formState?.tasks?.map((task) => Number(task)),
      leaves: formState?.leaves?.map((leave) => Number(leave)),
      performance_reviews: formState?.performance_reviews?.map(
        (performance_review) => Number(performance_review)
      ),
      payrolls: formState?.payrolls?.map((payroll) => Number(payroll)),
    };

    createEmployee({ data: payload });
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <div className="space-y-3">
          <div>
            <Typography className="pb-3.5" variant="h4">
              Personal Information
            </Typography>

            <div className="grid md:grid-cols-2 items-center justify-normal md:justify-center gap-5">
              <Select
                label="Identify User"
                value={formState.user_info}
                onChange={handleSelectChange("user_info")}
                options={userOptions || undefined}
              />

              <DateInput label="Date of Hire" name="date_of_hire" type="date" />

              <MultiSelect
                label="Department"
                name="employee_of_departments"
                type="text"
                options={departmentOptions || []}
                onChange={handleSelectChange("employee_of_departments")}
              />

              <Input
                label="Position"
                name="position_id"
                type="text"
                value={formState.position_id || ""}
                onChange={handleChange}
              />

              <Input
                label="Salary"
                name="salary"
                type="number"
                value={formState.salary}
                onChange={handleChange}
              />

              <Select
                label="Employment Status"
                name="employment_status"
                value={formState.employment_status}
                onChange={handleSelectChange("employment_status")}
                options={[
                  { label: "Internship", value: "1" },
                  { label: "Trading", value: "2" },
                  { label: "Provisional", value: "3" },
                  { label: "Permanent", value: "4" },
                ]}
              />

              <Select
                label="Employee Status"
                name="employee_status"
                value={formState.employee_status}
                onChange={handleSelectChange("employee_status")}
                options={[
                  { label: "Active", value: "1" },
                  { label: "Inactive", value: "0" },
                ]}
              />

              <CheckBox
                label="Is Internship"
                name="is_internship"
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <Typography className="pb-3.5" variant="h4">
              Work Relationships
            </Typography>

            <div className="grid grid-cols-2 gap-5">
              <Select
                label="Manager"
                name="manager_id"
                value={formState.manager || ""}
                options={userOptions}
                onChange={handleSelectChange("manager_id")}
              />

              <MultiSelect
                label="Departments"
                id="departments"
                // options={formState.department_id || []}
                onChange={handleSelectChange("departments")}
              />
              <MultiSelect
                label="Projects"
                // name="projects"
                // value={formState.projects || []}
                options={[]}
                onChange={handleSelectChange("projects")}
              />
              <MultiSelect
                label="Tasks"
                // name="tasks"
                // value={formState.tasks || []}
                options={[]}
                onChange={handleSelectChange("tasks")}
              />
            </div>
          </div>

          <div>
            <Typography className="pb-3.5" variant="h4">
              Employee Records
            </Typography>

            <div className="grid grid-cols-2 gap-5">
              <MultiSelect
                label="Attendances"
                // name="attendances"
                // value={formState.attendances || []}
                options={[]}
                onChange={handleSelectChange("attendances")}
              />

              <MultiSelect
                label="Documents"
                // name="documents"
                // value={formState.documents || []}
                options={[]}
                onChange={handleSelectChange("documents")}
              />

              <MultiSelect
                label="Leaves"
                // name="leaves"
                // value={formState.leaves || []}
                options={[]}
                onChange={handleSelectChange("leaves")}
              />
              <MultiSelect
                label="Performance Reviews"
                // name="performance_reviews"
                // value={formState.performance_reviews || []}
                options={[]}
                onChange={handleSelectChange("performance_reviews")}
              />

              <MultiSelect
                label="Payrolls"
                // name="payrolls"
                // value={formState.payrolls || []}
                options={[]}
                onChange={handleSelectChange("payrolls")}
              />
            </div>
          </div>

          <div className="flex items-center gap-5 justify-end py-2">
            <Button type="submit">Submit</Button>
            <Button variant="default" onClick={onClose}>
              Close
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default CreateEmployee;
