import { Box } from "@mui/material";
import Header from "../../components/Header";
import Map from "../../components/Map";

const Map = () => {
  return (
    <Box m="20px">
      <Header title="Map" subtitle="Simple Map" />
      <Box height="75vh">
        <Map />
      </Box>
    </Box>
  );
};

export default Map;