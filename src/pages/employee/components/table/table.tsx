/* eslint-disable @typescript-eslint/no-explicit-any */
import Table from "@/component/ui/table";
import TableActionBtn from "@/component/ui/table/table-action-btn";
import { EmployeeType } from "@/constants/api-interface/employee";
import { EntityAttributes } from "@/constants/api-interface/root";
import { capitalize } from "@/utils/capitalize";

const columns = [
  {
    header: "Employee ID",
    accessor: "id",
    sortable: true,
  },
  {
    header: "Full Name",
    accessor: "name",
    sortable: true,
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
    header: "Email",
    accessor: "email",
  },
  {
    header: "Date of Hire",
    accessor: "date_of_hire",
  },
  {
    header: "Salary",
    accessor: "salary",
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
    header: "Position Title",
    accessor: "position_title",
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
  employees,
}: {
  employees: EntityAttributes<EmployeeType>[];
}) => {
  const tableData = employees?.map((employee) => {
    const userInfo = employee?.attributes?.user_info?.data?.attributes;
    const employeeInfo = employee?.attributes;

    return {
      id: employee?.attributes?.identity,
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
      position_title: userInfo?.designation?.data?.attributes?.name,
      department: employeeInfo?.department?.data?.attributes?.department_name,
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
        actions={() => <TableActionBtn viewAction />}
      />
    </div>
  );
};

export default EmployeeTable;
