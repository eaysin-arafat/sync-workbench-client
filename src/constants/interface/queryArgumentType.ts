import { SortConfigType } from "./table-types";

export interface QueryArgumentsType {
  currentPage?: number;
  itemsPerPage?: number;
  sortConfig?: SortConfigType;
  searchParams?: { [string: string]: string };
}
