import {Cell} from './Cell/Cell.tsx';
import {useSelection} from '../hooks/useSelection.ts';
import type {CellValue, TableData} from '@/types';
import {HeaderCell} from './Cell/HeaderCell.tsx';

interface TableProps {
    data: TableData;
    onSelectionChange?: (selectedData: CellValue[][]) => void;
}

export const Table = ({data, onSelectionChange}: TableProps) => {
    const {selectionRange, handleMouseDown, handleMouseEnter} = useSelection(data, onSelectionChange);
    const hasContent = data.content && data.content.length > 0;

    return (
        <div className='border-collapse rounded-md'>
            {hasContent
                ? (
                    <table className='border-collapse rounded-md'>
                        <thead>
                        <tr key={'header-row'}>
                            {data.header.map((headerValue: CellValue, headerIndex: number) => (
                                <HeaderCell
                                    key={`header-${headerIndex}-${String(headerValue)}`}
                                    value={headerValue}
                                />
                            ))}
                        </tr>
                        </thead>
                        <tbody>
                        {data.content.map((rowData: CellValue[], rowIndex: number) => {
                            const rowKey = `row-${rowIndex}-${rowData}`;

                            return (
                                <tr key={rowKey}>
                                    {rowData.map((columnValue: CellValue, columnIndex: number) => (
                                        <Cell
                                            key={`${rowKey}-col-${columnIndex}`}
                                            value={columnValue}
                                            position={{row: rowIndex, column: columnIndex}}
                                            isSelected={selectionRange?.contains({
                                                row: rowIndex,
                                                column: columnIndex
                                            }) ?? false}
                                            onMouseDown={handleMouseDown}
                                            onMouseEnter={handleMouseEnter}
                                        />
                                    ))}
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                )
                : <div className='text-gray-500 text-center p-4 italic'>No hay datos disponibles</div>}
        </div>
    );
};
