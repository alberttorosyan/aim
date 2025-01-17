// @ts-nocheck
/* eslint-disable react/prop-types */

import React from 'react';

import { renderElement } from './utils';

/**
 * HeaderRow component for BaseTable
 */
const TableHeaderRow = ({
  className,
  style,
  columns,
  headerIndex,
  cellRenderer,
  headerRenderer,
  expandColumnKey,
  expandIcon: ExpandIcon,
  ...rest
}) => {
  let cells = columns.map((column, columnIndex) =>
    cellRenderer({
      columns,
      column,
      columnIndex,
      headerIndex,
      expandIcon: column.key === expandColumnKey && <ExpandIcon />,
    }),
  );

  if (headerRenderer) {
    cells = renderElement(headerRenderer, { cells, columns, headerIndex });
  }

  return (
    <div {...rest} className={className} style={style}>
      {cells}
    </div>
  );
};

export default TableHeaderRow;
