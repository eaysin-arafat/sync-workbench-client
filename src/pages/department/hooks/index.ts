import usePagination from "@/component/ui/pagination/usePagination";
import useDepartmentActions from "./useDepartmentActions";
import useDepartmentData from "./useDepartmentData";
import useModalHandlers from "./useModalHandlers";

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
  } = useDepartmentData(currentPage, itemsPerPage);

  const {
    openCreateDepartmentModal,
    openEditDepartmentModal,
    openDeleteDepartmentModal,
    closeModal,
    isOpenCreateDepartment,
    isOpenDeleteDepartment,
    isOpenEditDepartment,
  } = useModalHandlers();

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
    openCreateDepartmentModal,
    openEditDepartmentModal,
    openDeleteDepartmentModal,
    handleDeleteDepartment,
    handleBulkDeleteDepartments,
    closeModal,
    isOpenCreateDepartment,
    isOpenDeleteDepartment,
    isOpenEditDepartment,
  };
};

export default useDepartment;
