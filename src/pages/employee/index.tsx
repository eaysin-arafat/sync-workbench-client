import Button from "@/component/ui/button";
import DeleteConfirmation from "@/component/ui/delete-confirmation/delete-confirmation";
import Input from "@/component/ui/form-elements/input";
import Select from "@/component/ui/form-elements/select";
import Modal from "@/component/ui/modal";
import PageHeader from "@/component/ui/page-header";
import CustomPagination from "@/component/ui/pagination/custom-pagination";
import CreateEmployee from "./components/create";
import EmployeeTable from "./components/table/table";
import useEmployee from "./useEmployee";

const Employee = () => {
  const {
    closeModal,
    designationOptions,
    employees,
    handleCreateEmployee,
    handleDeleteEmployee,
    handleEditEmployee,
    handleOpenDeleteConfirmation,
    handlePageChange,
    isOpenCreateEmployee,
    isOpenDeleteEmployee,
    isOpenEditEmployee,
    currentPage,
    itemsPerPage,
  } = useEmployee();

  return (
    <div>
      {/* Page header with Add New Employee button */}
      <PageHeader
        pageTitle="Employee"
        hasAddButton
        btnLabel="Add New Employee"
        onClick={handleCreateEmployee}
      />

      {/* Filters for Employee Id, Name, and Position */}
      <div className="grid md:grid-cols-4 items-center gap-2">
        <Input placeholder="Employee Id" />
        <Input placeholder="Employee Name" />
        <Select options={designationOptions} placeholder="Select Position" />
        <div className="h-full">
          <Button size="sm" fullWidth>
            Search
          </Button>
        </div>
      </div>

      {/* Employee Table */}
      <EmployeeTable
        data={employees?.data || []}
        handleDelete={handleOpenDeleteConfirmation}
        handleEdit={handleEditEmployee}
      />

      {/* Pagination */}
      <CustomPagination
        totalItemsCount={employees?.meta.pagination.total || 0}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
        currentPage={currentPage}
        meta={{ pagination: { page: currentPage, pageSize: itemsPerPage } }}
      />

      {/* Modal for adding a new employee */}
      <Modal
        opened={isOpenCreateEmployee}
        onClose={closeModal}
        title="Add New Employee"
        size={"70rem"}
      >
        <CreateEmployee onClose={closeModal} />
      </Modal>

      <Modal
        opened={isOpenEditEmployee}
        onClose={closeModal}
        title="Update Employee"
        size={"70rem"}
      >
        <CreateEmployee onClose={closeModal} mode="edit" />
      </Modal>

      <Modal
        opened={isOpenDeleteEmployee}
        onClose={closeModal}
        withCloseButton={false}
      >
        <DeleteConfirmation
          title="employee"
          closeModal={closeModal}
          handleDelete={handleDeleteEmployee}
        />
      </Modal>
    </div>
  );
};

export default Employee;
