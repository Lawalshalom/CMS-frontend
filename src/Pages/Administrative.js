import React, { useEffect } from 'react';
import * as d3 from "d3";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Administrative = (props) => {

    const sortedData = [];
    const states = [];
    const population = [];
    const homes = [];
    const yoruba = [];
    const hausa = [];
    const igbo = [];
    let lowestState, heighestState;
    props.censusData.map(data => {
      population.push(Number.parseInt(data.population));
      homes.push(data.homes);
      yoruba.push(data.yoruba);
      states.push(data.state);
      hausa.push(data.hausa);
      return igbo.push(data.igbo);
    });
    states.sort();
    states.map(state => {
        props.censusData.map(data => {
            if (state === data.state) {
               return sortedData.push(data);
            } return null;
        });
        return sortedData;
    });
    if (population.length > 0){
        const lowest = population.reduce((a,b) => Math.min(a,b));
        const heighest = population.reduce((a,b) => Math.max(a,b));
        props.censusData.map(data => {
            if (Number.parseInt(data.population) === lowest){
            return lowestState = data.state;
            }
            else if (Number.parseInt(data.population) === heighest){
                return heighestState = data.state;
            } else return null;
        });
    };


    useEffect(() => {

    const height = 500;
    const width = 500;
    const barWidth = 35;
    const barOffset = 5;

    const tooltip = d3.select("body").append("div")
                    .style("position", "absolute")
                    .style("background", "absolute")
                    .style("padding", "5px 15px")
                    .style("border", "1px #333 solid")
                    .style("border-radius", "5px")
                    .style("opacity", 0);

     d3.select("#dataChart").append("svg")
                        .attr("width", width)
                        .attr("height", height)
                        .style("background", "f4f4f4")
                        .selectAll("rect")
                        .data(population)
                        .enter().append("rect")
                        .style("fill", "lightgreen")
                        .style("opacity", 1)
                        .attr("width", barWidth)
                        .attr("height", function(d){
                            return d;
                        })
                        .attr("x", function(d,i){
                            return i * (barWidth + barOffset);
                        })
                        .attr("y", function(d){
                            return height - d;
                        })
                        .on("mouseover", function(d){
                            tooltip.transition()
                            .style("opacity", 1)
                        tooltip.html(d)
                            .style("left", (d3.event.pageX+"px"))
                            .style("top", (d3.event.pageY+"px"))
                        d3.select(this).style("opacity", 0.5)
                        })
                        .on("mouseout", function(d){
                            tooltip.transition()
                            .style("opacity", 0)
                            d3.select(this).style("opacity", 1)
                        })


        const navList = document.querySelectorAll("li");
        navList.forEach(list => {
            if (list.classList.contains("active")) {
                list.classList.remove("active");
            }
        })
        navList[2].classList.add("active");
    })
    return (
        <>
        <div className="container-xl container-fluid">
        <Header/>
            <h1 data-aos="fade-right" className="text-center">Admin Dashboard</h1>
            <div data-aos="fade-up" className="admin">
            <div className="dashboard">
              <table>
              <colgroup span="6"></colgroup>
                <thead>
                    <tr>
                      <th rowSpan="2">States</th>
                      <th rowSpan="2">Population</th>
                      <th rowSpan="2">Homes</th>
                      <th colSpan="3">Languages</th>
                      </tr>
                      <tr>
                        <th>Hausa</th>
                          <th>Igbo</th>
                          <th>Yoruba</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedData.map(data => {
                        return <tr key={Math.random()}>
                            <td>{data.state}</td>
                            <td>{data.population}</td>
                            <td>{data.homes}</td>
                            <td>{data.hausa}</td>
                            <td>{data.igbo}</td>
                            <td>{data.yoruba}</td>
                        </tr>
                    })}
                </tbody>
                <tfoot>
                    <tr>
                        <th>Total</th>
                        <th>{population.reduce((a,b) => a+b, 0)}</th>
                        <th>{homes.reduce((a,b) => a+b, 0)}</th>
                        <th>{hausa.reduce((a,b) => a+b, 0)}</th>
                        <th>{igbo.reduce((a,b) => a+b, 0)}</th>
                        <th>{yoruba.reduce((a,b) => a+b, 0)}</th>
                    </tr>
                </tfoot>
              </table>
            </div>
              <div data-aos="fade-right" className="totals">
                <h5><strong>Stats</strong></h5>
                <p>Population: <span>{population.reduce((a,b) => a+b, 0)}</span></p>
                <p>Most Populated State: <strong>{heighestState}</strong></p>
                <p>Least Populated State: <strong>{lowestState}</strong></p>
                <p>Total Hausa: <strong>{hausa.reduce((a,b) => a+b, 0)}</strong></p>
                <p>Total Igbo: <strong>{igbo.reduce((a,b) => a+b, 0)}</strong></p>
                <p>Total Yoruba: <strong>{yoruba.reduce((a,b) => a+b, 0)}</strong></p>
              </div>
            </div>
            <div id="dataChart"></div>
        <Footer />
        </div>
        </>
    )
}
export default Administrative;