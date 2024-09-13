import { DepartmentSearchParams } from "@/pages/department/components/filter";
import { Filters, QueryParams } from "@/utils/get-query-params";
import { QueryArgumentsType } from "../interface/queryArgumentType";

export const readDepartmentQueryParams = ({
  currentPage,
  itemsPerPage,
  searchParams,
  sortConfig,
}: QueryArgumentsType<DepartmentSearchParams>) => {
  return {
    sort: [`${sortConfig?.sortBy}:${sortConfig?.sortDirection}`],
    filters: {
      id: searchParams?.departmentId
        ? { $eq: searchParams?.departmentId }
        : undefined,
      name: searchParams?.departmentName
        ? { $contains: searchParams?.departmentName }
        : undefined,
    } as Filters,
    pagination: {
      page: currentPage,
      pageSize: itemsPerPage,
    },
    populate: {
      employees: {
        populate: {
          user_info: {
            fields: ["username", "first_name", "last_name"],
            populate: {
              avatar: {
                fields: ["url"],
              },
            },
          },
        },
      },
      manager: {
        populate: {
          user_info: {
            fields: ["username", "first_name", "last_name"],
            populate: {
              avatar: {
                fields: ["url"],
              },
            },
          },
        },
      },
    },
  };
};

export const readEmployeeQueryParams: QueryParams = {
  sort: ["date_of_hire:asc"],
  populate: {
    user_info: {
      fields: ["username"],
      populate: {
        avatar: {
          fields: ["url"],
        },
      },
    },
  },
};

export const readDepartmentByIdQueryParams: QueryParams = {
  sort: ["name:asc"],
  populate: {
    employees: {
      populate: {
        user_info: {
          fields: ["username", "first_name", "last_name"],
          populate: {
            avatar: {
              fields: ["url"],
            },
          },
        },
      },
    },
    manager: {
      populate: {
        user_info: {
          fields: ["username", "first_name", "last_name"],
          populate: {
            avatar: {
              fields: ["url"],
            },
          },
        },
      },
    },
  },
};
