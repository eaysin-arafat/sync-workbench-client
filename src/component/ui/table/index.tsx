import { SortType } from "@/constants/interface/table-types";
import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbArrowsSort } from "react-icons/tb";
import Checkbox from "../form-elements/checkbox";
import Tooltip from "../tooltip";

// Define types for the column and data props
export interface TableColumn {
  header: string;
  accessor: string;
  sortable?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render?: (item: any) => React.ReactNode;
  width?: string;
}

interface TableProps extends SortType {
  columns: TableColumn[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[];
  actions?: (item: unknown) => React.ReactNode;
  isCheckbox?: boolean;
  hasBulkDelete?: boolean;
  handleSelect?: (id: number) => void;
  handleSelectAll?: () => void;
  handleUnselectAll?: () => void;
  selectedIds?: number[];
  handleOpenBulkDeleteModal?: () => void;
}

const Table = ({
  columns,
  data,
  actions,
  handleSort,
  sortConfig,
  hasBulkDelete = true,
  handleOpenBulkDeleteModal,
  selectedIds = [],
  handleSelect,
  handleSelectAll,
  handleUnselectAll,
  isCheckbox = true,
}: TableProps) => {
  const handleColumnSort = (column: string) => {
    if (handleSort) handleSort(column);
  };

  const handleSelectId = (selectId: number) => {
    if (handleSelect) handleSelect(selectId);
  };

  const isChecked = data?.length ? selectedIds?.length === data?.length : false;
  const indeterminate =
    selectedIds?.length > 0 && selectedIds?.length < data?.length;

  return (
    <table className="w-full table-auto bg-bgColor">
      <thead>
        <tr className="bg-secondaryBg text-left">
          {isCheckbox && (
            <th className="py-2.5 px-8 font-semibold text-textColor cursor-pointer text-sm rounded-md">
              <Checkbox
                checked={isChecked}
                indeterminate={indeterminate}
                onChange={indeterminate ? handleUnselectAll : handleSelectAll}
              />
            </th>
          )}
          {columns.map((column, index) => (
            <th
              key={index}
              className="py-2.5 px-4 font-semibold text-textColor cursor-pointer text-sm rounded-md"
              style={{
                minWidth: column?.width ? `${column?.width}px` : "200px",
              }}
              onClick={() => handleColumnSort(column?.accessor)}
            >
              <span className="flex items-center gap-2">
                {column?.header}
                {column?.sortable && (
                  <TbArrowsSort
                    className={
                      sortConfig?.sortBy === column?.accessor
                        ? sortConfig?.sortDirection === "asc"
                          ? "!rotate-180" // Add class to indicate sort direction
                          : ""
                        : ""
                    }
                  />
                )}
              </span>
            </th>
          ))}
          {actions && (
            <th className="py-2.5 px-16 font-semibold text-textColor text-sm flex items-center justify-center">
              {hasBulkDelete ? (
                <Tooltip label="Multiple Delete">
                  <button onClick={handleOpenBulkDeleteModal}>
                    <RiDeleteBin6Line />
                  </button>
                </Tooltip>
              ) : (
                "Actions"
              )}
            </th>
          )}
        </tr>
      </thead>
      <tbody>
        {data?.map((item, key) => (
          <tr
            key={key}
            className={`text-textColor ${
              data.length === key + 1
                ? "!border-none"
                : "border-b border-stroke"
            }`}
          >
            {actions && (
              <td className="px-8">
                <Checkbox
                  checked={selectedIds.includes(item.id)}
                  onChange={() => handleSelectId(item.id)}
                />
              </td>
            )}

            {columns.map((column, colIndex) => (
              <td key={colIndex} className={`py-2.5 px-4 text-sm`}>
                {column?.render
                  ? column?.render(item)
                  : item?.[column?.accessor] || ""}
              </td>
            ))}
            {actions && <td className="px-16">{actions(item?.id)}</td>}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
