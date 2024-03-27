import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import { sampleData  } from "../data/filtered_data2.js";
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const BarChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const d3Container = useRef(null);

useEffect(() => {if (d3Container.current) {
    // Set the dimensions and margins of the graph
    const margin = { top: 20, right: 30, bottom: 40, left: 90 },
          width = 460 - margin.left - margin.right,
          height = 400 - margin.top - margin.bottom;

    // Append the svg object to the body of the page
    const svg = d3.select(d3Container.current)
                  .append("svg")
                  .attr("width", width + margin.left + margin.right)
                  .attr("height", height + margin.top + margin.bottom)
                  .append("g")
                  .attr("transform", `translate(${margin.left},${margin.top})`);

    // X axis
    const x = d3.scaleLinear()
                .domain([0, d3.max(sampleData, d => d.Value)])
                .range([0, width]);
    svg.append("g")
       .attr("transform", `translate(0,${height})`)
       .call(d3.axisBottom(x))
       .selectAll("text")
       .attr("transform", "translate(-10,0)rotate(-45)")
       .style("text-anchor", "end");

    // Y axis
    const y = d3.scaleBand()
                .range([0, height])
                .domain(sampleData.map(d => d.Category))
                .padding(.1);
    svg.append("g")
       .call(d3.axisLeft(y))

    //Bars
    svg.selectAll("myRect")
       .data(sampleData)
       .enter()
       .append("rect")
       .attr("x", x(0))
       .attr("y", d => y(d.Category))
       .attr("width", d => x(d.Value))
       .attr("height", y.bandwidth())
       .attr("fill", "#69b3a2")
  }
}, []);

return (
  <Box ref={d3Container} />
);
};

export default BarChart;