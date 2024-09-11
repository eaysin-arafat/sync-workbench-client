import { RootState } from "@/app/store";
import notification from "@/component/ui/alert-message";
import usePagination from "@/component/ui/pagination/usePagination";
import { designationModalTypes } from "@/constants/modal-types/modal-types";
import {
  useDeleteDesignationsMutation,
  useReadDesignationsQuery,
} from "@/features/designation/designation-api";
import {
  closeCreateModal,
  closeDeleteModal,
  closeEditModal,
  closeViewModal,
  openCreateModal,
  openDeleteModal,
  openEditModal,
} from "@/features/modal/modal-slice";
import { QueryParams } from "@/utils/get-query-params";
import { useDispatch, useSelector } from "react-redux";

const useDesignation = () => {
  const { createModal, editModal, deleteModal } = useSelector(
    (state: RootState) => state.modal
  );
  const dispatch = useDispatch();

  const {
    pagination: { currentPage, itemsPerPage },
    handlePageChange,
  } = usePagination(10);

  const queryParams: QueryParams = {
    pagination: {
      page: currentPage,
      pageSize: itemsPerPage,
    },
    populate: {
      employees: {
        populate: {
          user_info: {
            fields: ["username", "first_name", "last_name"],
            populate: {
              avatar: {
                fields: ["url"],
              },
            },
          },
        },
      },
    },
  };

  const { data: designations } = useReadDesignationsQuery(queryParams);
  const [deleteDesignation] = useDeleteDesignationsMutation();

  const isOpenCreateDesignation =
    createModal?.modalId === designationModalTypes?.createDesignation;
  const isOpenEditDesignation =
    editModal?.modalId === designationModalTypes?.editDesignation;
  const isOpenDeleteDesignation =
    deleteModal?.modalId === designationModalTypes?.deleteDesignation;

  //Add Designation Modal handler
  const handleCreateDesignation = () => {
    dispatch(
      openCreateModal({
        modalId: designationModalTypes?.createDesignation,
        data: null,
      })
    );
  };

  //Add Designation Modal handler
  const handleEditDesignation = (id: string) => {
    dispatch(
      openEditModal({
        modalId: designationModalTypes?.editDesignation,
        data: id,
      })
    );
  };

  const handleOpenDeleteConfirmation = (id: string) => {
    dispatch(
      openDeleteModal({
        modalId: designationModalTypes?.deleteDesignation,
        data: id,
      })
    );
  };

  const handleDeleteDesignation = async () => {
    try {
      await deleteDesignation(deleteModal.data);
      closeModal();

      notification({
        title: "Success!",
        type: "success",
        message: "Designation has been deleted successfully",
      });
    } catch (e) {
      console.error("Error deleting designation:", e);

      notification({
        title: "Error!",
        type: "error",
        message: "Error deleting designation",
      });
    }
  };

  //Close Modal Handler
  const closeModal = () => {
    dispatch(closeCreateModal());
    dispatch(closeEditModal());
    dispatch(closeViewModal());
    dispatch(closeDeleteModal());
  };

  return {
    handlePageChange,
    handleCreateDesignation,
    handleDeleteDesignation,
    handleEditDesignation,
    handleOpenDeleteConfirmation,
    designations,
    isOpenCreateDesignation,
    isOpenEditDesignation,
    isOpenDeleteDesignation,
    closeModal,
    currentPage,
    itemsPerPage,
  };
};

export default useDesignation;
