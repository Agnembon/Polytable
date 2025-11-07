import type { CellValue, CellCoordinates } from "@/types"
import { Cell } from "@/components/Cell"
import type { SelectionRange } from "@/models/SelectionRange"

interface BodyProps {
  content: CellValue[][]
  selectionRange: SelectionRange | null
  onMouseDown: (coordinates: CellCoordinates) => void
  onMouseEnter: (coordinates: CellCoordinates) => void
}

export const Body = ({ content, selectionRange, onMouseDown, onMouseEnter }: BodyProps) => (
  <tbody>
    {content.map((row, rowIndex) => (
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
