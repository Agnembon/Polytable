import type { CellValue, CellCoordinates } from "@/core/types"
import { Cell } from "@/components/Cell"
import type { SelectionRange } from "@/core/SelectionRange"

interface BodyProps {
  rows: CellValue[][]
  selectionRange: SelectionRange | null
  onMouseDown: (coordinates: CellCoordinates) => void
  onMouseEnter: (coordinates: CellCoordinates) => void
}

export const Body = ({ rows, selectionRange, onMouseDown, onMouseEnter }: BodyProps) => (
  <tbody>
    {rows.map((row, rowIndex) => (
      <tr>
        {row.map((value, columnIndex) => {
          const coordinates = { row: rowIndex, column: columnIndex }
          const isSelected = selectionRange ? selectionRange.contains(coordinates) : false

          return (
            <Cell
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
