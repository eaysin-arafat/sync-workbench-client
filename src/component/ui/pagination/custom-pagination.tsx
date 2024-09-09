import { useState } from "react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ReactPagination from "react-js-pagination";
import Select from "../form-elements/select";

// Define the types for the component props
interface CustomPaginationProps {
  totalItemsCount: number;
  itemsPerPage: number;
  onPageChange: (pageNumber: number, pageSize: number) => void;
  currentPage: number; // Add currentPage to props
  meta: {
    pagination: {
      page: number;
      pageSize: number;
    };
  };
}

/**
 * @description Custom Pagination Component with Strapi integration
 */
const CustomPagination: React.FC<CustomPaginationProps> = ({
  totalItemsCount,
  itemsPerPage,
  onPageChange,
  currentPage, // Destructure currentPage from props
  meta,
}) => {
  const [activePage, setActivePage] = useState<number>(currentPage);
  const [itemsCountPerPage, setItemsCountPerPage] = useState<number>(
    itemsPerPage || meta?.pagination?.pageSize || 10
  );

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setActivePage(pageNumber);
    onPageChange(pageNumber, itemsCountPerPage);
  };

  // Adjust the event type or value handling according to the Select component's behavior
  const handleItemsPerPageChange = (
    value: string | React.ChangeEvent<HTMLInputElement> | null
  ) => {
    let newValue: string;
    if (typeof value === "string") {
      newValue = value;
    } else if (value && "target" in value) {
      newValue = value.target.value;
    } else {
      newValue = "10"; // Fallback value
    }

    const newPageSize = parseInt(newValue, 10);
    setItemsCountPerPage(newPageSize);
    onPageChange(1, newPageSize); // reset to page 1 when changing page size
  };

  return (
    <div className="flex items-center justify-end mt-4 gap-2">
      {/* Select the number of items per page */}
      <Select
        options={[
          { label: "5", value: "5" },
          { label: "10", value: "10" },
          { label: "20", value: "20" },
        ]}
        defaultValue={itemsCountPerPage.toString()}
        onChange={(value) => handleItemsPerPageChange(value)}
        placeholder="Items per page"
      />

      {/* PAGINATION */}
      <ReactPagination
        activePage={activePage}
        itemsCountPerPage={itemsCountPerPage}
        totalItemsCount={totalItemsCount}
        pageRangeDisplayed={3}
        onChange={handlePageChange}
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
};

export default CustomPagination;
