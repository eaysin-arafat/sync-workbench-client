import Button from "@/component/ui/button";
import Input from "@/component/ui/form-elements/input";
import Select from "@/component/ui/form-elements/select";
import PageHeader from "@/component/ui/page-header";
import CustomPagination from "@/component/ui/pagination/custom-pagination";
import usePagination from "@/component/ui/pagination/usePagination";
import { useReadEmployeesQuery } from "@/features/employee/employee-api";
import { useModal } from "@/hooks/modal/useModal";
import { QueryParams } from "@/utils/get-query-params";
import { useState } from "react";
import CreateEmployee from "./components/create";
import EmployeeTable from "./components/table/table";

const Employee = () => {
  const { openModal, closeModal, ModalComponent } = useModal();
  // State for search query and sorting
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortOption, setSortOption] = useState<string>("date_of_hire:asc");

  const {
    pagination: { currentPage, itemsPerPage },
    handlePageChange,
  } = usePagination(1, 10);

  const options = [
    { label: "Frontend Developer", value: "1" },
    { label: "Backend Developer", value: "2" },
    { label: "UX & UI Developer", value: "3" },
  ];

  // Define the queryParams with pagination and other parameters
  const queryParams: QueryParams = {
    sort: [sortOption],
    pagination: {
      page: currentPage,
      pageSize: itemsPerPage,
    },
    populate: {
      user_info: {
        fields: ["username", "first_name", "last_name", "email"],
        populate: {
          avatar: {
            fields: ["url"],
          },
          role: {
            fields: ["name"],
          },
          designation: {
            fields: ["name"],
          },
          department: {
            fields: ["name"],
          },
        },
      },
      reporting_manager: {
        populate: {
          user_info: {
            fields: ["username"],
          },
        },
      },
      employee_status: {
        fields: ["name"],
      },
      employment_status: {
        fields: ["name"],
      },
      department: {
        fields: ["department_name"],
      },
    },
  };

  // Fetch employees data with the defined queryParams
  const { data: employees } = useReadEmployeesQuery(queryParams);

  return (
    <div>
      {/* Page header with Add New Employee button */}
      <PageHeader
        pageTitle="Employee"
        hasAddButton
        btnLabel="Add New Employee"
        onClick={openModal}
      />

      {/* Filters for Employee Id, Name, and Position */}
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

      {/* Employee Table */}
      <EmployeeTable employees={employees?.data || []} />

      {/* Pagination */}
      <CustomPagination
        totalItemsCount={employees?.meta.pagination.total || 0}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
        currentPage={currentPage}
        meta={{ pagination: { page: currentPage, pageSize: itemsPerPage } }}
      />

      {/* Modal for adding a new employee */}
      <ModalComponent title="Add New Employee" size={"70rem"}>
        <CreateEmployee onClose={closeModal} />
      </ModalComponent>
    </div>
  );
};

export default Employee;
