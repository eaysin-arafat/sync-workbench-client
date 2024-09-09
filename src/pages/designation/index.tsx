import Button from "@/component/ui/button";
import Input from "@/component/ui/form-elements/input";
import PageHeader from "@/component/ui/page-header";
import CustomPagination from "@/component/ui/pagination/custom-pagination";
import { useReadDesignationsQuery } from "@/features/designation/designation-api";
import { useModal } from "@/hooks/modal/useModal";
import { QueryParams } from "@/utils/get-query-params";
import CreateDesignation from "./components/create";
import DesignationTable from "./components/table/table";

const Designation = () => {
  const { openModal, closeModal, ModalComponent } = useModal();

  const queryParams: QueryParams = {
    sort: ["date_of_hire:asc"],
  };

  const { data: designations } = useReadDesignationsQuery(queryParams);

  return (
    <div>
      <PageHeader
        pageTitle="Designation"
        hasAddButton
        btnLabel="Add New Designation"
        onClick={openModal}
      />

      <div className="grid md:grid-cols-3 items-center gap-2">
        <Input placeholder="Designation Id" />
        <Input placeholder="Designation Name" />
        <div className="h-full">
          <Button size="sm" fullWidth>
            Search
          </Button>
        </div>
      </div>

      <DesignationTable designations={designations?.data || []} />
      <CustomPagination />

      <ModalComponent title="Create Designation" size={"lg"}>
        <CreateDesignation onClose={closeModal} />
      </ModalComponent>
    </div>
  );
};

export default Designation;
