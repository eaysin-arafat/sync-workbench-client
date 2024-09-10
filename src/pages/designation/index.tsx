import { RootState } from "@/app/store";
import notification from "@/component/ui/alert-message";
import Button from "@/component/ui/button";
import Input from "@/component/ui/form-elements/input";
import Modal from "@/component/ui/modal";
import PageHeader from "@/component/ui/page-header";
import CustomPagination from "@/component/ui/pagination/custom-pagination";
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
import { Group, Text } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import DesignationForm from "./components/create";
import DesignationTable from "./components/table/table";

const Designation = () => {
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

  //Add Country Modal handler
  const handleCreateDesignation = () => {
    dispatch(
      openCreateModal({
        modalId: designationModalTypes?.createDesignation,
        data: null,
      })
    );
  };

  //Add Country Modal handler
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

  return (
    <div>
      <PageHeader
        pageTitle="Designation"
        hasAddButton
        btnLabel="Add New Designation"
        onClick={handleCreateDesignation}
      />

      <div className="grid md:grid-cols-3 items-center gap-2">
        <Input placeholder="Designation Id" />
        <Input placeholder="Designation Name" />
        <div className="h-full">
          <Button size="sm" fullWidth>
            Search
          </Button>
        </div>
      </div>

      <DesignationTable
        designations={designations?.data || []}
        handleEdit={handleEditDesignation}
        handleDelete={handleOpenDeleteConfirmation}
      />

      <CustomPagination
        totalItemsCount={designations?.meta.pagination.total || 0}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
        currentPage={currentPage}
        meta={{ pagination: { page: currentPage, pageSize: itemsPerPage } }}
      />

      <Modal
        opened={
          createModal?.modalId === designationModalTypes?.createDesignation
        }
        onClose={closeModal}
        title="Create Designation"
        size={"lg"}
      >
        <DesignationForm onClose={closeModal} />
      </Modal>

      <Modal
        opened={editModal?.modalId === designationModalTypes?.editDesignation}
        onClose={closeModal}
        title="Update Designation"
        size={"lg"}
      >
        <DesignationForm onClose={closeModal} mode="edit" />
      </Modal>

      <Modal
        opened={
          deleteModal?.modalId === designationModalTypes?.deleteDesignation
        }
        // title="Delete Designation"
        onClose={closeModal}
        withCloseButton={false}
      >
        <Text size="sm" mb="xs" fw={500}>
          Are you sure you want to delete this designation?
        </Text>
        <Text size="sm" mb="md">
          This action cannot be undone. Deleting this designation will remove it
          from the system permanently.
        </Text>
        <Group align="flex-end">
          <Button color="red" onClick={handleDeleteDesignation}>
            Delete
          </Button>
          <Button onClick={close}>Cancel</Button>
        </Group>
      </Modal>
    </div>
  );
};

export default Designation;
