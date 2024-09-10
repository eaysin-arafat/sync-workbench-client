import React from "react";
import { TbArrowsSort } from "react-icons/tb";
import Checkbox from "../form-elements/checkbox";

// Define types for the column and data props
export interface TableColumn {
  header: string;
  accessor: string;
  sortable?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render?: (item: any) => React.ReactNode;
  width?: string;
}

interface TableProps {
  columns: TableColumn[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[];
  actions?: (item: unknown) => React.ReactNode;
}

const Table: React.FC<TableProps> = ({ columns, data, actions }) => {
  return (
    <table className="w-full table-auto bg-bgColor">
      <thead>
        <tr className="bg-secondaryBg text-left">
          <th className="py-2.5 px-8 font-semibold text-textColor cursor-pointer text-sm rounded-md">
            <Checkbox />
          </th>
          {columns.map((column, index) => (
            <th
              key={index}
              className="py-2.5 px-4 font-semibold text-textColor cursor-pointer text-sm rounded-md"
              style={{
                minWidth: column?.width ? `${column?.width}px` : "200px",
              }}
            >
              <span className="flex items-center gap-2">
                {column.header}
                {column.sortable && <TbArrowsSort />}
              </span>
            </th>
          ))}
          {actions && (
            <th className="py-2.5 px-16 font-semibold text-textColor text-sm">
              Actions
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
                <Checkbox />
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
