import Button from "@/component/ui/button";
import Input from "@/component/ui/form-elements/input";
import PageHeader from "@/component/ui/page-header";
import CustomPagination from "@/component/ui/pagination/custom-pagination";
import { useReadDepartmentsQuery } from "@/features/department/department-api";
import { useModal } from "@/hooks/modal/useModal";
import { QueryParams } from "@/utils/get-query-params";
import CreateDepartment from "./create";
import DepartmentTable from "./table/table";

const Department = () => {
  // const [searchParams, setSearchParams] = useState({
  //   departmentId: "",
  //   departmentName: "",
  // });
  const { ModalComponent, closeModal, openModal } = useModal();

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
        onClick={openModal}
      />

      <div className="grid md:grid-cols-3 items-center gap-2">
        <Input placeholder="Department Id" />
        <Input placeholder="Department Name" />
        <Button>Search</Button>
      </div>

      <DepartmentTable departments={departments?.data || []} />
      <CustomPagination />

      <ModalComponent title="Create Department" size={"lg"}>
        <CreateDepartment onClose={closeModal} />
      </ModalComponent>
    </div>
  );
};

export default Department;
