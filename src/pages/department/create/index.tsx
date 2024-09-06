import { ControlledInput } from "@/component/ui/form-elements/input";
import { ControlledMultiSelect } from "@/component/ui/form-elements/multi-select";
import { ControlledSelect } from "@/component/ui/form-elements/select";
import { Button } from "@mantine/core";
import useCreate from "./useCreate";

const CreateDepartment = ({ onClose }: { onClose: () => void }) => {
  const {
    control,
    errors,
    handleSubmit,
    onSubmit,
    employeesOptions,
    isLoading,
  } = useCreate(onClose);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid md:grid-cols-2 gap-4">
        <ControlledInput
          control={control}
          name="department_name"
          label="Department Name"
          placeholder="Enter Department Name"
          errMsg={errors.department_name?.message}
          required
        />

        <ControlledInput
          name="description"
          control={control}
          label="Description"
          errMsg={errors.description?.message}
        />

        <ControlledInput
          name="location"
          control={control}
          label="Location"
          errMsg={errors.location?.message}
        />

        <ControlledSelect
          name="manager"
          control={control}
          label="Add Manager"
          options={employeesOptions || []}
          errMsg={errors.manager?.message}
          required
        />

        <div className="col-span-full">
          <ControlledMultiSelect
            name="projects"
            control={control}
            label="Add Project"
            options={[{ label: "data", value: "1" }]}
            errMsg={errors.projects?.message}
          />
        </div>

        <div className="col-span-full">
          <ControlledMultiSelect
            name="employees"
            control={control}
            placeholder="Search New Employee"
            options={employeesOptions || []}
            errMsg={errors.employees?.message}
            label="Add New Employee"
          />
        </div>
      </div>
      <div className="flex items-center gap-5 justify-end py-2 pt-5">
        <Button type="submit" loading={isLoading}>
          Submit
        </Button>
        <Button variant="default" onClick={onClose}>
          Close
        </Button>
      </div>
    </form>
  );
};

export default CreateDepartment;
