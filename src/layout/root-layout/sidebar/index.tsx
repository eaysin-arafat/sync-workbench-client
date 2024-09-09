import { IoIosLink } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom"; // Import useLocation
import { sidebarMenu } from "./sidebar-data";
import useSidebar from "./useSidebar";

const Sidebar = () => {
  const { toggleMenu, sidebarOpen, W1024, openMenuId, handleSetSidebar } =
    useSidebar();

  return (
    <div className="h-screen">
      <aside
        className={`overflow-y-auto shadow-lg bg-bgColor h-[94%] pb-5 transition-all duration-300 ease-in-out fixed lg:static z-50 w-[280px]  ${
          sidebarOpen ? "ms-[0px]" : "ms-[-280px]"
        }`}
      >
        <nav aria-label="Main" className="">
          {sidebarMenu?.map((item) => (
            <div key={item?.id}>
              <div
                onClick={() => toggleMenu(item?.id, item?.link)}
                className={`flex items-center p-2 transition-colors hover:bg-gray space-x-3 px-5 pl-6.5 py-2.5 cursor-pointer text-textColor ${
                  (location.pathname === item.link || openMenuId === item.id) &&
                  !item?.submenu
                    ? "bg-gray"
                    : ""
                }`}
              >
                <span aria-hidden="true">
                  {item?.icon ? item?.icon : <IoIosLink />}
                </span>
                <span className="text-sm">{item?.title}</span>
                {item?.submenu && item?.submenu?.length > 0 && (
                  <MdOutlineKeyboardArrowDown
                    size={23}
                    className={`${openMenuId === item.id ? "rotate-180" : ""}`}
                  />
                )}
              </div>
              {item?.submenu && openMenuId === item?.id && (
                <div className={`pl-10`}>
                  {item?.submenu?.map((subItem) => (
                    <Link
                      className={`flex items-center p-2 py-2.5 pl-4 transition-colors rounded-sm hover:bg-gray cursor-pointer text-textColor ${
                        location.pathname === subItem.link ? "bg-gray" : ""
                      }`}
                      key={subItem?.id}
                      to={subItem?.link}
                      onClick={() => {
                        if (W1024) handleSetSidebar(!sidebarOpen);
                      }}
                    >
                      <span aria-hidden="true">
                        {subItem?.icon ? subItem?.icon : <IoIosLink />}
                      </span>
                      <span className="ml-3 text-sm">{subItem?.title}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
