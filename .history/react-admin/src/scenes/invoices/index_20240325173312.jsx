import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";

const Billing = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" , flex:.5},
    {field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
        field: "date",
        headerName: "Date",
        type: "datetime",
      },
      {
        field: "city",
        headerName: "City",
        flex: 1,
      },
      {
        field: "zipCode",
        headerName: "Zip Code",
        flex: 1,
      },
   
  ];

  return (
    <Box m="20px">
      <Header title="CONTACTS" subtitle="Contact List" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[100],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[200]} !important`,
          },
        }}
      >
        <DataGrid numberSelection rows={mockDataInvoices} 
        columns={columns} 
        components={{ Toolbar: GridToolbar }}/>
      </Box>
    </Box>
  );
};

export default Billing;