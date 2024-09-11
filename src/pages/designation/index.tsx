import Button from "@/component/ui/button";
import DeleteConfirmation from "@/component/ui/delete-confirmation/delete-confirmation";
import Input from "@/component/ui/form-elements/input";
import Modal from "@/component/ui/modal";
import PageHeader from "@/component/ui/page-header";
import CustomPagination from "@/component/ui/pagination/custom-pagination";
import DesignationForm from "./components/create";
import DesignationTable from "./components/table/table";
import useDesignation from "./useDesignation";

const Designation = () => {
  const {
    closeModal,
    currentPage,
    designations,
    handleCreateDesignation,
    handleDeleteDesignation,
    handleEditDesignation,
    handleOpenDeleteConfirmation,
    handlePageChange,
    isOpenCreateDesignation,
    isOpenDeleteDesignation,
    isOpenEditDesignation,
    itemsPerPage,
  } = useDesignation();

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
        data={designations?.data || []}
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
        opened={isOpenCreateDesignation}
        onClose={closeModal}
        title="Create Designation"
        size={"lg"}
      >
        <DesignationForm onClose={closeModal} />
      </Modal>

      <Modal
        opened={isOpenEditDesignation}
        onClose={closeModal}
        title="Update Designation"
        size={"lg"}
      >
        <DesignationForm onClose={closeModal} mode="edit" />
      </Modal>

      <Modal
        opened={isOpenDeleteDesignation}
        onClose={closeModal}
        withCloseButton={false}
      >
        <DeleteConfirmation
          title="designation"
          closeModal={closeModal}
          handleDelete={handleDeleteDesignation}
        />
      </Modal>
    </div>
  );
};

export default Designation;
