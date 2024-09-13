export interface SortConfigType {
  sortBy: string;
  sortDirection: string;
}

export interface DataTableType extends SortType {
  data: any;
  handleOpenEditModal?: (id: string) => void;
  handleOpenViewModal?: (id: string) => void;
  handleOpenDeleteModal?: (id: string) => void;
  handleOpenBulkDeleteModal?: (ids: number[]) => void;
}

export interface SortType {
  handleSort?: (column: string) => void;
  sortConfig?: SortConfigType;
}
