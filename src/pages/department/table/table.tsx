import Avatar, { AvatarDataType } from "@/component/ui/avatar";
import Table, { TableColumn } from "@/component/ui/table";
import TableActionBtn from "@/component/ui/table/table-action-btn";
import { DepartmentType } from "@/constants/api-interface/department";
import { EntityAttributes } from "@/constants/api-interface/root";
import AvatarGroup from "./avatar-group";

const columns: TableColumn[] = [
  {
    header: "Name",
    accessor: "department_name",
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
    sortable: true,
  },
  {
    header: "Manager",
    accessor: "manager",
    sortable: true,
    render: (item) => {
      return <Avatar data={item?.manager} />;
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
  departments,
}: {
  departments: EntityAttributes<DepartmentType>[];
}) => {
  const departmentTableData = departments?.map((department) => {
    const { department_name, description, location, employees, manager } =
      department?.attributes;

    return {
      department_name,
      description,
      location,
      manager: {
        url: manager?.data?.attributes?.user_info?.data?.attributes?.avatar
          ?.data?.attributes?.url,
        name: manager?.data?.attributes?.user_info?.data?.attributes?.username,
      },
      employees: employees?.data?.map((item) => ({
        url: item?.attributes?.user_info?.data?.attributes?.avatar?.data
          ?.attributes?.url,
        name: item?.attributes?.user_info?.data?.attributes?.username,
      })),
    };
  });

  return (
    <div className="rounded-sm bg-bgColor pt-6 shadow-1">
      <div className="max-w-full overflow-x-auto">
        <Table
          columns={columns}
          data={departmentTableData}
          actions={(item) => <TableActionBtn data={item} />}
        />
      </div>
    </div>
  );
};

export default DepartmentTable;
