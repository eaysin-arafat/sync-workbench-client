import FormField from "@/component/form-field";
import { CreateEditFormType } from "@/constants/interface/create-edit-type";
import { Button } from "@mantine/core";
import useDesignationForm from "./useDesignation";

const DesignationForm = ({ onClose, mode = "create" }: CreateEditFormType) => {
  const {
    employeesOptions,
    control,
    errors,
    handleSubmit,
    onSubmit,
    isSubmitting,
  } = useDesignationForm(onClose, mode);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid md:grid-cols-2 gap-4">
        {/* Department Name Input */}
        <FormField
          formType="input"
          control={control}
          name="name"
          label="Department Name"
          placeholder="Enter Department Name"
          error={errors.name?.message}
          required
        />

        {/* Description Textarea */}
        <FormField
          formType="textarea"
          control={control}
          name="description"
          label="Description"
          placeholder="Enter Description"
          error={errors.description?.message}
        />

        {/* MultiSelect for Employees */}
        <div className="col-span-full">
          <FormField
            formType="multiSelect"
            name="employees"
            control={control}
            options={employeesOptions || []}
            placeholder="Search New Employee"
            label="Add New Employee"
            error={errors.employees?.message}
          />
        </div>
      </div>

      <div className="flex items-center gap-5 justify-end py-2 pt-5">
        {/* Close Button */}
        <Button variant="default" onClick={onClose}>
          Close
        </Button>

        {/* Submit Button */}
        <Button type="submit" loading={isSubmitting}>
          Submit
        </Button>
      </div>
    </form>
  );
};

export default DesignationForm;
