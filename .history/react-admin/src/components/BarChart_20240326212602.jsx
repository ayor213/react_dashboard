import { useTheme } from "@mui/material";
import { Box } from "@mui/material";
import { tokens } from "../theme";
import { data  } from "../data/filtered_data2.js";
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const BarChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  //const initialData = data;
  const colors = tokens(theme.palette.mode);
  const d3Container = useRef(null);

useEffect(() => {if (d3Container.current) {
    if (d3Container.current) {
        // Clear the container first
        d3.select(d3Container.current).selectAll("*").remove();
    
        const margin = { top: 20, right: 30, bottom: 40, left: 90 },
              width = 1100 - margin.left - margin.right,
              height = 600 - margin.top - margin.bottom;
    
        // Create or select SVG
        let svg = d3.select(d3Container.current).select("svg");
        if (svg.empty()) {
          svg = d3.select(d3Container.current)
                  .append("svg")
                  .attr("width", width + margin.left + margin.right)
                  .attr("height", height + margin.top + margin.bottom)
                  .append("g")
                  .attr("transform",
                        "translate(" + margin.left + "," + margin.top + ")");
        } else {
          svg.attr("width", width + margin.left + margin.right)
             .attr("height", height + margin.top + margin.bottom);}

        // Process data to calculate the sum of total admissions for each organization
        const organizations = d3.rollup(data, v => d3.sum(v, d => d.TotalAdmissions), d => d.OrgCode);
        const organizationData = Array.from(organizations, ([key, value]) => ({ orgCode: key, admissions: value }));
    
        // Sort data
        organizationData.sort((a, b) => b.admissions - a.admissions);
    
        // Keep only the top 10 entries
        const top10Organizations = organizationData.slice(0, 10);
        //console.log(top10Organizations)
        
        // Define scales
        const xScale = d3.scaleBand()
            .domain(top10Organizations.map(d => d.orgCode))
            .range([70, w - 100])
            .padding(0.1);
    
        const yScale = d3.scaleLinear()
            .range([h, 0]);
    
        // Add x-axis
        const xAxis = svg.append('g')
            .attr("class", "x-axis")
            .attr("transform", `translate(80,${h + 10})`)
            .call(d3.axisBottom(xScale))
            .style("text-anchor", "end");
    
        svg.append("text")
            .text("OrgCodes")
            .attr("x", h / 2 - 10)
          //  .attr("y", 60)
            .attr('transform', 'translate(300,800)')
            .style("fill", "blue")
            .attr("font-size", '2rem')
            .attr("text-anchor", "middle");
    
        // Add y-axis
        const yAxis = svg.append("g")
            .attr("class", "y-axis")
            .attr("transform", `translate(139,10)`)
            .call(d3.axisLeft(yScale));
    
        yAxis.append("text")
            .text("Total Admissions")
            .attr("y", h / 2 - 10)
            .attr("transform", "translate(-470,350) rotate(270)")
            .style("fill", "blue")
            .attr("font-size", '2rem')
            .attr("text-anchor", "middle");
    
        // Define event listener for dropdown change
        const dropdown = d3.select(d3Container.current)
            .append('select')
            .on('change', update);
    
        // Extract unique years from the "Period" field
        const years = Array.from(new Set(data.map(d => d.Period.split('/')[2])));
        dropdown.selectAll("button")
            .data(years)
            .enter()
            .append("option")
            .attr("value", d => d)
            .attr('position', 'absolute')
            .text(d => d);
    
        const admissionsByYearAndOrg = {}; // Constant to hold admissions data by year and organization code
    
        // Iterate through the dataset to aggregate admissions by year and organization code
        data.forEach(d => {
            const year = d.Period.split('/')[2]; // Extract the year from the Period field
            const orgCode = d.OrgCode; // Get the organization code
            const admissions = d.TotalAdmissions; // Get the total admissions
    
            // Check if the year exists in the admissionsByYearAndOrg object
            if (!admissionsByYearAndOrg[year]) {
                admissionsByYearAndOrg[year] = {}; // If not, create a new object for the year
            }
    
            // Check if the organization code exists for the year
            if (!admissionsByYearAndOrg[year][orgCode]) {
                admissionsByYearAndOrg[year][orgCode] = 0; // If not, initialize admissions count to 0
            }
    
            // Add the admissions count for the organization code and year
            admissionsByYearAndOrg[year][orgCode] += admissions;
        });
    
        // Initial chart rendering with all data
        update();
    
        /***************************
     * tooltoip
     * 
     * 
     ****************************/
    // Define tooltip functions
    const ltip = d3.select(d3Container.current)
            .append("div")
            .style("opacity", 0)
            .classed("tooltip", true)
            .style("background-color", "black")
            .style("border-radius", "5px")
            .style("padding", "10px")
            .style("color", `${colors.primary[400]} !important`)
            .style('position', 'absolute')
            ;
        
    ;
     
        // Function to update chart based on selected year
        function update() {
    
    
        const selectedYear = dropdown.property('value');
    
        // Filter data based on selected year
        const yearData = Object.entries(admissionsByYearAndOrg[selectedYear]).map(([orgCode, admissions]) => ({ orgCode, admissions }));
          // Sort data
          yearData.sort((a, b) => b.admissions - a.admissions);
        const top10 = yearData.slice(0, 10)
        // Update scales domain
    
        xScale.domain(top10.map(d => d.orgCode));
        xAxis.transition().duration(500).call(d3.axisBottom(xScale));
    
        yScale.domain([0, d3.max(top10, d => d.admissions)]);
    
        // Update y-axis
        yAxis.transition().duration(500).call(d3.axisLeft(yScale));
        
        // Define color scale for organizations
        const orgColor = d3.scaleOrdinal()
            .domain(top10.map(d => d.orgCode))
            .range(d3.schemeSet2);
    
    
    
    
        /*********************
        Update bars
        *
        *******************************/
        var barz = svg.selectAll("rect")
            .data(top10.slice(0, 10));
        barz.on("mouseover", function(event, d) {
                ltip.transition().duration(500)
                .style("opacity", 0.9);
                ltip.html(`<strong>${d.orgCode}</strong><br>Total Admissions: ${d.admissions}`)
                .style("left", (event.pageX - 200) + "px")
                .style("top", (event.pageY -500) + "px");
                })
        .on("mousemove", function(event, d) {
                ltip.style("left", (event.pageX-200) + "px")
                .style("top", (event.pageY-100) + "px");
                })
        .on("mouseout", function(event, d) {
                ltip.transition().duration(500)
                .style("opacity", 0);
                });
    
        barz.enter()
            .append("rect")
            .merge(barz)
            .transition()
            .duration(1000)
            .attr("class", (d) => "bar " + d.orgCode)
            .attr("x", (d, i) => xScale(d.orgCode))
            .attr("width", xScale.bandwidth())
            .attr("y", d => yScale(d.admissions))
            .attr("height", d => h - yScale(d.admissions))
            .attr('transform', 'translate(70,0)')
            .style("fill", (d) => orgColor(d.orgCode))
            .attr("ry", 5)
            /* .on('mouseenter', mouseover)
            .on("mousemove", movemouse)
            .on("mouseleave", mouseleave)  */
            ;
        barz.exit().remove();
    
       
    }
    
  }
}, [colors.primary]);

return (
  <Box ref={d3Container} />
);
};

export default BarChart;