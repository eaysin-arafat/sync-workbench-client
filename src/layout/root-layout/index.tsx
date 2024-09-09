import Navbar from "@/component/navbar";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import useSidebar from "./sidebar/useSidebar";

const RootLayout = () => {
  const { handleToggleSidebar, sidebarOpen } = useSidebar();

  return (
    <div className="bg-bgColor h-screen flex flex-col">
      <Navbar toggleSidebar={handleToggleSidebar} sidebarOpen={sidebarOpen} />
      <div className="flex flex-grow overflow-hidden">
        <Sidebar />
        <main className="px-3 md:px-6 w-full border border-stroke border-t-0 py-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default RootLayout;
