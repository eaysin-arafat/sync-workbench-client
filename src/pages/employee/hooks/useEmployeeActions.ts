import { RootState } from "@/app/store";
import notification from "@/component/ui/alert-message";
import { useDeleteEmployeeMutation } from "@/features/employee/employee-api";
import { useSelector } from "react-redux";

const useEmployeeActions = ({ closeModal }: { closeModal: () => void }) => {
  const { deleteModal } = useSelector((state: RootState) => state.modal);
  const [deleteEmployee] = useDeleteEmployeeMutation();

  const handleDeleteEmployee = async () => {
    try {
      await deleteEmployee(deleteModal.data);
      closeModal();

      notification({
        title: "Success!",
        type: "success",
        message: "Employee has been deleted successfully",
      });
    } catch (e) {
      console.error("Error deleting employee:", e);

      notification({
        title: "Error!",
        type: "error",
        message: "Error deleting employee",
      });
    }
  };

  return { handleDeleteEmployee };
};

export default useEmployeeActions;
