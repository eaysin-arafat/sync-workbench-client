import { useState } from "react";

interface DataItem {
  id: number;
}

const useSelectIds = (data: DataItem[]) => {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const handleSelect = (id: number) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    if (selectedIds.length === data.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(data.map((item) => item.id));
    }
  };

  const handleUnselectAll = () => {
    setSelectedIds([]);
  };

  return { selectedIds, handleSelect, handleSelectAll, handleUnselectAll };
};

export default useSelectIds;
