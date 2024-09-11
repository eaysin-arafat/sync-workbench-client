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

  //Add Employee Modal handler
  const handleCreateEmployee = () => {
    dispatch(
      openCreateModal({
        modalId: employeeModalTypes?.createEmployee,
        data: null,
      })
    );
  };

  //Add Employee Modal handler
  const handleEditEmployee = (id: string) => {
    dispatch(
      openEditModal({
        modalId: employeeModalTypes?.editEmployee,
        data: id,
      })
    );
  };

  const handleOpenDeleteConfirmation = (id: string) => {
    dispatch(
      openDeleteModal({
        modalId: employeeModalTypes?.deleteEmployee,
        data: id,
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
    handleOpenDeleteConfirmation,
    handleCreateEmployee,
    handleEditEmployee,
    isOpenCreateEmployee,
    isOpenEditEmployee,
    isOpenDeleteEmployee,
  };
};

export default useEmployeeModal;
