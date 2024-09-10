import Button from "@/component/ui/button";
import Input from "@/component/ui/form-elements/input";
import Select from "@/component/ui/form-elements/select";
import Modal from "@/component/ui/modal";
import PageHeader from "@/component/ui/page-header";
import CustomPagination from "@/component/ui/pagination/custom-pagination";
import { useReadRolesQuery } from "@/features/role/role-api";
import { useDisclosure } from "@mantine/hooks";
import CreateRulePermission from "./components/create";
import RulePermissionTable from "./components/table/table";

const RolePermission = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const { data: rules } = useReadRolesQuery({});

  return (
    <div>
      <PageHeader
        pageTitle="Role & Permission"
        hasAddButton
        btnLabel="Add New Role"
        onClick={open}
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

      <Modal
        opened={opened}
        onClose={close}
        title="Authentication"
        size={"70rem"}
      >
        <CreateRulePermission onClose={close} />
      </Modal>
    </div>
  );
};

export default RolePermission;
