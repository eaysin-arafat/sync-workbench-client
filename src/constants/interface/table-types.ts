import { EntityAttributes } from "../api-interface/root";

export interface SortConfigType {
  sortBy: string;
  sortDirection: string;
}

export interface DataTableType<T> extends SortType {
  data: EntityAttributes<T>[];
  handleEdit?: (id: string) => void;
  handleDelete?: (id: string) => void;
  handleView?: (id: string) => void;
  handleBulkDelete?: (() => Promise<void>) | undefined;
}

export interface SortType {
  handleSort?: (column: string) => void;
  sortConfig?: SortConfigType;
}
