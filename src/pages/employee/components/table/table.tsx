/* eslint-disable @typescript-eslint/no-explicit-any */
import Table, { TableColumn } from "@/component/ui/table";
import TableActionBtn from "@/component/ui/table/table-action-btn";
import { Employee } from "@/constants/api-interface/employee";
import { DataTableType } from "@/constants/interface/table-types";
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
    sortable: true,
  },
  {
    header: "Email",
    accessor: "email",
  },
  {
    header: "Date of Hire",
    accessor: "date_of_hire",
    sortable: true,
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
  handleDelete,
  handleEdit,
  handleView,
}: DataTableType<Employee>) => {
  const tableData = data?.map((employee) => {
    const userInfo = employee?.attributes?.user_info?.data?.attributes;
    const employeeInfo = employee?.attributes;

    return {
      id: employee?.id,
      identity: employee?.attributes?.identity,
      name: {
        first_name: userInfo?.first_name,
        last_name: userInfo?.last_name,
      },
      username: userInfo?.username,
      email: userInfo?.email,
      date_of_hire: employeeInfo?.date_of_hire,
      salary: employeeInfo?.salary,
      role: userInfo?.role?.data?.attributes?.name,
      employment_status:
        employeeInfo?.employment_status?.data?.attributes?.name,
      employee_status: employeeInfo?.employee_status?.data?.attributes?.name,
      is_internship: employeeInfo?.is_internship,
      designation: employeeInfo?.designation?.data?.attributes?.name,
      department: employeeInfo?.employee_of_departments?.data?.attributes?.name,
      manager:
        employeeInfo?.reporting_manager?.data?.attributes?.user_info?.data
          ?.attributes?.username,
    };
  });

  return (
    <div className="max-w-full overflow-x-auto rounded-sm bg-bgColor pt-6 shadow-1">
      <Table
        columns={columns}
        data={tableData}
        
        actions={(id) => (
          <TableActionBtn
            id={id as string}
            viewAction
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            handleView={handleView}
          />
        )}
      />
    </div>
  );
};

export default EmployeeTable;
