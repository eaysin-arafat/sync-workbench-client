import { Designation } from "@/constants/api-interface/designations";
import { RootResponse } from "@/constants/api-interface/root";
import { QueryParams } from "@/utils/get-query-params";
import { API } from "../API/API";

const designationsApi = API.injectEndpoints({
  endpoints: (builder) => ({
    /**
     * @description create Designation
     * @url /Designations
     * @method POST
     */
    createDesignations: builder.mutation({
      query: (body) => ({
        url: `/designations`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Designations"],
    }),

    /**
     * @description deleteDesignations
     * @url /Designations/:id
     * @method DELETE
     */
    deleteDesignations: builder.mutation({
      query: (id) => ({
        url: `/designations/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Designations"],
    }),

    /**
     * @description findDesignations
     * @url /Designations
     * @method GET
     */
    readDesignations: builder.query<RootResponse<Designation>, QueryParams>({
      query: () => ({
        url: `/designations`,
        method: "GET",
      }),
      providesTags: ["Designations"],
    }),

    /**
     * @description findOneDesignations
     * @url /Designations/:id
     * @method GET
     */
    readDesignationsById: builder.query({
      query: (id) => ({
        url: `/designations/${id}`,
        method: "GET",
      }),
      providesTags: ["Designations"],
    }),

    /**
     * @description updateDesignations
     * @url /Designations/:id
     * @method PUT
     */
    updateDesignations: builder.mutation({
      query: ({ id, body }) => ({
        url: `/designations/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Designations"],
    }),
  }),
});

export const {
  useCreateDesignationsMutation,
  useReadDesignationsByIdQuery,
  useReadDesignationsQuery,
  useDeleteDesignationsMutation,
  useUpdateDesignationsMutation,
} = designationsApi;

export const { endpoints: designationsApiEndpoints } = designationsApi;
export default designationsApi;
