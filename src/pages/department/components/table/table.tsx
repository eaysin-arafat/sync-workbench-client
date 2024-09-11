import { RootState } from "@/app/store";
import AvatarGroup, {
  AvatarDataType,
} from "@/component/ui/avatar/avatar-group";
import DeleteConfirmation from "@/component/ui/delete-confirmation/delete-confirmation";
import Modal from "@/component/ui/modal";
import Table, { TableColumn } from "@/component/ui/table";
import TableActionBtn from "@/component/ui/table/table-action-btn";
import { Department } from "@/constants/api-interface/department";
import { DataTableType } from "@/constants/interface/table-types";
import { departmentModalTypes } from "@/constants/modal-types/modal-types";
import {
  closeDeleteModal,
  openDeleteModal,
} from "@/features/modal/modal-slice";
import useSelectIds from "@/hooks/shared/useSelectIds";
import { useDispatch, useSelector } from "react-redux";

const columns: TableColumn[] = [
  {
    header: "ID",
    accessor: "id",
  },
  {
    header: "Name",
    accessor: "name",
    sortable: true,
  },
  {
    header: "Description",
    accessor: "description",
    sortable: true,
  },
  {
    header: "Location",
    accessor: "location",
    width: "400",
  },
  {
    header: "Manager",
    accessor: "manager",
    sortable: true,
    render: (item) => {
      return <AvatarGroup data={[item?.manager]} />;
    },
  },
  {
    header: "Employees",
    accessor: "employees",
    render: (data) => {
      const employees = data?.employees?.map((item: AvatarDataType) => {
        return {
          url: item?.url,
          name: item?.name,
        };
      });

      return <AvatarGroup data={employees} />;
    },
  },
];

const DepartmentTable = ({
  data,
  handleDelete,
  handleEdit,
  handleView,
  handleSort,
  sortConfig,
  handleBulkDelete,
}: DataTableType<Department>) => {
  const { deleteModal } = useSelector((state: RootState) => state.modal);

  const { handleSelect, handleSelectAll, selectedIds } = useSelectIds(data);
  const dispatch = useDispatch();

  const departmentTableData = data?.map((department) => {
    const { name, description, location, employees, manager } =
      department?.attributes || [];

    return {
      id: department?.id,
      name,
      description,
      location,
      manager: {
        url: manager?.data?.attributes?.user_info?.data?.attributes?.avatar
          ?.data?.attributes?.url,
        name: manager?.data?.attributes?.user_info?.data?.attributes?.username,
      },
      employees: employees?.data?.map((item) => ({
        url: item?.attributes?.user_info?.data?.attributes?.avatar?.data
          ?.attributes?.url,
        name: item?.attributes?.user_info?.data?.attributes?.username,
      })),
    };
  });

  const isOpenBulkDeleteDepartment =
    deleteModal?.modalId === departmentModalTypes?.bulkDeleteDepartment;

  const closeModal = () => dispatch(closeDeleteModal());

  const handleOpenBulkDeleteConfirmation = () => {
    dispatch(
      openDeleteModal({
        modalId: departmentModalTypes?.bulkDeleteDepartment,
        data: selectedIds,
      })
    );
  };

  return (
    <div className="rounded-sm bg-bgColor pt-6 shadow-1">
      <div className="max-w-full overflow-x-auto">
        <Table
          selectedIds={selectedIds}
          columns={columns}
          data={departmentTableData}
          handleSort={handleSort}
          sortConfig={sortConfig}
          handleSelect={handleSelect}
          handleSelectAll={handleSelectAll}
          handleOpenBulkDeleteConfirmation={
            selectedIds?.length > 0
              ? handleOpenBulkDeleteConfirmation
              : () => {}
          }
          actions={(id) => (
            <TableActionBtn
              id={id as string}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              handleView={handleView}
            />
          )}
        />
      </div>

      <Modal
        onClose={closeModal}
        opened={isOpenBulkDeleteDepartment}
        withCloseButton={false}
      >
        <DeleteConfirmation
          title="department"
          closeModal={closeModal}
          handleBulkDelete={handleBulkDelete}
        />
      </Modal>
    </div>
  );
};

export default DepartmentTable;
