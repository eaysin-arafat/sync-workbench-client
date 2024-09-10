import Table from "@/component/ui/table";
import ShowTableList from "@/component/ui/table-list-item";
import TableActionBtn from "@/component/ui/table/table-action-btn";
import { Designation } from "@/constants/api-interface/designations";
import { EntityAttributes } from "@/constants/api-interface/root";

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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    render: (item: any) => {
      const data = item?.employees?.map(
        (employee: { username: string }) => employee?.username
      );
      return <ShowTableList data={data} />;
    },
  },
];

const DesignationTable = ({
  designations,
  handleEdit,
  handleDelete,
}: {
  designations: EntityAttributes<Designation>[];
  handleEdit?: (id: string) => void;
  handleDelete?: (id: string) => void;
}) => {
  const tableData = designations?.map((designation) => {
    return {
      id: designation?.id,
      name: designation?.attributes?.name,
      description: designation?.attributes?.description,
      employees: designation?.attributes?.employees?.data?.map((employee) => ({
        username: employee?.attributes?.user_info?.data?.attributes?.username,
      })),
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
