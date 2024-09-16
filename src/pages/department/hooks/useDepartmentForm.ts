import { RootState, useAppDispatch } from "@/app/store";
import { default as notification } from "@/component/ui/alert-message";
import {
  readDepartmentByIdQueryParams,
  readEmployeeQueryParams,
} from "@/constants/query-params/department";
import {
  departmentApiEndpoints,
  useCreateDepartmentMutation,
  useReadDepartmentByIdQuery,
  useUpdateDepartmentMutation,
} from "@/features/department/department-api";
import { useReadEmployeesQuery } from "@/features/employee/employee-api";
import { checkAvailability } from "@/utils/checkAvailability";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import * as Yup from "yup";

export type CreateDepartmentType = {
  name: string;
  description: string;
  location: string;
  manager: string;
  employees: string[];
  projects: string[];
};

const initialState = {
  name: "",
  description: "",
  location: "",
  manager: "",
  projects: [],
  employees: [],
};

const useDepartmentForm = (
  onClose: () => void,
  mode: "create" | "edit" = "create"
) => {
  const { data: selectedId } = useSelector(
    (state: RootState) => state.modal?.editModal
  );
  const dispatch = useAppDispatch();

  const { data: department } = useReadDepartmentByIdQuery(
    { id: selectedId || "", queryParams: readDepartmentByIdQueryParams },
    {
      skip: !selectedId,
    }
  );

  const [createDepartment] = useCreateDepartmentMutation();
  const [updateDepartment] = useUpdateDepartmentMutation();

  const { data: employees } = useReadEmployeesQuery(readEmployeeQueryParams);

  const validationSchemaFunc = () => {
    return Yup.object({
      name: Yup.string()
        .required("Department name is required")
        .test(
          "unique-check",
          "Department name is not available!",
          async (value) => {
            const { data } = await dispatch(
              departmentApiEndpoints.checkDepartmentName.initiate(value)
            );
            const currentValue = department?.data?.attributes?.name || "";
            const isAvailable = checkAvailability({
              value,
              currentValue,
              data,
            });

            return isAvailable;
          }
        ),
      description: Yup.string().required("Description is required"),
      location: Yup.string().required("Location is required"),
      manager: Yup.string().required("Manager is required"),
      employees: Yup.array()
        .of(Yup.string())
        .min(1, "At least one employee is required")
        .required("Employees are required"),
    });
  };

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<CreateDepartmentType>({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: yupResolver(validationSchemaFunc() as any),
    defaultValues: initialState,
    mode: "onChange",
  });

  const employeesOptions = employees?.data?.map((employee) => ({
    value: String(employee?.id) || "",
    label: employee?.attributes?.user_info?.data?.attributes?.username || "",
  }));

  // Form submission handler
  const onSubmit: SubmitHandler<CreateDepartmentType> = async (data) => {
    const payload = {
      ...data,
      employees: data.employees.map((employee) => Number(employee)),
      manager: Number(data.manager),
      projects: data.projects.map((project) => Number(project)),
    };

    try {
      if (mode === "create") {
        await createDepartment({ data: payload }).unwrap();
        notification({
          title: "Success!",
          type: "success",
          message: "Department has been created successfully",
        });
      } else if (mode === "edit") {
        await updateDepartment({
          id: selectedId,
          body: { data: { ...payload } },
        }).unwrap();

        notification({
          title: "Success!",
          type: "success",
          message: "Department has been updated successfully",
        });
      }

      onClose();
      reset();
    } catch (errorRes) {
      notification({
        title: "Error!",
        type: "error",
        message:
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (errorRes as any)?.data?.error?.message ||
          `Error ${mode === "create" ? "creating" : "updating"} department!`,
      });
      reset(undefined, { keepValues: true });
    }
  };

  useEffect(() => {
    if (mode === "edit" && department) {
      const { name, manager, description, employees, location, projects } =
        department.data.attributes;

      const editFormState: CreateDepartmentType = {
        name,
        description: description || "",
        location: location || "",
        manager: String(manager?.data?.id),
        employees:
          employees?.data?.map((employee) => String(employee?.id)) || [],
        projects: projects?.map((project) => String(project)) || [],
      };

      reset(editFormState);
    }
  }, [department, mode, reset]);

  return {
    handleSubmit,
    onSubmit,
    control,
    errors,
    employeesOptions,
    isSubmitting,
  };
};

export default useDepartmentForm;
