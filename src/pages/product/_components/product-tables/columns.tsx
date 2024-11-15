import { Product } from "@/constants/data";
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "photo_url",
    header: "IMAGE",
    cell: ({ row }) => {
      return (
        <div className="relative aspect-square flex items-center">
          <img
            src={row.getValue("photo_url")}
            alt={row.getValue("name")}
            className="rounded-lg h-10 w-10"
          />
        </div>
      );
    },
  },
  {
    accessorKey: "name",
    header: "NAME",
  },
  {
    accessorKey: "category",
    header: "CATEGORY",
  },
  {
    accessorKey: "price",
    header: "PRICE",
  },
  {
    accessorKey: "description",
    header: "DESCRIPTION",
  },

  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
