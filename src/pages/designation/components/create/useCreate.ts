import { useAppDispatch } from "@/app/store";
import { departmentApiEndpoints } from "@/features/department/department-api";
import { useCreateDesignationsMutation } from "@/features/designation/designation-api";
import { useReadEmployeesQuery } from "@/features/employee/employee-api";
import { QueryParams } from "@/utils/get-query-params";
import { yupResolver } from "@hookform/resolvers/yup";
import { showNotification } from "@mantine/notifications";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as Yup from "yup";

export type CreatePositionType = {
  name: string;
  description: string;
  users: string[];
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
      name: Yup.string()
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
      users: Yup.array()
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
  } = useForm<CreatePositionType>({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: yupResolver(validationSchemaFunc() as any),
    defaultValues: {
      name: "",
      description: "",
      users: [],
    },
    mode: "onChange",
  });

  const [createDepartment, { isError, isSuccess, status, isLoading }] =
    useCreateDesignationsMutation();

  const { data: employees } = useReadEmployeesQuery(queryParams);
  const employeesOptions = employees?.data?.map((employee) => ({
    value: String(employee?.id) || "",
    label: employee?.attributes?.user_info?.data?.attributes?.username || "",
  }));

  const onSubmit: SubmitHandler<CreatePositionType> = (data) => {
    createDepartment({
      data,
    });
  };

  useEffect(() => {
    if (isError) {
      reset(undefined, { keepValues: true });
      showNotification({ type: "error", message: "Error creating department" });
    }

    if (isSuccess && status === "fulfilled") {
      console.log("called");

      showNotification({
        type: "success",
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
