import { readEmployeeQueryParams } from "@/constants/query-params/employee";
import { useReadDesignationsQuery } from "@/features/designation/designation-api";
import { useReadEmployeesQuery } from "@/features/employee/employee-api";

const useEmployeeData = ({
  currentPage,
  itemsPerPage,
}: {
  currentPage: number;
  itemsPerPage: number;
}) => {
  const { data: designations } = useReadDesignationsQuery({});
  const designationOptions = designations?.data?.map((designation) => ({
    label: designation?.attributes?.name,
    value: String(designation?.id),
  }));

  const { data: employees } = useReadEmployeesQuery(
    readEmployeeQueryParams({ currentPage, itemsPerPage })
  );

  return { designationOptions, employees };
};

export default useEmployeeData;
