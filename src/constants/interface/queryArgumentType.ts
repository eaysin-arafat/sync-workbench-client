import { SortConfigType } from "./table-types";

export interface QueryArgumentsType<T> {
  currentPage?: number;
  itemsPerPage?: number;
  sortConfig?: SortConfigType;
  searchParams?: T;
}
