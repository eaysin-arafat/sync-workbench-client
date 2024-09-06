import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ReactPagination from "react-js-pagination";
import Select from "../form-elements/select";

// Custom Pagination Props

/**
 * @description Custom Pagination Component
 */
function CustomPagination() {
  return (
    <div className="flex items-center justify-end mt-4 gap-2">
      <Select
        options={[
          { label: "5", value: "5" },
          { label: "10", value: "10" },
          { label: "20", value: "20" },
        ]}
        defaultValue="10"
        placeholder="Enter"
      />

      {/* PAGINATION */}
      <ReactPagination
        activePage={1}
        itemsCountPerPage={5}
        totalItemsCount={1}
        pageRangeDisplayed={3}
        onChange={() => {}}
        innerClass={"flex gap-1 select-none border border-stroke rounded-sm"}
        activeClass={"!bg-primary text-white rounded-sm"}
        itemClass={
          "cursor-pointer w-[35px] h-[33px] text-[13px] text-center flex justify-center items-center text-textColor"
        }
        firstPageText={<BiLeftArrowAlt />}
        lastPageText={<BiRightArrowAlt />}
        prevPageText={<IoIosArrowBack />}
        nextPageText={<IoIosArrowForward />}
      />
    </div>
  );
}

export default CustomPagination;
