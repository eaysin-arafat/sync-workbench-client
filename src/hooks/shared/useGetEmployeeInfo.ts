import { RootState } from "@/app/store";
import { useSelector } from "react-redux";

const useGetEmployeeInfo = () => {
  const employee = useSelector((state: RootState) => state.employee?.data);

  return employee;
};

export default useGetEmployeeInfo;
