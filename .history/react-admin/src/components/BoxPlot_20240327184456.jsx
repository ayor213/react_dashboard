import { ResponsiveBoxPlot } from '@nivo/boxplot'
import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import { mockBoxData as data } from "../data/mockData";

const BoxPlot = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
  
  <ResponsiveBoxPlot
    data={data}
    theme={{
      // added
      axis: { 
        domain: {
          line: {
            stroke: colors.grey[100],
          },
        },
        legend: {
          text: {
            fill: colors.grey[100],
          },
        },
        ticks: {
          line: {
            stroke: colors.grey[100],
            strokeWidth: 1,
          },
          text: {
            fill: colors.grey[100],
          },
        },
      },
      legends:
      {
    
        text: {
          fill: colors.grey[100],
        },
      },
      tooltip: {
        container: {
          color: colors.primary[500],
        },
      },
    }}
    margin={{ top: 60, right: 140, bottom: 60, left: 60 }}
    minValue={0}
    maxValue={10}
    subGroupBy="subgroup"
    padding={0.12}
    enableGridX={isDashboard ? false : true}
    axisTop={ isDashboard ? undefined:{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: '',
        legendOffset: 36,
        truncateTickAt: 0
    }}
    axisRight={isDashboard ? undefined:{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: '',
        legendOffset: 0,
        truncateTickAt: 0
    }}
    axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'group',
        legendPosition: 'middle',
        legendOffset: 32,
        truncateTickAt: 0
    }}
    axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'value',
        legendPosition: 'middle',
        legendOffset: -40,
        truncateTickAt: 0
    }}
    colors={{ scheme: 'accent' }}
    borderRadius={7}
    borderWidth={2}
    borderColor={{
        from: 'color',
        modifiers: [
            [
                'darker',
                '0.2'
            ]
        ]
    }}
    medianWidth={2}
    medianColor={{
        from: 'color',
        modifiers: [
            [
                'darker',
                0.3
            ]
        ]
    }}
    whiskerEndSize={0.6}
    whiskerColor={{
        from: 'color',
        modifiers: [
            [
                'darker',
                0.3
            ]
        ]
    }}
    motionConfig="stiff"
    legends={[
        {
            anchor: 'right',
            direction: 'column',
            justify: false,
            translateX: 100,
            translateY: 0,
            itemWidth: 60,
            itemHeight: 20,
            itemsSpacing: 3,
            itemTextColor: '#999',
            itemDirection: 'left-to-right',
            symbolSize: 20,
            symbolShape: 'square',
            effects: [
                {
                    on: 'hover',
                    style: {
                        itemTextColor: '#000'
                    }
                }
            ]
        }
    ]}
/>);
};

export default BoxPlot;
