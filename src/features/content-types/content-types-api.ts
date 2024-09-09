import { ContentTypes } from "@/constants/api-interface/content-types";
import { buildQueryURL, QueryParams } from "@/utils/get-query-params";
import { API } from "../API/API";

const contentTypeApi = API.injectEndpoints({
  endpoints: (builder) => ({
    /**
     * @Description read all content types
     * @uri /content-type-builder/content-types
     * @method GET
     */
    readContentTypes: builder.query<ContentTypes, QueryParams>({
      query: (queryParams: QueryParams) => {
        return buildQueryURL(
          `/content-type-builder/content-types`,
          queryParams
        );
      },
    }),
  }),
});

// Export hooks for usage in components
export const { useReadContentTypesQuery } = contentTypeApi;

// Export API endpoints
export const { endpoints: contentTypeApiEndpoints } = contentTypeApi;

// Export API
export default contentTypeApi;
