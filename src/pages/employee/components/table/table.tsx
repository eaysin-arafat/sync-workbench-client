/* eslint-disable @typescript-eslint/no-explicit-any */
import Table, { TableColumn } from "@/component/ui/table";
import TableActionBtn from "@/component/ui/table/table-action-btn";
import { DataTableType } from "@/constants/interface/table-types";
import useSelectIds from "@/hooks/shared/useSelectIds";
import { capitalize } from "@/utils/capitalize";

const columns: TableColumn[] = [
  {
    header: "Employee ID",
    accessor: "identity",
  },
  {
    header: "Full Name",
    accessor: "name",
    render: (item: any) => {
      return (
        <>
          <h5 className="font-medium text-black">
            {capitalize(item.name?.first_name)}{" "}
            {capitalize(item.name?.last_name)}
          </h5>
        </>
      );
    },
  },
  {
    header: "Username",
    accessor: "username",
  },
  {
    header: "Date of Hire",
    accessor: "date_of_hire",
    sortable: true,
  },
  {
    header: "Email",
    accessor: "email",
  },
  {
    header: "Salary",
    accessor: "salary",
    sortable: true,
  },
  {
    header: "Role",
    accessor: "role",
  },
  {
    header: "Employment Status",
    accessor: "employment_status",
  },
  {
    header: "Employee Status",
    accessor: "employee_status",
    render: (item: any) => {
      return item?.employee_status ? (
        <p
          className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ${
            item.employee_status === "Active"
              ? "bg-success text-white"
              : item.employee_status === "Inactive"
              ? "bg-danger text-white"
              : "bg-warning text-white"
          }`}
        >
          {item.employee_status}
        </p>
      ) : (
        ""
      );
    },
  },
  {
    header: "Is Internship",
    accessor: "is_internship",
    render: (item: any) => {
      return <p>{item?.is_internship ? "True" : "False"}</p>;
    },
  },
  {
    header: "Designation",
    accessor: "designation",
  },
  {
    header: "Department",
    accessor: "department",
  },
  {
    header: "Manager",
    accessor: "manager",
  },
];

const EmployeeTable = ({
  data,
  handleOpenBulkDeleteModal,
  handleOpenDeleteModal,
  handleOpenEditModal,
  handleOpenViewModal,
  handleSort,
  sortConfig,
}: DataTableType) => {
  const { handleSelect, handleSelectAll, selectedIds, handleUnselectAll } =
    useSelectIds(data ?? []);

  const handleOpenBulkDeleteDepartmentModal = () => {
    if (handleOpenBulkDeleteModal) handleOpenBulkDeleteModal(selectedIds);
  };

  return (
    <div className="max-w-full overflow-x-auto rounded-sm bg-bgColor pt-6 shadow-1">
      <Table
        data={data}
        columns={columns}
        handleSort={handleSort}
        sortConfig={sortConfig}
        handleSelect={handleSelect}
        handleSelectAll={handleSelectAll}
        handleUnselectAll={handleUnselectAll}
        hasBulkDelete
        selectedIds={selectedIds}
        handleOpenBulkDeleteModal={handleOpenBulkDeleteDepartmentModal}
        actions={(id) => (
          <TableActionBtn
            id={id as string}
            viewAction
            handleOpenDeleteModal={handleOpenDeleteModal}
            handleOpenEditModal={handleOpenEditModal}
            handleOpenViewModal={handleOpenViewModal}
          />
        )}
      />
    </div>
  );
};

export default EmployeeTable;
