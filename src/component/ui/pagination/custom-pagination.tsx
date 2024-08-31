import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ReactPagination from "react-js-pagination";
import Select from "../molecules/select";

// Custom Pagination Props

/**
 * @description Custom Pagination Component
 */
function CustomPagination() {
  return (
    <div className="w-full flex flex-col sm:flex-row mt-4 items-center justify-between gap-3 ">
      {/* SHOWING ITEMS COUNT */}
      <div className="flex items-start justify-start gap-2 ">
        <p className="text-sm text-textColor">
          Showing <span className="font-medium">5</span> from{" "}
          <span className="font-medium">10</span> data
        </p>
      </div>

      {/* SHOW PER PAGE */}
      <div className="flex items-center justify-center gap-2">
        <Select options={["5", "10", "20"]} defaultValue="10" placeholder="" />

        {/* PAGINATION */}
        <ReactPagination
          activePage={1}
          itemsCountPerPage={5}
          totalItemsCount={1}
          pageRangeDisplayed={3}
          onChange={() => {}}
          innerClass={"flex gap-1 select-none border border-stroke rounded-md"}
          activeClass={"!bg-primary text-white rounded-md"}
          itemClass={
            "cursor-pointer w-[35px] h-[33px] text-[13px] text-center flex justify-center items-center text-textColor"
          }
          firstPageText={<BiLeftArrowAlt />}
          lastPageText={<BiRightArrowAlt />}
          prevPageText={<IoIosArrowBack />}
          nextPageText={<IoIosArrowForward />}
        />
      </div>
    </div>
  );
}

export default CustomPagination;
