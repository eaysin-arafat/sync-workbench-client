import FormField from "@/component/form-field";
import { Button } from "@mantine/core";
import useCreate from "./useCreate";

const CreateDesignation = ({ onClose }: { onClose: () => void }) => {
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
          formType="textarea"
          name="description"
          control={control}
          label="Description"
          error={errors.description?.message}
        />

        <div className="col-span-full">
          <FormField
            formType="multiSelect"
            name="users"
            control={control}
            placeholder="Search New Employee"
            options={employeesOptions || []}
            error={errors.users?.message}
            label="Add New Employee"
          />
        </div>
      </div>

      <div className="flex items-center gap-5 justify-end py-2 pt-5">
        <Button variant="default" onClick={onClose}>
          Close
        </Button>
        <Button type="submit" loading={isLoading}>
          Submit
        </Button>
      </div>
    </form>
  );
};

export default CreateDesignation;
