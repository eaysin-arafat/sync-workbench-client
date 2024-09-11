import { RootState } from "@/app/store";
import { departmentModalTypes } from "@/constants/modal-types/modal-types";
import {
  closeCreateModal,
  closeDeleteModal,
  closeEditModal,
  closeViewModal,
  openCreateModal,
  openDeleteModal,
  openEditModal,
} from "@/features/modal/modal-slice";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

// Separate modal handling logic
const useModalHandlers = () => {
  const dispatch = useDispatch();
  const { createModal, editModal, deleteModal } = useSelector(
    (state: RootState) => state.modal
  );

  const isOpenCreateDepartment =
    createModal?.modalId === departmentModalTypes?.createDepartment;
  const isOpenEditDepartment =
    editModal?.modalId === departmentModalTypes?.editDepartment;
  const isOpenDeleteDepartment =
    deleteModal?.modalId === departmentModalTypes?.deleteDepartment;

  const openCreateDepartmentModal = useCallback(() => {
    dispatch(
      openCreateModal({
        modalId: departmentModalTypes?.createDepartment,
        data: null,
      })
    );
  }, [dispatch]);

  const openEditDepartmentModal = useCallback(
    (id: string) => {
      dispatch(
        openEditModal({
          modalId: departmentModalTypes?.editDepartment,
          data: id,
        })
      );
    },
    [dispatch]
  );

  const openDeleteDepartmentModal = useCallback(
    (id: string) => {
      dispatch(
        openDeleteModal({
          modalId: departmentModalTypes?.deleteDepartment,
          data: id,
        })
      );
    },
    [dispatch]
  );

  const closeModal = useCallback(() => {
    dispatch(closeCreateModal());
    dispatch(closeEditModal());
    dispatch(closeViewModal());
    dispatch(closeDeleteModal());
  }, [dispatch]);

  return {
    openCreateDepartmentModal,
    openEditDepartmentModal,
    openDeleteDepartmentModal,
    closeModal,
    isOpenCreateDepartment,
    isOpenEditDepartment,
    isOpenDeleteDepartment,
  };
};

export default useModalHandlers;
