import React, { useState, useEffect } from "react";
import * as d3 from "d3";
import { BubbleData as data } from "../../data/BubbleData";
import "./Bubble.css";

const Bubble = (props) => {
  let height = props.height;
  console.log(props.rendered, props.height);

  const svg = d3.select("#techdesk").append("svg").attr("height", height);

  const defs = svg.append("defs");

  let radiusScale = d3.scaleSqrt().domain([30, 100]);
  let xAxis = svg.append("g").attr("transform", "translate(0,0)");

  const drawChart = () => {
    defs
      .selectAll(".skill-pattern")
      .data(data)
      .enter()
      .append("pattern")
      .attr("class", "skill-pattern")
      .attr("id", function (d) {
        return d.name.toLowerCase().replace(/ /g, "-");
      })
      .attr("height", "100%")
      .attr("width", "100%")
      .attr("patternContentUnits", "objectBoundingBox")
      .append("image")
      .attr("height", 1)
      .attr("width", 1)
      .attr("preserveaspectration", "none")
      .attr("xmlns:xlink", "http://www.w3.org/1999/xlink")
      .attr("xlink:href", (d) => {
        return d.image_path;
      });

    let currentWidth = parseInt(d3.select("#techdesk").style("width"), 10);

    let wSize = window.innerWidth;
    svg.attr("width", currentWidth);

    if (wSize < 850) {
      radiusScale.range([20, currentWidth / 9]);
    } else if (wSize >= 850 && wSize < 1200) {
      radiusScale.range([25, currentWidth / 9]);
    } else if (wSize >= 1200) {
      radiusScale.range([25, currentWidth / 15]);
    }
    const forceXSeparate = d3
      .forceX((d) => {
        if (d.type === "Front End") {
          return wSize - currentWidth / 1.4;
        } else {
          return currentWidth / 1.25;
        }
      })
      .strength(0.05);

    const forceXCombine = d3.forceX(currentWidth / 2).strength(0.05);

    const forceCollide = d3
      .forceCollide((d) => {
        return radiusScale(d.point) + 1;
      })
      .strength(0.5);

    const simulation = d3
      .forceSimulation()
      .force("x", forceXCombine)
      .force("y", d3.forceY(height / 2).strength(0.07))
      .force("collide", forceCollide);

    let circles = svg
      .selectAll(".skill")
      .data(data)
      .enter()
      .append("circle")
      .attr("class", "skill")
      .attr("r", (d) => {
        return radiusScale(d.point);
      })
      .attr("fill", (d) => {
        return `url(#${d.name.toLowerCase().replace(/ /g, "-")})`;
      })
      .attr("name", (d) => {
        return d.name;
      })
      .on("mouseover", (d) => {
        let name = d.target.getAttribute("name");

        document.getElementById("skill-name").innerText = "";
        document.getElementById("skill-name").innerText = name;
      })
      .on("mouseout", (d) => {
        document.getElementById("skill-name").innerText = "Hover Icons";
      });

    d3.select("#combine").on("click", () => {
      simulation.force("x", forceXCombine).alphaTarget(0.3).restart();
    });

    d3.select("#front-back").on("click", () => {
      simulation.force("x", forceXSeparate).alphaTarget(0.3).restart();
    });

    simulation.nodes(data).on("tick", ticked);

    function ticked() {
      circles
        .attr("cx", function (d) {
          return d.x;
        })
        .attr("cy", function (d) {
          return d.y;
        });
    }
  };

  useEffect(() => {
    drawChart();
  }, [props.rendered]);

  return <div></div>;
};

export default Bubble;

// window.addEventListener("resize", drawChart);
