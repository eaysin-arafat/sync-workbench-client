import { DashboardResponse } from "@/constants/api-interface/dashboard";
import { buildQueryURL, QueryParams } from "@/utils/get-query-params";
import { API } from "../API/API";

const dashboardApi = API.injectEndpoints({
  endpoints: (builder) => ({
    /**
     * @Description read all dashboard
     * @uri /dashboard
     * @method GET
     */
    readDashboard: builder.query<DashboardResponse, QueryParams>({
      query: (queryParams: QueryParams) => {
        return buildQueryURL(`/dashboard`, queryParams);
      },
      providesTags: ["Dashboard"],
    }),
  }),
});

// Export hooks for usage in components
export const { useReadDashboardQuery } = dashboardApi;

// Export API endpoints
export const { endpoints: dashboardApiEndpoints } = dashboardApi;

// Export API
export default dashboardApi;
