import Button from "@/component/ui/button";
import Input from "@/component/ui/form-elements/input";
import Select from "@/component/ui/form-elements/select";
import Modal from "@/component/ui/modal";
import PageHeader from "@/component/ui/page-header";
import CustomPagination from "@/component/ui/pagination/custom-pagination";
import { useReadEmployeesQuery } from "@/features/employee/employee-api";
import { QueryParams } from "@/utils/get-query-params";
import { useDisclosure } from "@mantine/hooks";
import CreateEmployee from "./components/create";
import EmployeeTable from "./components/table/table";

const Project = () => {
  const [opened, { open, close }] = useDisclosure(false);

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
        onClick={open}
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

      <Modal
        opened={opened}
        onClose={close}
        title="Authentication"
        size={"70rem"}
      >
        <CreateEmployee onClose={close} />
      </Modal>
    </div>
  );
};

export default Project;
