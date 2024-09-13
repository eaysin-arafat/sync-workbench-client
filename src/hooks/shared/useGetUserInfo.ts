import { RootState } from "@/app/store";
import { useSelector } from "react-redux";

const useGetUserInfo = () => {
  const user = useSelector((state: RootState) => state.auth?.user);

  return {
    userId: user?.id,
    username: user?.username,
    email: user?.email,
    first_name: user?.first_name,
    last_name: user?.last_name,
    name: `${user?.first_name} ${user?.last_name}`,
    address: user?.address,
    state: user?.state,
    city: user?.city,
    country: user?.country,
    date_of_birth: user?.date_of_birth,
    phone: user?.phone,
    zip_code: user?.zip_code,
    isEmployee: user?.is_employee,
  };
};
export default useGetUserInfo;
