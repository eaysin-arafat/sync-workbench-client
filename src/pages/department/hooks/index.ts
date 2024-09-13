import usePagination from "@/component/ui/pagination/usePagination";
import useDepartmentActions from "./useDepartmentActions";
import useDepartmentData from "./useDepartmentData";
import useDepartmentModal from "./useDepartmentModal";

const useDepartment = () => {
  const {
    pagination: { currentPage, itemsPerPage },
    handlePageChange,
  } = usePagination(10);

  const {
    departments,
    handleSort,
    handleSortReset,
    searchParams,
    sortConfig,
    setSearchParams,
    departmentTableData,
  } = useDepartmentData(currentPage, itemsPerPage);

  const {
    closeModal,
    isOpenCreateDepartment,
    isOpenDeleteDepartment,
    isOpenEditDepartment,
    isOpenBulkDeleteDepartment,
    handleOpenCreateDepartmentModal,
    handleOpenDeleteDepartmentModal,
    handleOpenEditDepartmentModal,
    handleOpenBulkDeleteDepartmentModal,
  } = useDepartmentModal();

  const { handleDeleteDepartment, handleBulkDeleteDepartments } =
    useDepartmentActions(closeModal);

  return {
    departments,
    currentPage,
    itemsPerPage,
    searchParams,
    sortConfig,
    handlePageChange,
    handleSort,
    handleSortReset,
    setSearchParams,
    handleOpenCreateDepartmentModal,
    handleOpenEditDepartmentModal,
    handleOpenDeleteDepartmentModal,
    handleDeleteDepartment,
    handleBulkDeleteDepartments,
    closeModal,
    isOpenCreateDepartment,
    isOpenDeleteDepartment,
    isOpenEditDepartment,
    isOpenBulkDeleteDepartment,
    departmentTableData,
    handleOpenBulkDeleteDepartmentModal,
  };
};

export default useDepartment;
