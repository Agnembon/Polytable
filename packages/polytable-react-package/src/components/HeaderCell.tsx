import type { CellValue } from '@/core/types';
import type { Key } from 'react';

interface HeaderCellProps {
  key: Key;
  value: CellValue;
}

export const HeaderCell = ({ key, value }: HeaderCellProps) => (
  <td key={`header-cell-${key}`} className={`min-w-30 font-medium px-3 py-2 text-gray-800 select-none`}>
    {value}
  </td>
);
