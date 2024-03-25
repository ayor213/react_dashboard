import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsRoundedIcon from '@mui/icons-material/AdminPanelSettingsRounded';
import LockOpenRoundedIcon from '@mui/icons-material/LockOpenRounded';
import SecurityRoundedIcon from '@mui/icons-material/SecurityRounded';
import Header from "../../components/Header";

const Team= () =>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
}
export default Team;