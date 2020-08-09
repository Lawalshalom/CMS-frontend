import React, { useEffect } from 'react';
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Administrative = (props) => {

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
      hausa.push(data.hausa);
      return igbo.push(data.igbo);
    });
    if (population.length > 0){
        const lowest = population.reduce((a,b) => Math.min(a,b));
        const heighest = population.reduce((a,b) => Math.max(a,b));
        props.censusData.map(data => {
            if (data.population === lowest.toString()){
            return lowestState = data.state;
            }
            else if (data.population === heighest.toString()){
                console.log(heighest.toString());
                return heighestState = data.state;
            } else return null;
        });
    }


    useEffect(() => {
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
            <div className="admin">
              <h1>Admin Dashboard</h1>
              <div>
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
                    {props.censusData.map(data => {
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
              <div className="totals">
                <h5><strong>Stats</strong></h5>
                <p>Population: <span>{population.reduce((a,b) => a+b, 0)}</span></p>
                <p>Most Populated State: <span>{heighestState}</span></p>
                <p>Least Populated State: <span>{lowestState}</span></p>
              </div>
            </div>
        <Footer />
        </div>
        </>
    )
}
export default Administrative;