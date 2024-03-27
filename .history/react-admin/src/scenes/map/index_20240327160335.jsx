import { Box } from "@mui/material";
import Header from "../../components/Header";
import MapChart from "../../components/Map";

const MapChart = () => {
  return (
    <Box m="20px">
      <Header title="Map" subtitle="Simple Map" />
      <Box height="75vh">
        <MapChart />
      </Box>
    </Box>
  );
};

export default MapChart;