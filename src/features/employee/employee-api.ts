import { Employee } from "@/constants/api-interface/employee";
import {
  ReadDataByIdQueryType,
  RootResponse,
  SingleEntityAttributes,
} from "@/constants/api-interface/root";
import { buildQueryURL, QueryParams } from "@/utils/get-query-params";
import { API } from "../API/API";

const employeeApi = API.injectEndpoints({
  endpoints: (builder) => ({
    /**
     * @description create employee
     * @url /employees
     * @method POST
     */
    createEmployee: builder.mutation({
      query: (body) => ({
        url: `/employees`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Employee"],
    }),

    /**
     * @description read all employees
     * @url /employees
     * @method GET
     */
    readEmployees: builder.query<RootResponse<Employee>, QueryParams>({
      query: (queryParams: QueryParams) => {
        return buildQueryURL(`/employees`, queryParams);
      },
      providesTags: ["Employee"],
    }),

    /**
     * @description read employee by ID
     * @url /employees/{id}
     * @method GET
     */
    readEmployeeById: builder.query<
      SingleEntityAttributes<Employee>,
      ReadDataByIdQueryType
    >({
      query: ({ id, queryParams }) =>
        buildQueryURL(`/employees`, queryParams, id),
      providesTags: ["Employee"],
    }),

    /**
     * @description update employee by ID
     * @url /employees/{id}
     * @method PUT
     */
    updateEmployee: builder.mutation({
      query: ({ id, body }) => ({
        url: `/employees/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Employee"],
    }),

    /**
     * @description delete employee by ID
     * @url /employees/{id}
     * @method DELETE
     */
    deleteEmployee: builder.mutation({
      query: (id) => ({
        url: `/employees/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Employee"],
    }),
  }),
});

// Export hooks for usage in components
export const {
  useCreateEmployeeMutation,
  useReadEmployeesQuery,
  useReadEmployeeByIdQuery,
  useUpdateEmployeeMutation,
  useDeleteEmployeeMutation,
} = employeeApi;

// Export API endpoints
export const { endpoints: employeeApiEndpoints } = employeeApi;

// Export API
export default employeeApi;
