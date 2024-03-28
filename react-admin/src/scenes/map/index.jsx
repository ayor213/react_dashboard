import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import MapChart from "../../components/Map";
import { tokens } from "../../theme";

const Map = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="Map" subtitle="Simple Map" />
      <Box  
      height="75vh"
      border={`1px solid ${colors.grey[100]}`}
      borderRadius="4px">
        <MapChart />
      </Box>
    </Box>
  );
};

export default Map;