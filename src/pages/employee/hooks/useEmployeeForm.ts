import { RootState } from "@/app/store";
import notification from "@/component/ui/alert-message";
import { CreateEditFormType } from "@/constants/interface/create-edit-type";
import { readEmployeeByIdQueryParams } from "@/constants/query-params/employee";
import { useReadDepartmentsQuery } from "@/features/department/department-api";
import { useReadDesignationsQuery } from "@/features/designation/designation-api";
import { useReadEmployeeStatusQuery } from "@/features/employee-status/employee-status-api";
import {
  useCreateEmployeeMutation,
  useReadEmployeeByIdQuery,
  useUpdateEmployeeMutation,
} from "@/features/employee/employee-api";
import { useReadEmploymentStatusQuery } from "@/features/employment-status/employment-status";
import { useFindUsersQuery } from "@/features/users/users-api";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import * as yup from "yup";

// Define the form data type
interface CreateEmployeeType {
  date_of_hire: Date | null;
  designation: string;
  salary: string;
  employment_status: string;
  employee_status: string;
  is_internship: boolean;
  employee_skills: string;
  user_info: string;
  reporting_manager: string;
  employee_of_departments: string;
}

// Set initial form values
const initialState: CreateEmployeeType = {
  date_of_hire: null,
  designation: "",
  salary: "",
  employment_status: "",
  employee_status: "",
  is_internship: false,
  employee_skills: "",
  user_info: "",
  reporting_manager: "",
  employee_of_departments: "",
};

// Define the validation schema
const schema = yup.object().shape({
  date_of_hire: yup
    .date()
    .nullable()
    .typeError("Date of Hire must be a valid date")
    .required("Date of Hire is required"),
  designation: yup.string().required("Designation is required"),
  salary: yup
    .number()
    .required("Salary is required")
    .positive()
    .typeError("Salary must be a positive number"),
  employment_status: yup.string().required("Employment Status is required"),
  employee_status: yup.string().required("Employee Status is required"),
  is_internship: yup.boolean(),
  employee_skills: yup.string().required("Employee Skills are required"),
  reporting_manager: yup.string().nullable(),
  employee_of_departments: yup.string().required("Department is required"),
});

const useEmployeeForm = ({ onClose, mode = "create" }: CreateEditFormType) => {
  const { data: selectedId } = useSelector(
    (state: RootState) => state.modal?.editModal
  );

  // Set up the form
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CreateEmployeeType>({
    defaultValues: initialState,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: yupResolver(schema as any),
    mode: "onChange",
  });

  const { data: employee } = useReadEmployeeByIdQuery(
    { id: selectedId || "", queryParams: readEmployeeByIdQueryParams },
    {
      skip: !selectedId,
    }
  );

  // Hook for creating employee
  const [createEmployee] = useCreateEmployeeMutation();
  const [updateEmployee] = useUpdateEmployeeMutation();

  // Fetch data for form fields
  const { data: users } = useFindUsersQuery(undefined);
  const { data: departments } = useReadDepartmentsQuery({});
  const { data: employmentStatuses } = useReadEmploymentStatusQuery({});
  const { data: employeeStatuses } = useReadEmployeeStatusQuery({});
  const { data: designations } = useReadDesignationsQuery({});

  // Convert data to options for select fields
  const userOptions = users?.map((user) => ({
    value: String(user?.id || ""),
    label: user?.username || "",
  }));
  const departmentOptions = departments?.data?.map((department) => ({
    label: department?.attributes?.name || "",
    value: String(department?.id || ""),
  }));
  const employmentStatusOptions = employmentStatuses?.data?.map(
    (employmentStatus) => ({
      label: employmentStatus?.attributes?.name || "",
      value: String(employmentStatus?.id || ""),
    })
  );
  const employeeStatusOptions = employeeStatuses?.data?.map(
    (employeeStatus) => ({
      label: employeeStatus?.attributes?.name || "",
      value: String(employeeStatus?.id || ""),
    })
  );
  const designationOptions = designations?.data?.map((designation) => ({
    label: designation?.attributes?.name || "",
    value: String(designation?.id || ""),
  }));

  // Form submission handler
  const onSubmit: SubmitHandler<CreateEmployeeType> = async (data) => {
    const payload = {
      ...data,
    };

    try {
      if (mode === "create") {
        await createEmployee({ data: payload }).unwrap();
        notification({
          title: "Success!",
          type: "success",
          message: "Employee has been created successfully",
        });
      } else if (mode === "edit") {
        await updateEmployee({
          id: selectedId,
          body: { data: { ...payload } },
        }).unwrap();

        notification({
          title: "Success!",
          type: "success",
          message: "Employee has been updated successfully",
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
          `Error ${mode === "create" ? "creating" : "updating"} employee!`,
      });
      reset(undefined, { keepValues: true });
    }
  };

  useEffect(() => {
    if (mode === "edit" && employee) {
      const {
        date_of_hire,
        // employee_skills,
        employee_of_departments,
        employee_status,
        employment_status,
        is_internship,
        designation,
        reporting_manager,
        salary,
        user_info,
      } = employee.data.attributes;

      const editFormState: CreateEmployeeType = {
        date_of_hire: date_of_hire ? new Date(date_of_hire) : null,
        employee_of_departments: String(
          employee_of_departments?.data?.id || ""
        ),
        employee_skills: "",
        employee_status: String(employee_status?.data?.id || ""),
        is_internship: is_internship || false,
        employment_status: String(employment_status?.data?.id || ""),
        designation: String(designation?.data?.id || ""),
        reporting_manager: String(reporting_manager?.data?.id || ""),
        salary: salary || "",
        user_info: String(user_info?.data?.id || ""),
      };

      reset(editFormState);
    }
  }, [employee, mode, reset]);

  return {
    onSubmit,
    employeeStatusOptions,
    employmentStatusOptions,
    departmentOptions,
    designationOptions,
    userOptions,
    errors,
    isSubmitting,
    control,
    handleSubmit,
  };
};

export default useEmployeeForm;
