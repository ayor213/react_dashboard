import { Box } from "@mui/material";
import Header from "../../components/Header";
import BoxPlot from "../../components/BoxPlot";

const BoxPlot = () => {
  return (
    <Box m="20px">
      <Header title="Box Chart" subtitle="Simple Box Chart" />
      <Box height="75vh">
        <BoxPlot />
      </Box>
    </Box>
  );
};

export default BoxPlot;