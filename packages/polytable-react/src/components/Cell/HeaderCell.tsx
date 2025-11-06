import type { CellValue } from '@/types';

interface HeaderCellProps {
  value: CellValue;
}

export const HeaderCell = ({ value }: HeaderCellProps) => (
  <td className={`w-30 h-8 border border-gray-300 text-center select-none font-bold bg-gray-100 text-gray-800`}>
    {value}
  </td>
);
