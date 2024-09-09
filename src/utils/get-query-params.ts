import qs from "qs";

export interface Filters {
  [key: string]: {
    $eq?: string;
    $ne?: string;
    $lt?: number;
    $lte?: number;
    $gt?: number;
    $gte?: number;
    $in?: string[];
    $nin?: string[];
    $contains?: string;
    $ncontains?: string;
  };
}

export interface Populate {
  [key: string]: {
    fields?: string[];
    populate?: Populate;
  };
}

interface Pagination {
  pageSize?: number;
  page?: number;
  start?: number;
  limit?: number;
  withCount?: boolean;
}

export interface QueryParams {
  sort?: string[];
  filters?: Filters;
  populate?: Populate;
  fields?: string[];
  pagination?: Pagination;
  publicationState?: string;
  locale?: string[];
}

/**
 * Builds a query string URL for Strapi API.
 * @param {string} endpoint - The endpoint path, e.g., '/api/books'.
 * @param {QueryParams} queryParams - The query parameters object.
 * @returns {string} - The full query string URL.
 */
export const buildQueryURL = (
  endpoint: string,
  queryParams: QueryParams
): string => {
  // Handle pagination validation logic
  const pagination = queryParams.pagination || {};

  // Ensure no mixing of page-based and offset-based pagination
  if (
    (pagination.page !== undefined || pagination.pageSize !== undefined) &&
    (pagination.start !== undefined || pagination.limit !== undefined)
  ) {
    throw new Error(
      "You cannot use both page-based and offset-based pagination at the same time."
    );
  }

  // Convert the query parameters to a query string using qs
  const queryString = qs.stringify(queryParams, {
    indices: false, // Do not use array indices in keys (e.g., `filters[0]`)
    addQueryPrefix: true, // Add '?' at the start of the query string
    arrayFormat: "brackets", // Ensure array parameters use brackets format
  });

  // Return the full URL (endpoint + query string)
  return `${endpoint}${queryString}`;
};
