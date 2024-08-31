import Button from "@/component/ui/atoms/button";
import Input from "@/component/ui/molecules/input";
import DefaultModal from "@/component/ui/molecules/modal";
import PageHeader from "@/component/ui/molecules/page-header";
import Select from "@/component/ui/molecules/select";
import CustomPagination from "@/component/ui/pagination/custom-pagination";
import { useReadEmployeesQuery } from "@/features/employee/employee-api";
import { QueryParams } from "@/utils/get-query-params";
import { useState } from "react";
import CreateEmployee from "./components/create";
import EmployeeTable from "./components/table/table";

const Employee = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const options = [
    { label: "Frontend Developer", value: 1 },
    { label: "Backend Developer", value: 2 },
    { label: "UX & UI Developer", value: 3 },
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
    },
  };

  const { data: employees } = useReadEmployeesQuery(queryParams);

  return (
    <div>
      <PageHeader
        pageTitle="Employee"
        hasAddButton
        btnLabel="Add New Employee"
        onClick={() => setIsModalOpen(true)}
      />

      <div className="grid md:grid-cols-4 items-center gap-2">
        <Input placeholder="Employee Id" />
        <Input placeholder="Employee Name" />
        <Select options={options} placeholder="Select Position" />
        <div className="h-full">
          <Button variant="primary" size="sm" fullWidth>
            Search
          </Button>
        </div>
      </div>

      <EmployeeTable employees={employees?.data || []} />
      <CustomPagination />

      <DefaultModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Large Modal"
        size="lg" // Specify the size here
      >
        <CreateEmployee onClose={close} />
      </DefaultModal>
    </div>
  );
};

export default Employee;
