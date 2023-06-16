import React, { FC, useCallback } from 'react';
import MatrixView from './MatrixView';
import { MatrixProps, RowToColumn, RowToColumnMultiple } from '../types';

interface MatrixCheckboxProps extends MatrixProps {
  rowToColumnSelected: RowToColumnMultiple,
  onChange: (rowToColumnSelected: RowToColumn) => void,
}

const MatrixCheckbox: FC<MatrixCheckboxProps> = (
  {
    columns = [],
    rows = [],
    rowToColumnSelected = {},
    onChange = () => {
    },
    disabled = false,
    isChecking = false,
  },
) => {
  const onToggle = useCallback((rowId: string, columnId: string) => {
    const rowToColumnSelectedNew = { ...rowToColumnSelected };
    let columnsIds = [...rowToColumnSelected[rowId] ?? []];
    if (columnsIds.includes(columnId)) {
      columnsIds = columnsIds.filter((id) => id !== columnId);
    } else {
      columnsIds.push(columnId);
    }
    rowToColumnSelectedNew[rowId] = columnsIds;
    onChange(rowToColumnSelectedNew);
  }, [rowToColumnSelected, onChange]);

  return (
    <MatrixView
      rows={rows}
      columns={columns}
      rowToColumnSelected={rowToColumnSelected}
      onClickItem={onToggle}
      disabled={disabled}
      type="checkbox"
      isChecking={isChecking}
    />
  );
};

export default MatrixCheckbox;
