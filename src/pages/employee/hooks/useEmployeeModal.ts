import { RootState } from "@/app/store";
import { employeeModalTypes } from "@/constants/modal-types/modal-types";
import {
  closeCreateModal,
  closeDeleteModal,
  closeEditModal,
  closeViewModal,
  openCreateModal,
  openDeleteModal,
  openEditModal,
} from "@/features/modal/modal-slice";
import { useDispatch, useSelector } from "react-redux";

const useEmployeeModal = () => {
  const { createModal, editModal, deleteModal } = useSelector(
    (state: RootState) => state.modal
  );

  const dispatch = useDispatch();

  const isOpenCreateEmployee =
    createModal?.modalId === employeeModalTypes?.createEmployee;
  const isOpenEditEmployee =
    editModal?.modalId === employeeModalTypes?.editEmployee;
  const isOpenDeleteEmployee =
    deleteModal?.modalId === employeeModalTypes?.deleteEmployee;
  const isOpenBulkDeleteDepartment =
    deleteModal?.modalId === employeeModalTypes?.bulkDeleteEmployee;

  //Add Employee Modal handler
  const handleOpenCreateEmployeeModal = () => {
    dispatch(
      openCreateModal({
        modalId: employeeModalTypes?.createEmployee,
        data: null,
      })
    );
  };

  //Add Employee Modal handler
  const handleOpenEditEmployeeModal = (id: string) => {
    dispatch(
      openEditModal({
        modalId: employeeModalTypes?.editEmployee,
        data: id,
      })
    );
  };

  const handleOpenDeleteEmployeeModal = (id: string) => {
    dispatch(
      openDeleteModal({
        modalId: employeeModalTypes?.deleteEmployee,
        data: id,
      })
    );
  };

  const handleOpenBulkDeleteEmployeeModal = (selectedIds: number[]) => {
    if (selectedIds.length === 0) return;

    dispatch(
      openDeleteModal({
        modalId: employeeModalTypes?.bulkDeleteEmployee,
        data: selectedIds,
      })
    );
  };

  //Close Modal Handler
  const closeModal = () => {
    dispatch(closeCreateModal());
    dispatch(closeEditModal());
    dispatch(closeViewModal());
    dispatch(closeDeleteModal());
  };

  return {
    closeModal,
    handleOpenCreateEmployeeModal,
    handleOpenEditEmployeeModal,
    handleOpenDeleteEmployeeModal,
    handleOpenBulkDeleteEmployeeModal,
    isOpenCreateEmployee,
    isOpenEditEmployee,
    isOpenDeleteEmployee,
    isOpenBulkDeleteDepartment,
  };
};

export default useEmployeeModal;
