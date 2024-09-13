import { SortConfigType } from "@/constants/interface/table-types";
import { readEmployeeQueryParams } from "@/constants/query-params/employee";
import { useReadDesignationsQuery } from "@/features/designation/designation-api";
import { useReadEmployeesQuery } from "@/features/employee/employee-api";
import { useCallback, useState } from "react";

const initialSortConfig = {
  sortBy: "date_of_hire",
  sortDirection: "asc",
};

const initialSearchParams = {
  identity: "",
  username: "",
  designation: "",
};

const useEmployeeData = ({
  currentPage,
  itemsPerPage,
}: {
  currentPage: number;
  itemsPerPage: number;
}) => {
  const [searchParams, setSearchParams] = useState({
    ...initialSearchParams,
  });
  const [sortConfig, setSortConfig] = useState<SortConfigType>({
    ...initialSortConfig,
  });

  const { data: employees } = useReadEmployeesQuery(
    readEmployeeQueryParams({
      currentPage,
      itemsPerPage,
      searchParams,
      sortConfig,
    })
  );
  const { data: designations } = useReadDesignationsQuery({});

  const designationOptions = designations?.data?.map((designation) => ({
    label: designation?.attributes?.name,
    value: String(designation?.id),
  }));

  const employeeTableData = employees?.data?.map((employee) => {
    const userInfo = employee?.attributes?.user_info?.data?.attributes;
    const employeeInfo = employee?.attributes;

    return {
      id: employee?.id,
      identity: employee?.attributes?.identity,
      name: {
        first_name: userInfo?.first_name,
        last_name: userInfo?.last_name,
      },
      username: userInfo?.username,
      email: userInfo?.email,
      date_of_hire: employeeInfo?.date_of_hire,
      salary: employeeInfo?.salary,
      role: userInfo?.role?.data?.attributes?.name,
      employment_status:
        employeeInfo?.employment_status?.data?.attributes?.name,
      employee_status: employeeInfo?.employee_status?.data?.attributes?.name,
      is_internship: employeeInfo?.is_internship,
      designation: employeeInfo?.designation?.data?.attributes?.name,
      department: employeeInfo?.employee_of_departments?.data?.attributes?.name,
      manager:
        employeeInfo?.reporting_manager?.data?.attributes?.user_info?.data
          ?.attributes?.username,
    };
  });

  const handleSort = useCallback((column: string) => {
    setSortConfig((prevSortConfig) => ({
      sortBy: column,
      sortDirection:
        prevSortConfig.sortBy === column &&
        prevSortConfig.sortDirection === "asc"
          ? "desc"
          : "asc",
    }));
  }, []);

  const handleSortReset = () => {
    setSearchParams({ ...initialSearchParams, designation: "" });
    setSortConfig(initialSortConfig);
  };

  return {
    designationOptions,
    employees,
    employeeTableData,
    handleSortReset,
    handleSort,
    searchParams,
    sortConfig,
    setSearchParams,
  };
};

export default useEmployeeData;
