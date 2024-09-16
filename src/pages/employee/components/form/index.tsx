import FormField from "@/component/form-field";
import { CreateEditFormType } from "@/constants/interface/create-edit-type";
import { Button } from "@mantine/core";
import useEmployeeForm from "../../hooks/useEmployeeForm";

const EmployeeForm = ({ onClose, mode = "create" }: CreateEditFormType) => {
  const {
    control,
    departmentOptions,
    employeeStatusOptions,
    employmentStatusOptions,
    errors,
    handleSubmit,
    isSubmitting,
    onSubmit,
    userOptions,
    designationOptions,
  } = useEmployeeForm({ onClose, mode });

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-3">
          <div className="grid md:grid-cols-2 md:items-start md:justify-center gap-3">
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
              formType="select"
              name="employee_of_departments"
              label="Departments"
              error={errors.employee_of_departments?.message}
              control={control}
              options={departmentOptions || []}
            />

            <FormField
              formType="select"
              name="designation"
              label="Designation"
              error={errors.designation?.message}
              control={control}
              options={designationOptions || []}
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

export default EmployeeForm;
