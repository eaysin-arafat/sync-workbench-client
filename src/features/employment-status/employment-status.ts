import { EmploymentStatus } from "@/constants/api-interface/employment-status";
import { RootResponse } from "@/constants/api-interface/root";
import { buildQueryURL, QueryParams } from "@/utils/get-query-params";
import { API } from "../API/API";

const employmentStatusApi = API.injectEndpoints({
  endpoints: (builder) => ({
    /**
     * @description create employment status
     * @uri /employment-statuses
     * @method POST
     */
    createEmploymentStatus: builder.mutation({
      query: (body) => ({
        url: `/employment-statuses`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["EmploymentStatus"],
    }),

    /**
     * @Description read all employment status
     * @uri /employment-statuses
     * @method GET
     */
    readEmploymentStatus: builder.query<
      RootResponse<EmploymentStatus>,
      QueryParams
    >({
      query: (queryParams: QueryParams) => {
        return buildQueryURL(`/employment-statuses`, queryParams);
      },
      providesTags: ["EmploymentStatus"],
    }),

    /**
     * @description read employment status by ID
     * @uri /employment-statuses/{id}
     * @method GET
     */
    readEmploymentStatusById: builder.query({
      query: (id: string) => `/employment-statuses/${id}`,
      providesTags: ["EmploymentStatus"],
    }),

    /**
     * @description update employment status
     * @uri /employment-statuses/{id}
     * @method PUT
     */
    updateEmploymentStatus: builder.mutation({
      query: ({ id, body }: { id: string; body: EmploymentStatus }) => ({
        url: `/employment-statuses/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["EmploymentStatus"],
    }),

    /**
     * @description delete employment status
     * @uri /employment-statuses/{id}
     * @method DELETE
     */
    deleteEmploymentStatus: builder.mutation({
      query: (id: string) => ({
        url: `/employment-statuses/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["EmploymentStatus"],
    }),
  }),
});

// Export hooks for usage in components
export const {
  useCreateEmploymentStatusMutation,
  useDeleteEmploymentStatusMutation,
  useReadEmploymentStatusByIdQuery,
  useReadEmploymentStatusQuery,
  useUpdateEmploymentStatusMutation,
} = employmentStatusApi;

// Export API endpoints
export const { endpoints: employmentStatusApiEndpoints } = employmentStatusApi;

// Export API
export default employmentStatusApi;
