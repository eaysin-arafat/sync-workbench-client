import ClickOutside from "@/layout/click-outside";
import { getShortId } from "@/utils/generate-shortid";
import { NumberFormatter, ScrollArea } from "@mantine/core";
import { useState } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import Typography from "../typography";

interface Props {
  data: string[];
}
const ShowTableList = ({ data }: Props) => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleOpen = () => setOpen(!open);
  return (
    <>
      <div className="relative ">
        <div
          className="flex items-center gap-1 cursor-pointer"
          onClick={toggleOpen}
        >
          <div className="bg-gray px-1">
            <NumberFormatter value={data?.length} />
          </div>
          <Typography variant="span" className="">
            Entity
          </Typography>
          <MdOutlineArrowDropDown size={18} />
        </div>

        {open && (
          <div className="absolute top-6 bg-bgColor border border-stroke z-99999">
            <ClickOutside onClick={() => setOpen(false)}>
              <ScrollArea style={{ maxHeight: "150px", overflowY: "auto" }}>
                <ul className="list-none">
                  {data?.map((item, index) => (
                    <li key={getShortId()}>
                      <Typography
                        variant="span"
                        className={`capitalize px-5 py-1 text-xs ${
                          data?.length - 1 === index
                            ? ""
                            : "border-b border-stroke"
                        } `}
                      >
                        {item}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </ScrollArea>
            </ClickOutside>
          </div>
        )}
      </div>
    </>
  );
};

export default ShowTableList;
