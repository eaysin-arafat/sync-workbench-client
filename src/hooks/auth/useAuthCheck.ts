import { RootState } from "@/app/store";
import { useReadUserQuery } from "@/features/auth/auth-api";
import { logout, setToken } from "@/features/auth/auth-slice";
import { useReadEmployeeByUserIdQuery } from "@/features/employee/employee-api";
import { removeEmployee } from "@/features/employee/employee-slice";
import { cookieManager } from "@/utils/cookie-manager";
import { QueryParams } from "@/utils/get-query-params";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useAuthCheck = () => {
  const dispatch = useDispatch();
  const authInfo = useSelector((state: RootState) => state.auth);
  const [isAuthChecking, setIsAuthChecking] = React.useState(true);

  const jwtToken = cookieManager.getCookie("jwtToken") || "";
  if (jwtToken && !authInfo?.jwtToken) dispatch(setToken(jwtToken));

  const queryParams: QueryParams = {
    populate: {
      role: {
        fields: ["*"],
      },
      avatar: {
        fields: ["*"],
      },
      skills: {
        fields: ["*"],
      },
      certification: {
        fields: ["*"],
      },
      work_experiences: {
        fields: ["*"],
      },
    },
  };

  const { data, isLoading, isError, status } = useReadUserQuery(queryParams, {
    skip: !jwtToken,
  });

  // Query to refetch employee by userId
  const { refetch: refetchEmployee } = useReadEmployeeByUserIdQuery(
    { userId: String(data?.id) },
    { skip: !data?.id }
  );

  useEffect(() => {
    if (!jwtToken && (isError || !data)) {
      dispatch(logout());
      dispatch(removeEmployee());
    }

    // If user data is available and fully loaded, refetch employee details
    if (data?.id) {
      refetchEmployee();
    }

    if (!isLoading && status !== "pending") {
      setIsAuthChecking(false);
    }
  }, [jwtToken, isLoading, isError, data]);

  return { isAuthChecking };
};

export default useAuthCheck;
