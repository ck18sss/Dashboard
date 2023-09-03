// Data.jsx
'use client'
import { DataGrid } from "@mui/x-data-grid"; 
import LinearProgress from "@mui/material/LinearProgress";
import { useDemoData } from "@mui/x-data-grid-generator";
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const Data = () => {

  const { data } = useDemoData({
    dataSet: "Commodity", 
    rowLength: 500,
    maxColumns: 15
  });

  return (
    <ThemeProvider theme={darkTheme}>
    
      <h1>Data</h1>

      <p>Data description...</p>

      <div style={{ height: "900px", width: "100%" }}>

        <DataGrid
          slots={{
            loadingOverlay: LinearProgress  
          }}
          loading={!data}
          {...data}
          sx={{
            '& .MuiDataGrid-root': {
              bgcolor: 'background.default',
              color: 'text.primary'
            }
          }}
        />

      </div>

    </ThemeProvider>
  );

}

export default Data;