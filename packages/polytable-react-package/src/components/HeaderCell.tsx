import type { CellValue } from "@/core/types";

interface HeaderCellProps {
  value: CellValue;
}

export const HeaderCell = ({ value }: HeaderCellProps) => (
  <th className="px-4 py-2 text-left text-gray-700 font-semibold select-nonewhitespace-nowrap">
    {value}
  </th>
);
