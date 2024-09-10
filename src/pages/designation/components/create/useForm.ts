import { RootState } from "@/app/store";
import notification from "@/component/ui/alert-message";
import {
  useCreateDesignationsMutation,
  useReadDesignationsByIdQuery,
  useUpdateDesignationsMutation,
} from "@/features/designation/designation-api"; // Assuming you have a mutation for updating
import { useReadEmployeesQuery } from "@/features/employee/employee-api";
import { QueryParams } from "@/utils/get-query-params";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import * as Yup from "yup";

export type CreatePositionType = {
  name: string;
  description: string;
  employees: string[];
};

const initialState = {
  name: "",
  description: "",
  employees: [],
};

const validationSchema = Yup.object({
  name: Yup.string().required("Designation name is required"),
  employees: Yup.array()
    .of(Yup.string())
    .min(1, "At least one employee is required")
    .required("Employees are required"),
});

const useDesignationForm = (
  onClose: () => void,
  mode: "create" | "edit" = "create"
) => {
  const { data: selectedId } = useSelector(
    (state: RootState) => state.modal?.editModal
  );

  const designationQueryParams: QueryParams = {
    populate: {
      employees: {
        populate: {
          user_info: {
            fields: ["username", "first_name", "last_name"],
            populate: {
              avatar: {
                fields: ["url"],
              },
            },
          },
        },
      },
    },
  };

  const { data: designation } = useReadDesignationsByIdQuery(
    { id: selectedId || "", queryParams: designationQueryParams },
    {
      skip: !selectedId,
    }
  );

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<CreatePositionType>({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: yupResolver(validationSchema as any),
    defaultValues: initialState,
    mode: "onChange",
  });

  const employeeQueryParams: QueryParams = {
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

  const [createDesignation] = useCreateDesignationsMutation();
  const [updateDesignation] = useUpdateDesignationsMutation();

  const { data: employees } = useReadEmployeesQuery(employeeQueryParams);
  const employeesOptions = employees?.data?.map((employee) => ({
    value: String(employee?.id) || "",
    label: employee?.attributes?.user_info?.data?.attributes?.username || "",
  }));

  // Form submission handler
  const onSubmit = async (data: CreatePositionType) => {
    try {
      if (mode === "create") {
        await createDesignation({ data }).unwrap();
        notification({
          title: "Success!",
          type: "success",
          message: "Designation has been created successfully",
        });
      } else if (mode === "edit") {
        const payload = {
          id: selectedId,
          body: { data: { ...data } },
        };

        await updateDesignation(payload).unwrap();

        notification({
          title: "Success!",
          type: "success",
          message: "Designation has been updated successfully",
        });
      }

      onClose();
      reset(); // Reset form only on successful submission
    } catch (errorRes) {
      notification({
        title: "Error!",
        type: "error",
        message:
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (errorRes as any)?.data?.error?.message ||
          `Error ${mode === "create" ? "creating" : "updating"} designation!`,
      });
      reset(undefined, { keepValues: true });
    }
  };

  useEffect(() => {
    if (mode === "edit" && designation) {
      const { name, description, employees } = designation.data.attributes;

      const editFormState: CreatePositionType = {
        name: name || "",
        description: description || "",
        employees:
          employees?.data?.map((employee) => String(employee?.id)) || [],
      };

      reset(editFormState);
    }
  }, [designation, mode, reset, setValue]);

  return {
    handleSubmit,
    onSubmit,
    control,
    errors,
    employeesOptions,
    isSubmitting,
  };
};

export default useDesignationForm;
