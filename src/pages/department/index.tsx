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
    openCreateDepartmentModal,
    openDeleteDepartmentModal,
    openEditDepartmentModal,
    searchParams,
    setSearchParams,
    sortConfig,
    isOpenCreateDepartment,
    isOpenDeleteDepartment,
    isOpenEditDepartment,
  } = useDepartment();

  return (
    <div>
      <PageHeader
        pageTitle="Department"
        hasAddButton
        btnLabel="Add New Department"
        onClick={openCreateDepartmentModal}
      />

      <DepartmentFilter
        handleSortReset={handleSortReset}
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />

      <DepartmentTable
        data={departments?.data || []}
        handleDelete={openDeleteDepartmentModal}
        handleEdit={openEditDepartmentModal}
        handleSort={handleSort}
        sortConfig={sortConfig}
        handleBulkDelete={handleBulkDeleteDepartments}
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
    </div>
  );
};

export default Department;
