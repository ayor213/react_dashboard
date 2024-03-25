import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsRoundedIcon from '@mui/icons-material/AdminPanelSettingsRounded';
import LockOpenRoundedIcon from '@mui/icons-material/LockOpenRounded';
import SecurityRoundedIcon from '@mui/icons-material/SecurityRounded';
import Header from "../../components/Header";
import { idID } from "@mui/material/locale";
import { color } from "@mui/system";

const Team= () =>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
        {field: "id", headerName:"ID"},
        {field: "name",
         headerName:"Name",
         flex :1,
        cellClassName: "name-column--cell",
        },
        {field: "age",
          headerName:"Age",
          type:'number',
          headerAlign:"left",
          align:"left",
        },
          {field: "phone",
          headerName:"Phone Number",
          type:'number',
          flex:1,
          },
        {field: "email",
          headerName:"Email",
          flex:1,
        },
        {field: "access",
        headerName:"Access Group",
        flex:1,
        renderCell: ({row:{acces}}) => {
            return {
            <Box
                width:"60%"
                m="0 auto"
                p="5px"
                diplay="flex"
                justifyContent="center"
                backgroundCOlor={
                    access === "admin"
                        ?colors.greenAccent[600]
                        :colors.blueAccent[100]
                }
                borderRadius="4px"
            >
                {access === "admin" && AdminPanelSettingsRoundedIcon />}
                {access === "manager" && SecurityRoundedIcon />}
                {access === "user" && LockOpenRoundedIcon />}

                <Typography>

                </Typography>
            </Box>
            }
        }
      },
    ]
    return <Box m= "20px">
    <Header title = "Team" subtitle="Manage Your Team" />
    <Box display="flex"
    justifyContent= "space-between"
    alignItems="center">
        <DataGrid 
        rows={mockDataTeam}
        columns={}
        />
    </Box>

   </Box>
    }

export default Team;