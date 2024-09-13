import AvatarGroup, {
  AvatarDataType,
} from "@/component/ui/avatar/avatar-group";
import Table, { TableColumn } from "@/component/ui/table";
import TableActionBtn from "@/component/ui/table/table-action-btn";
import { DataTableType } from "@/constants/interface/table-types";
import useSelectIds from "@/hooks/shared/useSelectIds";

const columns: TableColumn[] = [
  {
    header: "ID",
    accessor: "id",
  },
  {
    header: "Name",
    accessor: "name",
    sortable: true,
  },
  {
    header: "Description",
    accessor: "description",
    sortable: true,
  },
  {
    header: "Location",
    accessor: "location",
    width: "400",
  },
  {
    header: "Manager",
    accessor: "manager",
    sortable: true,
    render: (item) => {
      return <AvatarGroup data={[item?.manager]} />;
    },
  },
  {
    header: "Employees",
    accessor: "employees",
    render: (data) => {
      const employees = data?.employees?.map((item: AvatarDataType) => {
        return {
          url: item?.url,
          name: item?.name,
        };
      });

      return <AvatarGroup data={employees} />;
    },
  },
];

const DepartmentTable = ({
  data,
  sortConfig,
  handleSort,
  handleOpenDeleteModal,
  handleOpenBulkDeleteModal,
  handleOpenEditModal,
  handleOpenViewModal,
}: DataTableType) => {
  const { handleSelect, handleSelectAll, selectedIds, handleUnselectAll } =
    useSelectIds(data ?? []);

  const handleOpenBulkDeleteDepartmentModal = () => {
    if (handleOpenBulkDeleteModal) handleOpenBulkDeleteModal(selectedIds);
  };

  return (
    <div className="rounded-sm bg-bgColor pt-6 shadow-1 max-w-full overflow-x-auto">
      <Table
        selectedIds={selectedIds}
        columns={columns}
        data={data || []}
        handleSort={handleSort}
        sortConfig={sortConfig}
        handleSelect={handleSelect}
        handleSelectAll={handleSelectAll}
        handleOpenBulkDeleteModal={handleOpenBulkDeleteDepartmentModal}
        handleUnselectAll={handleUnselectAll}
        actions={(id) => (
          <TableActionBtn
            id={id as string}
            handleOpenDeleteModal={handleOpenDeleteModal}
            handleOpenEditModal={handleOpenEditModal}
            handleOpenViewModal={handleOpenViewModal}
          />
        )}
      />
    </div>
  );
};

export default DepartmentTable;
