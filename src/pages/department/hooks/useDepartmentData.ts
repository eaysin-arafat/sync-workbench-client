import { SortConfigType } from "@/constants/interface/table-types";
import { readDepartmentQueryParams } from "@/constants/query-params/department";
import { useReadDepartmentsQuery } from "@/features/department/department-api";
import { useCallback, useState } from "react";
import { DepartmentSearchParams } from "../components/filter";

const initialSortConfig = {
  sortBy: "name",
  sortDirection: "asc",
};

const initialSearchParams = {
  departmentId: "",
  departmentName: "",
};

const useDepartmentData = (currentPage?: number, itemsPerPage?: number) => {
  const [searchParams, setSearchParams] = useState<DepartmentSearchParams>({
    ...initialSearchParams,
  });
  const [sortConfig, setSortConfig] = useState<SortConfigType>({
    ...initialSortConfig,
  });

  const { data: departments } = useReadDepartmentsQuery(
    readDepartmentQueryParams({
      currentPage,
      itemsPerPage,
      searchParams,
      sortConfig,
    })
  );

  const departmentTableData = departments?.data?.map((department) => {
    const { name, description, location, employees, manager } =
      department?.attributes || [];

    return {
      id: department?.id,
      name,
      description,
      location,
      manager: {
        url: manager?.data?.attributes?.user_info?.data?.attributes?.avatar
          ?.data?.attributes?.url,
        name: manager?.data?.attributes?.user_info?.data?.attributes?.username,
      },
      employees: employees?.data?.map((item) => ({
        url: item?.attributes?.user_info?.data?.attributes?.avatar?.data
          ?.attributes?.url,
        name: item?.attributes?.user_info?.data?.attributes?.username,
      })),
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
    setSearchParams(initialSearchParams);
    setSortConfig(initialSortConfig);
  };

  return {
    departments,
    handleSort,
    handleSortReset,
    searchParams,
    sortConfig,
    setSearchParams,
    departmentTableData,
  };
};

export default useDepartmentData;
