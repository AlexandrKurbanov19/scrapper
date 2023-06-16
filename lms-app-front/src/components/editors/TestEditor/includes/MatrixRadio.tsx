import React, { FC, useCallback } from 'react';
import MatrixView from './MatrixView';
import { MatrixProps, RowToColumn, RowToColumnSingle } from '../types';

interface MatrixRadioProps extends MatrixProps {
  rowToColumnSelected: RowToColumnSingle,
  onChange: (rowToColumnSelected: RowToColumn) => void,
}

const MatrixRadio: FC<MatrixRadioProps> = (
  {
    columns = [],
    rows = [],
    rowToColumnSelected = {},
    onChange = () => {
    },
    disabled = false,
  },
) => {
  const onToggle = useCallback((rowId: string, columnId: string) => {
    const rowToColumnSelectedNew = { ...rowToColumnSelected };
    if (rowToColumnSelected[rowId] === columnId) {
      delete rowToColumnSelectedNew[rowId];
    } else {
      rowToColumnSelectedNew[rowId] = columnId;
    }
    onChange(rowToColumnSelectedNew);
  }, [rowToColumnSelected, onChange]);

  return (
    <MatrixView
      rows={rows}
      columns={columns}
      rowToColumnSelected={rowToColumnSelected}
      onClickItem={onToggle}
      disabled={disabled}
    />
  );
};

export default MatrixRadio;
