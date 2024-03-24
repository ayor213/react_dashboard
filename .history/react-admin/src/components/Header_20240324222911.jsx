import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const Header = ({ title, subtitle}) => {
    const theme = useTheme();
  const colors = tokens(theme.palette.mode);
    return <Box mb= "30px">
        <Typography 
        variant= "h3"
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{mb: "5"}}
        >{title}</Typography>
        <Typography>{subtitle}</Typography>
    </Box>
}

export default Header;