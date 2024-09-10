import Input from "@/component/ui/form-elements/input";
import MultiSelect from "@/component/ui/form-elements/multi-select";
import Select from "@/component/ui/form-elements/select";
import Typography from "@/component/ui/typography";
import { useReadContentTypesQuery } from "@/features/content-types/content-types-api";
import { Button } from "@mantine/core";
import { useState } from "react";

export type RoleFormType = {
  name: string;
  description: string;
  type: string;
  permissions: { module: string; access: string }[];
  users: number[];
};

const initialState: RoleFormType = {
  name: "",
  description: "",
  type: "",
  permissions: [],
  users: [],
};

const CreateRolePermission = ({ onClose }: { onClose: () => void }) => {
  const [formState, setFormState] = useState<RoleFormType>({ ...initialState });

  const { data: contentTypes } = useReadContentTypesQuery({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSelectChange = (name: string) => (data: any) => {
    setFormState((prevState) => ({
      ...prevState,
      [name]: data,
    }));
  };

  const handlePermissionChange = (module: string) => (access: string) => {
    setFormState((prevState) => {
      const updatedPermissions = prevState.permissions.map((permission) =>
        permission.module === module ? { ...permission, access } : permission
      );
      return { ...prevState, permissions: updatedPermissions };
    });
  };

  return (
    <>
      <form action="" onSubmit={() => {}}>
        <div className="space-y-3">
          <Typography variant="h4">Create Role and Permissions</Typography>

          <div className="grid md:grid-cols-2 items-center justify-normal md:justify-center gap-5">
            <Input
              label="Role Name"
              name="name"
              type="text"
              value={formState.name}
              onChange={handleChange}
              required
            />

            <Input
              label="Description"
              name="description"
              type="text"
              value={formState.description}
              onChange={handleChange}
              required
            />

            <Select
              label="Role Type"
              name="type"
              value={formState.type}
              onChange={handleSelectChange("type")}
              options={[
                { label: "Authenticated", value: "authenticated" },
                { label: "Public", value: "public" },
                { label: "HR", value: "hr" },
                { label: "Manager", value: "manager" },
                { label: "Employee", value: "employee" },
              ]}
              required
            />

            <MultiSelect
              label="Assign Users"
              name="users"
              options={
                [
                  /* Add options to select users from API */
                ]
              }
              value={formState.users}
              onChange={handleSelectChange("users")}
            />

            <div className="col-span-2">
              <Typography variant="h5">Module Permissions</Typography>
              <div className="grid md:grid-cols-2 gap-5 mt-3">
                {contentTypes?.data.map((contentType) => (
                  <div
                    key={contentType?.uid}
                    className="grid grid-cols-2 gap-3"
                  >
                    <Typography className="capitalize">
                      {contentType?.apiID}
                    </Typography>
                    <MultiSelect
                      name={`${contentType?.apiID}-permission`}
                      placeholder={`Select ${contentType?.apiID} permission`}
                      value={
                        formState.permissions.find(
                          (permission) => permission.module === module
                        )?.access || ""
                      }
                      onChange={(e) =>
                        handlePermissionChange(module)(e.target.value)
                      }
                      options={[
                        { label: "Create", value: "create" },
                        { label: "Delete", value: "delete" },
                        { label: "Find One", value: "find-one" },
                        { label: "Find Many", value: "find-many" },
                        { label: "Update", value: "update" },
                      ]}
                    />
                  </div>
                ))}
              </div>
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

export default CreateRolePermission;
