/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
 import { DataGrid,GridToolbar } from '@mui/x-data-grid';


const handleCellClick = (param, event) => {
  event.stopPropagation();
};

const handleRowClick = (param, event) => {
  event.stopPropagation();
};
const DataTable = (props) => {
  const [tableData, setTableData] = useState([]);
  const { endpoint, columns } = props;
  useEffect(() => {
      fetch(endpoint)
          .then((data) => data.json())
          .then((data) => setTableData(data));

  },[endpoint]);
  return (
    <div style={{ height: 700, width: '100%' }}>
     <DataGrid
        rows={tableData}
        columns={columns}
        checkboxSelection
        onCellClick={handleCellClick}
        onRowClick={handleRowClick}
        components={{
          Toolbar: GridToolbar,
        }}
    />
    </div>
  );
};

export default DataTable;
