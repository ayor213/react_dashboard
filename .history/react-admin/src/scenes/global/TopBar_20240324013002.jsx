import { Box, IconButton, TextField, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme"; // Ensure 'tokens' is correctly exported and used
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

const TopBar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode); // Ensure 'tokens' function is correctly defined and used
    const colorMode = useContext(ColorModeContext); // Fixed useContext usage

    return (
        <Box display='flex' justifyContent='space-between' p={2}>
            <Box display='flex'
                backgroundColor={colors.primary[400]} // Corrected property name
                borderRadius='3px'
            >
                <TextField id="outlined-search" label="Search field" type="search" />
                <IconButton type="button" sx={{ p: 1 }}>
                    <SearchRoundedIcon />
                </IconButton>
            </Box>

            <Box display="flex">
                <IconButton onClick={colorMode.toggleColorMode}> {/* Ensure toggleColorMode is defined in ColorModeContext */}
                    {theme.palette.mode === 'dark' ? (
                        <DarkModeRoundedIcon />
                    ) : (
                        <LightModeRoundedIcon />
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
            </Box>
        </Box>
    );
};

export default TopBar;
