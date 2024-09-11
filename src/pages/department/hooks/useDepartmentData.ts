import { SortConfigType } from "@/constants/interface/table-types";
import { readDepartmentQueryParams } from "@/constants/query-params/department";
import { useReadDepartmentsQuery } from "@/features/department/department-api";
import { useCallback, useState } from "react";

const initialSortConfig = {
  sortBy: "name",
  sortDirection: "asc",
};

const initialSearchParams = {
  departmentId: "",
  departmentName: "",
};

const useDepartmentData = (currentPage: number, itemsPerPage: number) => {
  const [searchParams, setSearchParams] = useState({
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
  };
};

export default useDepartmentData;
