import Table, { TableColumn } from "@/component/ui/table";
import TableActionBtn from "@/component/ui/table/table-action-btn";
import { Role } from "@/constants/api-interface/role";

const columns: TableColumn[] = [
  {
    header: "Role ID",
    accessor: "id",
    sortable: true,
  },
  {
    header: "Role name",
    accessor: "name",
    sortable: true,
  },
  {
    header: "Description",
    accessor: "description",
    render: (item) => {
      return <p className="truncate">{item?.description}</p>;
    },
  },
  {
    header: "Type",
    accessor: "type",
  },
  {
    header: "Users",
    accessor: "nb_users",
  },
];

const RolePermissionTable = ({ roles }: { roles: Role[] }) => {
  const tableData = roles?.map((role) => {
    const { name, description, type, nb_users, id } = role;

    return {
      id,
      name,
      description,
      type,
      nb_users,
    };
  });

  return (
    <div className="rounded-sm bg-bgColor pt-6 shadow-1">
      <div className="max-w-full overflow-x-auto">
        <Table
          columns={columns}
          data={tableData}
          actions={() => <TableActionBtn />}
        />
      </div>
    </div>
  );
};

export default RolePermissionTable;
