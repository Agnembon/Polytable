import type { CellValue, CellCoordinates } from "@/core/types"
import { Cell } from "@/components/Cell"
import type { SelectionRange } from "@/core/SelectionRange"
import type { Key } from "react";

interface BodyProps {
  key: Key;
  rows: CellValue[][]
  selectionRange: SelectionRange | null
  onMouseDown: (coordinates: CellCoordinates) => void
  onMouseEnter: (coordinates: CellCoordinates) => void
}

export const Body = ({ key, rows, selectionRange, onMouseDown, onMouseEnter }: BodyProps) => (
  <tbody key={`body-${key}`}>
    {rows.map((row, rowIndex) => (
      <tr key={`row-${key}-${rowIndex}`}>
        {row.map((value, columnIndex) => {
          const coordinates = { row: rowIndex, column: columnIndex }
          const isSelected = selectionRange ? selectionRange.contains(coordinates) : false

          return (
            <Cell
              key={`cell-${rowIndex}-${columnIndex}`}
              value={value}
              coordinates={coordinates}
              isSelected={isSelected}
              onMouseDown={onMouseDown}
              onMouseEnter={onMouseEnter}
            />
          )
        })}
      </tr>
    ))}
  </tbody>
);
