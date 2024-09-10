import { useAppDispatch } from "@/app/store";
import { default as notification } from "@/component/ui/alert-message";
import {
  departmentApiEndpoints,
  useCreateDepartmentMutation,
} from "@/features/department/department-api";
import { useReadEmployeesQuery } from "@/features/employee/employee-api";
import { QueryParams } from "@/utils/get-query-params";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as Yup from "yup";

export type CreateDepartmentType = {
  department_name: string;
  description: string;
  location: string;
  manager: string;
  employees: string[];
  projects: string[];
};

const useCreate = (onClose: () => void) => {
  const dispatch = useAppDispatch();

  const queryParams: QueryParams = {
    sort: ["date_of_hire:asc"],
    populate: {
      user_info: {
        fields: ["username"],
        populate: {
          avatar: {
            fields: ["url"],
          },
        },
      },
    },
  };

  const validationSchemaFunc = () => {
    return Yup.object({
      department_name: Yup.string()
        .required("Department name is required")
        .test(
          "unique-check",
          "Department name is not available!",
          async function (value) {
            const { data } = await dispatch(
              departmentApiEndpoints.checkDepartmentName.initiate(value)
            );

            return !data?.available;
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
    formState: { errors },
    reset,
  } = useForm<CreateDepartmentType>({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: yupResolver(validationSchemaFunc() as any),
    defaultValues: {
      department_name: "",
      description: "",
      location: "",
      manager: "",
      projects: [],
      employees: [],
    },
    mode: "onChange",
  });

  const [createDepartment, { isError, isSuccess, status, isLoading }] =
    useCreateDepartmentMutation();

  const { data: employees } = useReadEmployeesQuery(queryParams);
  const employeesOptions = employees?.data?.map((employee) => ({
    value: String(employee?.id) || "",
    label: employee?.attributes?.user_info?.data?.attributes?.username || "",
  }));

  const onSubmit: SubmitHandler<CreateDepartmentType> = (data) => {
    createDepartment({
      data: {
        ...data,
        employees: data.employees.map((employee) => Number(employee)),
        manager: Number(data.manager),
        projects: data.projects.map((project) => Number(project)),
      },
    });
  };

  useEffect(() => {
    if (isError) {
      notification({
        type: "error",
        title: "Error",
        message: "Error creating department",
      });
    }

    if (isSuccess && status === "fulfilled") {

      notification({
        type: "success",
        title: "Success",
        message: "Department has been created successfully",
      });

      reset();
      onClose();
    }
  }, [isSuccess, isError, onClose, reset, status]);

  return {
    handleSubmit,
    onSubmit,
    control,
    errors,
    employeesOptions,
    isLoading,
  };
};

export default useCreate;
