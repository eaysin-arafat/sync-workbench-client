import FormField from "@/component/form-field";
import notification from "@/component/ui/alert-message";
import { useReadDepartmentsQuery } from "@/features/department/department-api";
import { useReadEmployeeStatusQuery } from "@/features/employee-status/employee-status-api";
import { useCreateEmployeeMutation } from "@/features/employee/employee-api";
import { useReadEmploymentStatusQuery } from "@/features/employment-status/employment-status";
import { useFindUsersQuery } from "@/features/users/users-api";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@mantine/core";
import { useForm } from "react-hook-form";
import * as yup from "yup";

// Define the form data type
interface CreateEmployeeType {
  date_of_hire: Date | null;
  position_id: string;
  salary: string;
  employment_status: string;
  employee_status: string;
  is_internship: boolean;
  employee_skills: string;
  user_info: string;
  reporting_manager: string;
  employee_of_departments: string[];
}

// Define the validation schema
const schema = yup.object().shape({
  date_of_hire: yup
    .date()
    .nullable()
    .typeError("Date of Hire must be a valid date")
    .required("Date of Hire is required"),
  position_id: yup.string().required("Position is required"),
  salary: yup
    .number()
    .required("Salary is required")
    .positive()
    .typeError("Salary must be a positive number"),
  employment_status: yup.string().required("Employment Status is required"),
  employee_status: yup.string().required("Employee Status is required"),
  is_internship: yup.boolean(),
  employee_skills: yup.string().required("Employee Skills are required"),
  reporting_manager: yup.string().nullable(),
  employee_of_departments: yup.array().of(yup.string()).required(),
});

// Set initial form values
const initialState: CreateEmployeeType = {
  date_of_hire: null,
  position_id: "",
  salary: "",
  employment_status: "",
  employee_status: "",
  is_internship: false,
  employee_skills: "",
  user_info: "",
  reporting_manager: "",
  employee_of_departments: [],
};

const CreateEmployee = ({ onClose }: { onClose: () => void }) => {
  // Set up the form
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CreateEmployeeType>({
    defaultValues: initialState,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: yupResolver(schema as any),
    mode: "onChange",
  });

  // Hook for creating employee
  const [createEmployee] = useCreateEmployeeMutation();

  // Fetch data for form fields
  const { data: users } = useFindUsersQuery(undefined);
  const { data: departments } = useReadDepartmentsQuery({});
  const { data: employmentStatuses } = useReadEmploymentStatusQuery({});
  const { data: employeeStatuses } = useReadEmployeeStatusQuery({});

  // Convert data to options for select fields
  const userOptions = users?.map((user) => ({
    value: String(user?.id),
    label: user?.username,
  }));
  const departmentOptions = departments?.data?.map((department) => ({
    label: department?.attributes?.department_name,
    value: String(department?.id),
  }));
  const employmentStatusOptions = employmentStatuses?.data?.map(
    (employmentStatus) => ({
      label: employmentStatus?.attributes?.name,
      value: String(employmentStatus?.id),
    })
  );
  const employeeStatusOptions = employeeStatuses?.data?.map(
    (employeeStatus) => ({
      label: employeeStatus?.attributes?.name,
      value: String(employeeStatus?.id),
    })
  );

  // Form submission handler
  const onSubmit = async (data: CreateEmployeeType) => {
    try {
      await createEmployee({ data }).unwrap();

      notification({
        title: "Success!",
        type: "success",
        message: "Employee has been created successfully",
      });

      reset();
      onClose();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (errorRes: any) {
      notification({
        title: "Error!",
        type: "error",
        message: errorRes?.data?.error?.message || "Error creating employee!",
      });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-3">
          <div>
            <div className="grid md:grid-cols-2 items-start justify-center gap-3">
              <FormField
                formType="select"
                name="user_info"
                control={control}
                label="User Info"
                options={userOptions}
                error={errors.user_info?.message}
              />

              <FormField
                formType="date"
                name="date_of_hire"
                control={control}
                label="Date of Hire"
                error={errors.date_of_hire?.message}
              />

              <FormField
                formType="multiSelect"
                name="employee_of_departments"
                label="Departments"
                error={errors.employee_of_departments?.message}
                control={control}
                options={departmentOptions}
              />

              <FormField
                formType="input"
                name="position_id"
                label="Position"
                error={errors.position_id?.message}
                control={control}
              />

              <FormField
                formType="numberInput"
                name="salary"
                label="Salary"
                error={errors.salary?.message}
                control={control}
              />

              <FormField
                formType="select"
                name="employment_status"
                control={control}
                options={employmentStatusOptions}
                label="Employment Status"
                error={errors.employment_status?.message}
              />

              <FormField
                formType="select"
                name="employee_status"
                control={control}
                label="Employee Status"
                options={employeeStatusOptions}
                error={errors.employee_status?.message}
              />

              <div className="mt-4.5">
                <FormField
                  formType="checkbox"
                  name="is_internship"
                  control={control}
                  label="Is Internship"
                  error={errors.is_internship?.message}
                />
              </div>

              <FormField
                formType="input"
                name="employee_skills"
                label="Employee Skills"
                error={errors.employee_skills?.message}
                control={control}
              />

              <FormField
                formType="select"
                name="reporting_manager"
                control={control}
                label="Reporting Manager"
                options={userOptions || []}
                error={errors.reporting_manager?.message}
              />
            </div>
          </div>

          <div className="flex justify-end space-x-4 py-3 pb-2">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" loading={isSubmitting}>
              Submit
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default CreateEmployee;
