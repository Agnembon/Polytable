import type { CellValue } from "@/types";
import { HeaderCell } from "@/components/HeaderCell.tsx";

interface HeaderProps {
  cells: CellValue[];
}

export const Header = ({ cells }: HeaderProps) => (
  <thead>
    <tr>
      {cells.map((value) => (
        <HeaderCell value={value} />
      ))}
    </tr>
  </thead>
);
