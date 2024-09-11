import AvatarGroup, {
  AvatarDataType,
} from "@/component/ui/avatar/avatar-group";
import Table from "@/component/ui/table";
import TableActionBtn from "@/component/ui/table/table-action-btn";
import { Designation } from "@/constants/api-interface/designations";
import { SingleEntityAttributes } from "@/constants/api-interface/root";
import { User } from "@/constants/api-interface/user";
import { DataTableType } from "@/constants/interface/table-types";

const columns = [
  {
    header: "Designation ID",
    accessor: "id",
    sortable: true,
  },
  {
    header: "Name",
    accessor: "name",
    sortable: true,
  },
  {
    header: "Description",
    accessor: "description",
  },
  {
    header: "Employees",
    accessor: "employees",
    render: (item: { employees: SingleEntityAttributes<User>[] }) => {
      const avatarData: AvatarDataType[] = item?.employees?.map((user) => ({
        url: user?.data?.attributes?.avatar?.data?.attributes?.url,
        name: user?.data?.attributes?.username,
      }));

      return <AvatarGroup data={avatarData || []} />;
    },
  },
];

const DesignationTable = ({
  data,
  handleEdit,
  handleDelete,
}: DataTableType<Designation>) => {
  const tableData = data?.map((designation) => {
    return {
      id: designation?.id,
      name: designation?.attributes?.name,
      description: designation?.attributes?.description,
      employees: designation?.attributes?.employees?.data?.map(
        (employee) => employee?.attributes?.user_info
      ),
    };
  });

  return (
    <div className="rounded-sm bg-bgColor pt-6 shadow-1 max-w-full overflow-x-auto">
      <Table
        columns={columns}
        data={tableData}
        actions={(id) => (
          <TableActionBtn
            id={id as string}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            viewAction
          />
        )}
      />
    </div>
  );
};

export default DesignationTable;
