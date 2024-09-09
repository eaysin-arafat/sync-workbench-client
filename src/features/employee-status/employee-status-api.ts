import { EmployeeStatus } from "@/constants/api-interface/employee-status";
import { RootResponse } from "@/constants/api-interface/root";
import { buildQueryURL, QueryParams } from "@/utils/get-query-params";
import { API } from "../API/API";

const employeeStatusApi = API.injectEndpoints({
  endpoints: (builder) => ({
    /**
     * @description create employee status
     * @uri /employee-statuses
     * @method POST
     */
    createEmployeeStatus: builder.mutation({
      query: (body) => ({
        url: `/employee-statuses`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["EmployeeStatus"],
    }),

    /**
     * @Description read all employee status
     * @uri /employee-statuses
     * @method GET
     */
    readEmployeeStatus: builder.query<
      RootResponse<EmployeeStatus>,
      QueryParams
    >({
      query: (queryParams: QueryParams) => {
        return buildQueryURL(`/employee-statuses`, queryParams);
      },
      providesTags: ["EmployeeStatus"],
    }),

    /**
     * @description read employee status by ID
     * @uri /employee-statuses/{id}
     * @method GET
     */
    readEmployeeStatusById: builder.query({
      query: (id: string) => `/employee-statuses/${id}`,
      providesTags: ["EmployeeStatus"],
    }),

    /**
     * @description update employee status
     * @uri /employee-statuses/{id}
     * @method PUT
     */
    updateEmployeeStatus: builder.mutation({
      query: ({ id, body }: { id: string; body: EmployeeStatus }) => ({
        url: `/employee-statuses/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["EmployeeStatus"],
    }),

    /**
     * @description delete employee status
     * @uri /employee-statuses/{id}
     * @method DELETE
     */
    deleteEmployeeStatus: builder.mutation({
      query: (id: string) => ({
        url: `/employee-statuses/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["EmployeeStatus"],
    }),
  }),
});

// Export hooks for usage in components
export const {
  useCreateEmployeeStatusMutation,
  useDeleteEmployeeStatusMutation,
  useReadEmployeeStatusByIdQuery,
  useReadEmployeeStatusQuery,
  useUpdateEmployeeStatusMutation,
} = employeeStatusApi;

// Export API endpoints
export const { endpoints: employeeStatusApiEndpoints } = employeeStatusApi;

// Export API
export default employeeStatusApi;
