import { Kbd } from "@mantine/core";
import { IoSearchOutline } from "react-icons/io5";

const Search = () => {
  return (
    <div className="absolute hidden sm:block left-[50px] lg:left-[280px]">
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center justify-between w-full pl-3 pointer-events-none px-2">
          <IoSearchOutline size={18} className="text-textColor" />
          <div className="flex items-center gap-1.5">
            <Kbd className="!bg-bgColor !border !border-stroke">Ctrl</Kbd>{" "}
            <span className="text-textGray">+</span>
            <Kbd className="!bg-bgColor !border !border-stroke">K</Kbd>
          </div>
        </div>
        <input
          type="text"
          id="search-navbar"
          className="block w-full p-2 pl-10 text-sm text-textColor rounded-lg bg-bgColor focus:outline-none"
          placeholder="Search..."
        />
      </div>
    </div>
  );
};

export default Search;
