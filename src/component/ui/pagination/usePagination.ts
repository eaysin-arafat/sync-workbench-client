import { useState } from "react";

interface PaginationState {
  currentPage: number;
  itemsPerPage: number;
}

interface UsePagination {
  pagination: PaginationState;
  setCurrentPage: (page: number) => void;
  setItemsPerPage: (size: number) => void;
  resetPagination: () => void;
  handlePageChange: (pageNumber: number, pageSize: number) => void;
}

/**
 * Custom hook to manage pagination state and logic.
 * @param initialPage - Initial page number (default is 1).
 * @param initialPageSize - Initial items per page (default is 10).
 * @returns Pagination state and handlers.
 */
const usePagination = (
  initialPage: number = 1,
  initialPageSize: number = 10
): UsePagination => {
  const [currentPage, setCurrentPage] = useState<number>(initialPage);
  const [itemsPerPage, setItemsPerPage] = useState<number>(initialPageSize);

  // Reset pagination to initial values
  const resetPagination = () => {
    setCurrentPage(initialPage);
    setItemsPerPage(initialPageSize);
  };

  // Handle pagination page and size changes
  const handlePageChange = (pageNumber: number, pageSize: number) => {
    setCurrentPage(pageNumber);
    setItemsPerPage(pageSize);
  };

  return {
    pagination: { currentPage, itemsPerPage },
    setCurrentPage,
    setItemsPerPage,
    resetPagination,
    handlePageChange,
  };
};

export default usePagination;
