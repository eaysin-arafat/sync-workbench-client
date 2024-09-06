import Button from "@/component/ui/button";
import Input from "@/component/ui/form-elements/input";
import Select from "@/component/ui/form-elements/select";
import PageHeader from "@/component/ui/page-header";
import CustomPagination from "@/component/ui/pagination/custom-pagination";
import { useReadEmployeesQuery } from "@/features/employee/employee-api";
import { useModal } from "@/hooks/modal/useModal";
import { QueryParams } from "@/utils/get-query-params";
import CreateEmployee from "./components/create";
import EmployeeTable from "./components/table/table";

const Employee = () => {
  const { openModal, closeModal, ModalComponent } = useModal();

  const options = [
    { label: "Frontend Developer", value: "1" },
    { label: "Backend Developer", value: "2" },
    { label: "UX & UI Developer", value: "3" },
  ];

  const queryParams: QueryParams = {
    sort: ["date_of_hire:asc"],
    populate: {
      user_info: {
        fields: ["username"],
        populate: {
          avatar: {
            fields: ["url"],
          },
        },
      },
      manager: {
        fields: ["username"],
        populate: {
          avatar: {
            fields: ["url"],
          },
        },
      },
    },
  };

  const { data: employees } = useReadEmployeesQuery(queryParams);

  return (
    <div>
      <PageHeader
        pageTitle="Employee"
        hasAddButton
        btnLabel="Add New Employee"
        onClick={openModal}
      />

      <div className="grid md:grid-cols-4 items-center gap-2">
        <Input placeholder="Employee Id" />
        <Input placeholder="Employee Name" />
        <Select options={options} placeholder="Select Position" />
        <div className="h-full">
          <Button size="sm" fullWidth>
            Search
          </Button>
        </div>
      </div>

      <EmployeeTable employees={employees?.data || []} />
      <CustomPagination />

      <ModalComponent title="Authentication" size={"70rem"}>
        <CreateEmployee onClose={closeModal} />
      </ModalComponent>
    </div>
  );
};

export default Employee;
