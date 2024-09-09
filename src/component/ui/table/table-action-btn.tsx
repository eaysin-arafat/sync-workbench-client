import ToolTip from "@/component/ui/tooltip";
import { IoEyeOutline } from "react-icons/io5";
import { MdModeEditOutline } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

interface TableActionBtnProps {
  viewAction?: boolean; // Optional dynamic view button
  onEdit?: () => void; // Default edit action
  onDelete?: () => void; // Default delete action
  onView?: () => void;
  spacing?: string; // Optional custom spacing between buttons
  buttonClass?: string; // Optional custom button class
}

const TableActionBtn = ({
  viewAction,
  onEdit,
  onDelete,
  spacing = "space-x-3.5",
  buttonClass = "hover:text-primary",
  onView,
}: TableActionBtnProps) => {
  return (
    <div className={`flex items-center ${spacing}`}>
      {viewAction && (
        <ToolTip label={"View"}>
          <button className={buttonClass} onClick={onView}>
            <IoEyeOutline />
          </button>
        </ToolTip>
      )}

      {/* Default Edit Button */}
      <ToolTip label="Edit">
        <button className={buttonClass} onClick={onEdit}>
          <MdModeEditOutline />
        </button>
      </ToolTip>

      {/* Default Delete Button */}
      <ToolTip label="Delete">
        <button className={buttonClass} onClick={onDelete}>
          <RiDeleteBin6Line />
        </button>
      </ToolTip>
    </div>
  );
};

export default TableActionBtn;
