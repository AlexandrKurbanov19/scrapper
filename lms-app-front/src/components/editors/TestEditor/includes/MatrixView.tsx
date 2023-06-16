import React, { FC, useMemo } from 'react';
import { Checkbox, Radio } from 'antd';

import styles from '../TestEditor.module.scss';
import { MatrixProps } from '../types';

interface MatrixViewProps extends MatrixProps {
  onClickItem: (rowId: string, columnId: string) => void,
  type?: 'radio' | 'checkbox',
}

const MatrixView: FC<MatrixViewProps> = (
  {
    columns = [],
    rows = [],
    rowToColumnSelected = {},
    onClickItem = () => {
    },
    type = 'radio',
    disabled = false,
    isChecking = false,
  },
) => {
  const isChecked = (rowId: string, columnId: string) => (
    rowToColumnSelected[rowId] === columnId
    || rowToColumnSelected[rowId]?.includes(columnId)
  );

  const disabledTextColor = isChecking ? 'black' : undefined;

  const matrixGridStyle = useMemo(() => ({
    gridTemplateColumns: `repeat(${(columns?.length ?? 0) + 1}, 1fr)`,
    gridTemplateRows: `repeat(${(rows?.length ?? 0) + 1}, 1fr)`,
  }), [columns?.length, rows?.length]);

  return (
    <div
      className={styles.matrixGrid}
      style={matrixGridStyle}
    >
      {columns?.map((column, columnIndex) => (
        <div
          key={column?.id}
          style={{
            gridRow: '1 / span 1',
            gridColumn: `${columnIndex + 2} / span 1`,
          }}
        >
          {column?.name}
        </div>
      ))}
      {rows?.map((row, rowIndex) => (
        <div
          key={row?.id}
          style={{
            gridRow: `${rowIndex + 2} / span 1`,
            gridColumn: '1 / span 1',
          }}
        >
          {row?.name}
        </div>
      ))}
      {rows?.map((row, rowIndex) => (
        columns?.map((column, columnIndex) => (
          <div
            key={`${column?.id}${row?.id}`}
            style={{
              gridRow: `${rowIndex + 2} / span 1`,
              gridColumn: `${columnIndex + 2} / span 1`,
            }}
          >
            {type === 'radio' ? (
              <Radio
                checked={isChecked(row?.id, column?.id)}
                onChange={() => onClickItem(row?.id, column?.id)}
                disabled={disabled}
                style={{ color: disabledTextColor }}
              />
            ) : (
              <Checkbox
                checked={isChecked(row?.id, column?.id)}
                onChange={() => onClickItem(row?.id, column?.id)}
                disabled={disabled}
                style={{ color: disabledTextColor }}
              />
            )}
          </div>
        ))
      ))}
    </div>
  );
};

export default MatrixView;
