import FormField from "@/component/form-field";
import { Button } from "@mantine/core";
import useDepartmentForm from "../hooks/useDepartmentForm";

const CreateDepartment = ({
  onClose,
  mode = "create",
}: {
  onClose: () => void;
  mode?: "create" | "edit";
}) => {
  const {
    control,
    errors,
    handleSubmit,
    onSubmit,
    employeesOptions,
    isSubmitting,
  } = useDepartmentForm(onClose, mode);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid md:grid-cols-2 gap-4">
        <FormField
          formType="input"
          control={control}
          name="name"
          label="Department Name"
          placeholder="Enter Department Name"
          error={errors.name?.message}
          required
        />

        <FormField
          formType="input"
          name="description"
          control={control}
          label="Description"
          error={errors.description?.message}
        />

        <FormField
          formType="input"
          name="location"
          control={control}
          label="Location"
          error={errors.location?.message}
        />

        <FormField
          formType="select"
          name="manager"
          control={control}
          label="Add Manager"
          options={employeesOptions || []}
          error={errors.manager?.message}
          required
        />

        <div className="col-span-full">
          <FormField
            formType="multiSelect"
            name="projects"
            control={control}
            label="Add Project"
            options={[{ label: "data", value: "1" }]}
            error={errors.projects?.message}
          />
        </div>

        <div className="col-span-full">
          <FormField
            formType="multiSelect"
            name="employees"
            control={control}
            placeholder="Search New Employee"
            options={employeesOptions || []}
            error={errors.employees?.message}
            label="Add New Employee"
          />
        </div>
      </div>
      <div className="flex items-center gap-5 justify-end py-2 pt-5">
        <Button variant="default" onClick={onClose}>
          Close
        </Button>

        <Button type="submit" loading={isSubmitting}>
          Submit
        </Button>
      </div>
    </form>
  );
};

export default CreateDepartment;
