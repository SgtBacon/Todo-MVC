import { Grid, Box, Typography, Button } from '@material-ui/core';
import React from 'react';
import { Background } from './Custom Components/customBackground';
import { GridColDef, GridRowData } from '@material-ui/data-grid';
import CustomDataGrid from './Custom Components/customDataGrid';

function App() {
  const [name, setName] = React.useState('');
  const [content, setContent] = React.useState('');
  const columns: GridColDef[] = [
    {
      field: 'delete',
      headerName: 'Delete',
      flex: 10,
      align: 'center',
      headerAlign: 'center',

      renderCell: (params) => {
        return (
          <Button color='primary' variant='contained'>
            <Typography variant='body1'>Delete</Typography>
          </Button>
        );
      },
    },
    {
      field: 'name',
      headerName: 'Name',
      flex: 10,
      align: 'left',
      headerAlign: 'center',
    },
    {
      field: 'content',
      headerName: 'Content',
      flex: 10,
      align: 'left',
      headerAlign: 'center',
    },
    {
      field: 'id',
      headerName: 'id',
      flex: 10,
      align: 'left',
      type: 'number',
      headerAlign: 'center',
    },
  ];
  const rows: GridRowData[] = [
    {
      name: 'bro',
      content: 'MUAHAHAHA',
      id: 1,
    },
    { name: 'bro', content: 'MUAHAHAHA', id: 2 },
  ];
  return (
    <Background>
      <Grid container justifyContent='center'>
        <Box display='flex'>
          <Typography variant='h4'>TODO MVC</Typography>
        </Box>
      </Grid>
      <CustomDataGrid rows={rows} columns={columns}></CustomDataGrid>
    </Background>
  );
}

export default App;
