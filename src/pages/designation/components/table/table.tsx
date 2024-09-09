import Table from "@/component/ui/table";
import TableActionBtn from "@/component/ui/table/table-action-btn";
import { Designation } from "@/constants/api-interface/designations";
import { EntityAttributes } from "@/constants/api-interface/root";
import { User } from "@/constants/api-interface/user";

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
    header: "Users",
    accessor: "users",
    render: (item: any) => {
      return <p>{item?.users?.map((user: User) => user?.username)}</p>;
    },
  },
];

const DesignationTable = ({
  designations,
}: {
  designations: EntityAttributes<Designation>[];
}) => {
  const tableData = designations?.map((designation) => {
    return {
      id: designation?.id,
      name: designation?.attributes?.name,
      description: designation?.attributes?.description,
      users: designation?.attributes?.users?.data,
    };
  });

  return (
    <div className="rounded-sm bg-bgColor pt-6 shadow-1">
      <div className="max-w-full overflow-x-auto">
        <Table
          columns={columns}
          data={tableData}
          actions={(item) => <TableActionBtn data={item} viewAction />}
        />
      </div>
    </div>
  );
};

export default DesignationTable;
