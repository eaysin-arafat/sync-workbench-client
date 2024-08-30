import ToolTip from "@/component/ui/tooltip";
import { IoEyeOutline } from "react-icons/io5";
import { MdEditNote } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

const TableActionBtn = ({ data }: { data: unknown }) => {
  console.log(data);

  return (
    <div className="flex items-center space-x-3.5">
      <ToolTip label="View">
        <button className="hover:text-primary">
          <IoEyeOutline />
        </button>
      </ToolTip>

      <ToolTip label="Edit">
        <button className="hover:text-primary">
          <MdEditNote />
        </button>
      </ToolTip>

      <ToolTip label="Delete">
        <button className="hover:text-primary">
          <RiDeleteBin6Line />
        </button>
      </ToolTip>
    </div>
  );
};

export default TableActionBtn;
