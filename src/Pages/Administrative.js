import React, { useEffect } from 'react';
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Administrative = () => {
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
            </div>
        <Footer />
        </div>
        </>
    )
}
export default Administrative