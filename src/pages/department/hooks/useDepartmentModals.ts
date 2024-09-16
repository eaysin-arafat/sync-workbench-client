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
const useDepartmentModal = () => {
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
  const isOpenBulkDeleteDepartment =
    deleteModal?.modalId === departmentModalTypes?.bulkDeleteDepartment;

  const handleOpenCreateDepartmentModal = useCallback(() => {
    dispatch(
      openCreateModal({
        modalId: departmentModalTypes?.createDepartment,
        data: null,
      })
    );
  }, [dispatch]);

  const handleOpenEditDepartmentModal = useCallback(
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

  const handleOpenDeleteDepartmentModal = useCallback(
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

  const handleOpenBulkDeleteDepartmentModal = (selectedIds: number[]) => {
    if (selectedIds.length < 0) return;

    dispatch(
      openDeleteModal({
        modalId: departmentModalTypes?.bulkDeleteDepartment,
        data: selectedIds,
      })
    );
  };

  const closeModal = useCallback(() => {
    dispatch(closeCreateModal());
    dispatch(closeEditModal());
    dispatch(closeViewModal());
    dispatch(closeDeleteModal());
  }, [dispatch]);

  return {
    handleOpenCreateDepartmentModal,
    handleOpenEditDepartmentModal,
    handleOpenDeleteDepartmentModal,
    closeModal,
    isOpenCreateDepartment,
    isOpenEditDepartment,
    isOpenDeleteDepartment,
    isOpenBulkDeleteDepartment,
    handleOpenBulkDeleteDepartmentModal,
  };
};

export default useDepartmentModal;
