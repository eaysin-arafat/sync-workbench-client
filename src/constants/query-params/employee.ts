import { QueryParams } from "@/utils/get-query-params";
import { QueryArgumentsType } from "../interface/queryArgumentType";

// Define the queryParams with pagination and other parameters
export const readEmployeeQueryParams = ({
  currentPage,
  itemsPerPage,
}: QueryArgumentsType): QueryParams => {
  return {
    sort: ["date_of_hire:asc"],
    pagination: {
      page: currentPage,
      pageSize: itemsPerPage,
    },
    populate: {
      user_info: {
        fields: ["username", "first_name", "last_name", "email"],
        populate: {
          avatar: {
            fields: ["url"],
          },
          role: {
            fields: ["name"],
          },
          department: {
            fields: ["name"],
          },
        },
      },
      reporting_manager: {
        populate: {
          user_info: {
            fields: ["username"],
          },
        },
      },
      reporting_employees: {
        populate: {
          user_info: {
            fields: ["username"],
          },
        },
      },
      designation: {
        fields: ["name"],
      },
      employee_status: {
        fields: ["name"],
      },
      employment_status: {
        fields: ["name"],
      },
      employee_of_departments: {
        fields: ["name"],
      },
    },
  };
};

export const readEmployeeByIdQueryParams = {
  populate: {
    user_info: {
      fields: ["username", "email"],
      populate: {
        avatar: {
          fields: ["url"],
        },
        role: {
          fields: ["name"],
        },
        department: {
          fields: ["name"],
        },
      },
    },
    reporting_manager: {
      populate: {
        user_info: {
          fields: ["username"],
        },
      },
    },
    reporting_employees: {
      populate: {
        user_info: {
          fields: ["username"],
        },
      },
    },
    designation: {
      fields: ["name"],
    },
    employee_status: {
      fields: ["name"],
    },
    employment_status: {
      fields: ["name"],
    },
    employee_of_departments: {
      fields: ["name"],
    },
  },
};
