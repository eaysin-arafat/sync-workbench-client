import usePagination from "@/component/ui/pagination/usePagination";
import useEmployeeActions from "./useEmployeeActions";
import useEmployeeData from "./useEmployeeData";
import useEmployeeModal from "./useEmployeeModal";

const useEmployee = () => {
  const {
    pagination: { currentPage, itemsPerPage },
    handlePageChange,
  } = usePagination(10);

  const {
    designationOptions,
    employees,
    employeeTableData,
    handleSort,
    handleSortReset,
    searchParams,
    setSearchParams,
    sortConfig,
  } = useEmployeeData({
    currentPage,
    itemsPerPage,
  });

  const {
    closeModal,
    handleOpenBulkDeleteEmployeeModal,
    handleOpenEditEmployeeModal,
    handleOpenCreateEmployeeModal,
    handleOpenDeleteEmployeeModal,
    isOpenBulkDeleteDepartment,
    isOpenCreateEmployee,
    isOpenDeleteEmployee,
    isOpenEditEmployee,
  } = useEmployeeModal();

  const { handleDeleteEmployee, handleBulkDeleteEmployees } =
    useEmployeeActions({ closeModal });

  return {
    closeModal,
    handleOpenBulkDeleteEmployeeModal,
    handleOpenEditEmployeeModal,
    handleOpenCreateEmployeeModal,
    handleOpenDeleteEmployeeModal,
    isOpenBulkDeleteDepartment,
    handleDeleteEmployee,
    designationOptions,
    employees,
    isOpenCreateEmployee,
    isOpenEditEmployee,
    isOpenDeleteEmployee,
    handlePageChange,
    itemsPerPage,
    currentPage,
    employeeTableData,
    handleBulkDeleteEmployees,
    handleSort,
    handleSortReset,
    searchParams,
    setSearchParams,
    sortConfig,
  };
};

export default useEmployee;
