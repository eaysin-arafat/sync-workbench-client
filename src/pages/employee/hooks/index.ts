import usePagination from "@/component/ui/pagination/usePagination";
import useEmployeeActions from "./useEmployeeActions";
import useEmployeeData from "./useEmployeeData";
import useEmployeeModal from "./useEmployeeModal";

const useEmployee = () => {
  const {
    closeModal,
    handleCreateEmployee,
    handleEditEmployee,
    handleOpenDeleteConfirmation,
    isOpenCreateEmployee,
    isOpenDeleteEmployee,
    isOpenEditEmployee,
  } = useEmployeeModal();

  const { handleDeleteEmployee } = useEmployeeActions({ closeModal });

  const {
    pagination: { currentPage, itemsPerPage },
    handlePageChange,
  } = usePagination(10);

  const { designationOptions, employees } = useEmployeeData({
    currentPage,
    itemsPerPage,
  });

  return {
    closeModal,
    handleCreateEmployee,
    handleEditEmployee,
    handleOpenDeleteConfirmation,
    handleDeleteEmployee,
    designationOptions,
    employees,
    isOpenCreateEmployee,
    isOpenEditEmployee,
    isOpenDeleteEmployee,
    handlePageChange,
    itemsPerPage,
    currentPage,
  };
};

export default useEmployee;
