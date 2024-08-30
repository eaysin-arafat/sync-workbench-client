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
  const queryString = qs.stringify(queryParams, {
    indices: true,
    addQueryPrefix: true,
    arrayFormat: "brackets",
  });

  return `${endpoint}${queryString}`;
};

// http://localhost:1337/api/employees?sort=date_of_hire%3Aasc&populate%5Buser_info%5D%5Bpopulate%5D%5Bavatar%5D=%7B%7D&populate%5Buser_info%5D%5Bfields%5D%5B%5D=username

// http://localhost:1337/api/employees?sort=date_of_hire%3Aasc&populate%5Buser_info%5D%5Bpopulate%5D%5Bavatar%5D=%7B%7D

// http://localhost:1337/api/employees?sort%5B%5D=date_of_hire%3Aasc&populate%5Buser_info%5D%5Bfields%5D%5B%5D=username
