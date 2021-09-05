import {
  DataGrid,
  DataGridProps,
  GridColDef,
  GridRowData,
} from '@material-ui/data-grid';
import React, { useState } from 'react';

interface ICustomDataGridProps extends DataGridProps {
  rows: GridRowData[];
  columns: GridColDef[];
}
const CustomDataGrid: React.FC<ICustomDataGridProps> = (
  props
): React.ReactElement => {
  const { rows, columns } = props;
  const [pageSize, setPageSize] = useState<number>(5);

  return (
    <DataGrid
      rows={rows}
      columns={columns}
      autoHeight
      showCellRightBorder
      pageSize={pageSize}
      onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
      rowsPerPageOptions={[5, 10, 25, 100]}
    ></DataGrid>
  );
};
export default CustomDataGrid;
