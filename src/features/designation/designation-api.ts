import { Designation } from "@/constants/api-interface/designations";
import {
  RootResponse,
  SingleEntityAttributes,
} from "@/constants/api-interface/root";
import { buildQueryURL, QueryParams } from "@/utils/get-query-params";
import { API } from "../API/API";

const designationsApi = API.injectEndpoints({
  endpoints: (builder) => ({
    /**
     * @description create Designation
     * @url /designations
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
     * @url /designations/:id
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
     * @url /designations
     * @method GET
     */
    readDesignations: builder.query<RootResponse<Designation>, QueryParams>({
      query: (queryParams) => ({
        url: buildQueryURL(`/designations`, queryParams),
        method: "GET",
      }),
      providesTags: ["Designations"],
    }),

    /**
     * @description findOneDesignations
     * @url /designations/:id
     * @method GET
     */
    readDesignationsById: builder.query<
      SingleEntityAttributes<Designation>,
      { id: string; queryParams?: QueryParams }
    >({
      query: ({ id, queryParams }) => ({
        // Use buildQueryURL to dynamically add query params to the URL
        url: buildQueryURL(`/designations`, queryParams, id),
        method: "GET",
      }),
      providesTags: ["Designations"],
    }),

    /**
     * @description updateDesignations
     * @url /designations/:id
     * @method PUT
     */
    updateDesignations: builder.mutation({
      query: ({ id, body }) => {
        return {
          url: `/designations/${id}`,
          method: "PUT",
          body,
        };
      },
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
