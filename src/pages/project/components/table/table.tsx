import Table from "@/component/ui/table";
import TableActionBtn from "@/component/ui/table/table-action-btn";
import { EmployeeType } from "@/constants/api-interface/employee";
import { EntityAttributes } from "@/constants/api-interface/root";

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
            {item.name?.first_name} {item.name?.last_name}
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
      return (
        <p
          className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ${
            item.employee_status === "Active"
              ? "bg-success text-success"
              : item.employee_status === "Inactive"
              ? "bg-danger text-danger"
              : "bg-warning text-warning"
          }`}
        >
          {item.employee_status}
        </p>
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

const ProjectTable = ({
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
      role: "",
      employment_status: employeeInfo?.employment_status,
      employee_status: employeeInfo?.employment_status,
      is_internship: employeeInfo?.is_internship,
      position_title: employeeInfo?.position_id,
      department: "",
      manager: "",
    };
  });


  return (
    <div className="rounded-sm bg-bgColor pt-6 shadow-1">
      <div className="max-w-full overflow-x-auto">
        <Table
          columns={columns}
          data={tableData}
          actions={(item) => <TableActionBtn data={item} />}
        />
      </div>
    </div>
  );
};

export default ProjectTable;
