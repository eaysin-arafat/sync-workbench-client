import { RootState } from "@/app/store";
import {
  setSidebar,
  toggleSidebar,
} from "@/features/sidebar-slice/sidebar-slice";
import useWindowWidth from "@/hooks/shared/useWindowWidth";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { sidebarMenu } from "./sidebar-data";

const useSidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation(); // Get the current route
  const W1024 = useWindowWidth(1024);

  const { sidebarOpen } = useSelector((state: RootState) => state.sidebar);
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);

  // Function to toggle the menu
  const toggleMenu = (id: string, link?: string) => {
    if (link) {
      navigate(link);
      if (W1024) dispatch(toggleSidebar());
    } else {
      setOpenMenuId(openMenuId === id ? null : id);
    }
  };

  const handleToggleSidebar = () => dispatch(toggleSidebar());

  const handleSetSidebar = (isOpen: boolean) => [dispatch(setSidebar(isOpen))];

  // Automatically open the parent menu if the current path matches any submenu
  useEffect(() => {
    sidebarMenu.forEach((item) => {
      if (item.submenu?.some((subItem) => subItem.link === location.pathname)) {
        setOpenMenuId(item.id); // Open the parent menu that contains the active submenu
      } else if (item.link === location.pathname) {
        setOpenMenuId(item.id); // Open the parent menu if it directly matches the route
      }
    });
  }, [location.pathname]);

  // Handle sidebar state based on window width
  useEffect(() => {
    if (W1024) {
      dispatch(setSidebar(false));
    } else {
      dispatch(setSidebar(true));
    }
  }, [W1024, dispatch]);

  return {
    toggleSidebar,
    toggleMenu,
    sidebarOpen,
    openMenuId,
    handleToggleSidebar,
    handleSetSidebar,
    W1024,
  };
};

export default useSidebar;
