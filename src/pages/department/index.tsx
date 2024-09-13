import DeleteConfirmation from "@/component/ui/delete-confirmation/delete-confirmation";
import Modal from "@/component/ui/modal";
import PageHeader from "@/component/ui/page-header";
import CustomPagination from "@/component/ui/pagination/custom-pagination";
import CreateDepartment from "./components/create";
import DepartmentFilter from "./components/filter";
import DepartmentTable from "./components/table/table";
import useDepartment from "./hooks";

const Department = () => {
  const {
    closeModal,
    currentPage,
    departments,
    handleBulkDeleteDepartments,
    handleDeleteDepartment,
    handlePageChange,
    handleSort,
    handleSortReset,
    itemsPerPage,
    handleOpenCreateDepartmentModal,
    handleOpenDeleteDepartmentModal,
    handleOpenEditDepartmentModal,
    isOpenBulkDeleteDepartment,
    searchParams,
    setSearchParams,
    sortConfig,
    isOpenCreateDepartment,
    isOpenDeleteDepartment,
    isOpenEditDepartment,
    departmentTableData,
    handleOpenBulkDeleteDepartmentModal,
  } = useDepartment();

  return (
    <div>
      <PageHeader
        pageTitle="Department"
        hasAddButton
        btnLabel="Add New Department"
        onClick={handleOpenCreateDepartmentModal}
      />

      <DepartmentFilter
        handleSortReset={handleSortReset}
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />

      <DepartmentTable
        data={departmentTableData || []}
        handleOpenDeleteModal={handleOpenDeleteDepartmentModal}
        handleOpenEditModal={handleOpenEditDepartmentModal}
        handleOpenBulkDeleteModal={handleOpenBulkDeleteDepartmentModal}
        handleSort={handleSort}
        sortConfig={sortConfig}
      />

      <CustomPagination
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
        totalItemsCount={departments?.meta?.pagination?.total || 0}
        meta={{ pagination: { page: currentPage, pageSize: itemsPerPage } }}
      />

      <Modal
        onClose={closeModal}
        opened={isOpenCreateDepartment}
        title="Create Department"
        size={"lg"}
      >
        <CreateDepartment onClose={closeModal} />
      </Modal>

      <Modal
        onClose={closeModal}
        opened={isOpenEditDepartment}
        title="Update Department"
        size={"lg"}
      >
        <CreateDepartment onClose={closeModal} mode="edit" />
      </Modal>

      <Modal
        onClose={closeModal}
        opened={isOpenDeleteDepartment}
        withCloseButton={false}
      >
        <DeleteConfirmation
          title="department"
          closeModal={closeModal}
          handleDelete={handleDeleteDepartment}
        />
      </Modal>

      <Modal
        onClose={closeModal}
        opened={isOpenBulkDeleteDepartment}
        withCloseButton={false}
      >
        <DeleteConfirmation
          title="department"
          closeModal={closeModal}
          handleBulkDelete={handleBulkDeleteDepartments}
        />
      </Modal>
    </div>
  );
};

export default Department;
