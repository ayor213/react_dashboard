import { Box, IconButton, useTheme} from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens} from "../../theme";
import { InputBase } from "@mui/material/InputBase";
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';



const TopBar= () =>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    const colorMode = useContext(colorMode)
   return(
<Box display='flex' justifyContent='space-between' p={2}>
        {/* {searchbar} */}
        <Box display='flex'
         bacgroundColor={colors.primary[400]}
         borderRadius ='3px'
         >
            <InputBase sx={{ml:2,flex:1}}placeholder='Search'/>
            <IconButton  type = "button" sx ={{p:1}}>
                <SearchRoundedIcon />
            </IconButton>
         </Box>
        
         {/* {icons} */}
        <Box display = "flex">
         <IconButton onClick = {colorMode.toggleColorMode}>
            {theme.palette.mode === 'light' ?(
            <LightModeRoundedIcon />
            ):(
            <DarkModeRoundedIcon />
            )}
         </IconButton>
         <IconButton>
            <NotificationsRoundedIcon />
         </IconButton>
         <IconButton>
            <PersonOutlineRoundedIcon />
         </IconButton>
         <IconButton>
            <SettingsRoundedIcon />
         </IconButton>
        {/* <IconButton sx= {{display= 'flex'}}></IconButton> */}
        </Box>
</Box>
   )
}
export default TopBar;