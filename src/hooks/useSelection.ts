import { useEffect, useRef, useState } from 'react';
import { SelectionRange } from '@/models/SelectionRange.ts';
import type { CellPosition } from '@/types';

export const useSelection = () => {
  const [selection, setSelection] = useState<SelectionRange | null>(null);
  const start = useRef<CellPosition | null>(null);
  const isSelecting = useRef(false);

  useEffect(() => {
    window.addEventListener('mouseup', handleMouseUp);

    return () => window.removeEventListener('mouseup', handleMouseUp);
  }, []);

  const handleMouseDown = (cell: CellPosition) => {
    start.current = cell;
    isSelecting.current = true;

    setSelection(new SelectionRange(cell, cell));
  };

  const handleMouseEnter = (cell: CellPosition) => {
    if (!isSelecting.current || !selection) return;

    if (selection.updateEnd(cell)) {
      setSelection(new SelectionRange(selection.start, selection.end));
    }
  };

  const handleMouseUp = () => {
    isSelecting.current = false;
    start.current = null;
  };

  return {
    selection,
    handleMouseDown,
    handleMouseEnter,
    handleMouseUp
  };
};
