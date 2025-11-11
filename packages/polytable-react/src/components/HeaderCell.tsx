import type { CellValue } from '@/types';

interface HeaderCellProps {
  value: CellValue;
}

export const HeaderCell = ({ value }: HeaderCellProps) => (
  <td className={`min-w-30 font-medium px-3 py-2 text-gray-800 select-none`}>
    {value}
  </td>
);
