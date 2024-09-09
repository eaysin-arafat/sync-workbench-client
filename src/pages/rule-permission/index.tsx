import Button from "@/component/ui/button";
import Input from "@/component/ui/form-elements/input";
import Select from "@/component/ui/form-elements/select";
import PageHeader from "@/component/ui/page-header";
import CustomPagination from "@/component/ui/pagination/custom-pagination";
import { useReadRolesQuery } from "@/features/role/role-api";
import { useModal } from "@/hooks/modal/useModal";
import CreateRulePermission from "./components/create";
import RulePermissionTable from "./components/table/table";

const RolePermission = () => {
  const { openModal, closeModal, ModalComponent } = useModal();

  const { data: rules } = useReadRolesQuery({});

  return (
    <div>
      <PageHeader
        pageTitle="Role & Permission"
        hasAddButton
        btnLabel="Add New Role"
        onClick={openModal}
      />

      <div className="grid md:grid-cols-3 items-center gap-2">
        <Input placeholder="Role Id" />
        <Select options={[]} placeholder="Select Role" />
        <div className="h-full">
          <Button size="sm" fullWidth>
            Search
          </Button>
        </div>
      </div>

      <RulePermissionTable roles={rules?.roles || []} />
      <CustomPagination />

      <ModalComponent title="Authentication" size={"70rem"}>
        <CreateRulePermission onClose={closeModal} />
      </ModalComponent>
    </div>
  );
};

export default RolePermission;
