import useAuthCheck from "@/hooks/auth/useAuthCheck";
import { getDashboardLink } from "@/routes/router-link";
import { Navigate, Outlet } from "react-router-dom";

const PublicGuard = () => {
  const { isAuthenticate } = useAuthCheck();

  return isAuthenticate ? <Navigate to={getDashboardLink()} /> : <Outlet />;
};

export default PublicGuard;