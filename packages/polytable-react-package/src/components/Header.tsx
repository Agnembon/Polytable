import type { CellValue } from "@/core/types";
import { HeaderCell } from "@/components/HeaderCell";

interface HeaderProps {
  cells: CellValue[];
}

export const Header = ({ cells }: HeaderProps) => (
  <thead className="bg-gray-50 border-b border-gray-200">
    <tr>
      {cells.map((value, index) => (
        <HeaderCell key={index} value={value} />
      ))}
    </tr>
  </thead>
);
