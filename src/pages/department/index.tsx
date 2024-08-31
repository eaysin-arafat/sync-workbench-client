import Input from "@/component/ui/molecules/input";
import Modal from "@/component/ui/molecules/modal";
import PageHeader from "@/component/ui/molecules/page-header";
import CustomPagination from "@/component/ui/pagination/custom-pagination";
import { useReadDepartmentsQuery } from "@/features/department/department-api";
import { QueryParams } from "@/utils/get-query-params";
import { Button } from "@mantine/core";
import { useState } from "react";
import CreateDepartment from "./create";
import DepartmentTable from "./table/table";

const Department = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  }; // const [searchParams, setSearchParams] = useState({
  //   departmentId: "",
  //   departmentName: "",
  // });

  const queryParams: QueryParams = {
    sort: ["department_name:asc"],
    populate: {
      employees: {
        populate: {
          user_info: {
            fields: ["username", "first_name", "last_name"],
            populate: {
              avatar: {
                fields: ["url"],
              },
            },
          },
        },
      },
      manager: {
        populate: {
          user_info: {
            fields: ["username", "first_name", "last_name"],
            populate: {
              avatar: {
                fields: ["url"],
              },
            },
          },
        },
      },
    },
    // filters: {
    //   department_id: {
    //     $eq: searchParams.departmentId || undefined,
    //   },
    //   department_name: {
    //     $contains: searchParams.departmentName || undefined,
    //   },
    // },
  };

  const { data: departments } = useReadDepartmentsQuery(queryParams);

  return (
    <div>
      <PageHeader
        pageTitle="Department"
        hasAddButton
        btnLabel="Add New Department"
        onClick={() => setIsModalOpen(true)}
      />

      <div className="grid md:grid-cols-3 items-center gap-2 pb-2 md:pb-4">
        <Input placeholder="Department Id" height="40" />
        <Input placeholder="Department Name" height="40" />
        <Button variant="primary">Search</Button>
      </div>

      <DepartmentTable departments={departments?.data || []} />
      <CustomPagination />

      <Modal
        isOpen={isModalOpen}
        handleClose={handleCloseModal}
        setOpenModal={setIsModalOpen}
        // isOpen={isModalOpen}
        // onClose={() => setIsModalOpen(false)}
        // title="Large Modal"
        // size="lg" // Specify the size here
      >
        <CreateDepartment onClose={close} />
      </Modal>
    </div>
  );
};

export default Department;
