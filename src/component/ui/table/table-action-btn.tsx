import ToolTip from "@/component/ui/tooltip";
import { IoEyeOutline } from "react-icons/io5";
import { MdModeEditOutline } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

interface TableActionBtnProps {
  viewAction?: boolean; // Optional dynamic view button
  handleOpenEditModal?: (id: string) => void; // Default edit action
  handleOpenDeleteModal?: (id: string) => void; // Default delete action
  handleOpenViewModal?: (id: string) => void;
  spacing?: string; // Optional custom spacing between buttons
  buttonClass?: string; // Optional custom button class
  id?: string;
}

const TableActionBtn = ({
  viewAction,
  spacing = "space-x-3.5",
  buttonClass = "hover:text-primary",
  handleOpenDeleteModal,
  handleOpenEditModal,
  handleOpenViewModal,
  id = "",
}: TableActionBtnProps) => {
  const handleViewAction = (id: string) => {
    if (handleOpenViewModal) handleOpenViewModal(id);
  };

  const handleEditAction = (id: string) => {
    if (handleOpenEditModal) handleOpenEditModal(id);
  };

  const handleDeleteAction = (id: string) => {
    if (handleOpenDeleteModal) handleOpenDeleteModal(id);
  };

  return (
    <div className={`flex items-center ${spacing}`}>
      {viewAction && (
        <ToolTip label={"View"}>
          <button className={buttonClass} onClick={() => handleViewAction(id)}>
            <IoEyeOutline />
          </button>
        </ToolTip>
      )}

      {/* Default Edit Button */}
      <ToolTip label="Edit">
        <button className={buttonClass} onClick={() => handleEditAction(id)}>
          <MdModeEditOutline />
        </button>
      </ToolTip>

      {/* Default Delete Button */}
      <ToolTip label="Delete">
        <button className={buttonClass} onClick={() => handleDeleteAction(id)}>
          <RiDeleteBin6Line />
        </button>
      </ToolTip>
    </div>
  );
};

export default TableActionBtn;
