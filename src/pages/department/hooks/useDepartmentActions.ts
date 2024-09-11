import { RootState } from "@/app/store";
import notification from "@/component/ui/alert-message";
import { useDeleteDepartmentMutation } from "@/features/department/department-api";
import { useSelector } from "react-redux";

const useDepartmentActions = (closeModal: () => void) => {
  const { deleteModal } = useSelector((state: RootState) => state.modal);
  const [deleteDepartment] = useDeleteDepartmentMutation();

  const handleDeleteDepartment = async () => {
    try {
      await deleteDepartment(deleteModal.data || "");
      closeModal();

      notification({
        title: "Success!",
        type: "success",
        message: "Department has been deleted successfully",
      });
    } catch (e) {
      console.error("Error deleting department:", e);

      notification({
        title: "Error!",
        type: "error",
        message: "Error deleting department",
      });
    }
  };

  const handleBulkDeleteDepartments = async () => {
    const ids: number[] = deleteModal?.data || [];
    const deletePromises = ids?.map((id: number) =>
      deleteDepartment(String(id))
    );

    try {
      await Promise.all(deletePromises);
      notification({
        title: "Success!",
        type: "success",
        message: "Departments have been deleted successfully",
      });

      closeModal();
    } catch (error) {
      console.error("Error deleting bulk departments:", error);
      notification({
        title: "Error!",
        type: "error",
        message: "Error deleting departments",
      });
    }
  };

  return {
    handleDeleteDepartment,
    handleBulkDeleteDepartments,
  };
};

export default useDepartmentActions;
