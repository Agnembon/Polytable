import { useEffect, useRef, useState } from 'react';
import type { CellPosition, CellValue, TableData } from "../types";
import { SelectionRange } from "../models/SelectionRange.ts";

export const useSelection = (data?: TableData) => {
  const [selectionRange, setSelectionRange] = useState<SelectionRange | null>(null);
  const [selectedData, setSelectedData] = useState<CellValue[][]>([]);
  const isSelecting = useRef<boolean>(false);

  useEffect(() => {
    window.addEventListener('mouseup', handleMouseUp);

    return () => window.removeEventListener('mouseup', handleMouseUp);
  }, [selectionRange]);

  const handleMouseDown = (cell: CellPosition) => {
    isSelecting.current = true;
    setSelectionRange(new SelectionRange(cell, cell));
  };

  const handleMouseEnter = (cell: CellPosition) => {
    if (!isSelecting.current || !selectionRange) return;

    if (selectionRange.withEnd(cell)) {
      setSelectionRange(new SelectionRange(selectionRange.start, selectionRange.end));
    }
  };

  const handleMouseUp = () => {
    if (!isSelecting.current || !selectionRange || !data) return;

    isSelecting.current = false
    setSelectedData(selectionRange.getValues(data.content));
  };

  return { selectionRange, selectedData, handleMouseDown, handleMouseEnter };
};
