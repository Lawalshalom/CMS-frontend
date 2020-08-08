import React, { useEffect } from 'react';
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Official = () => {
    useEffect(() => {
        const navList = document.querySelectorAll("li");
        navList.forEach(list => {
            if (list.classList.contains("active")) {
                list.classList.remove("active");
            }
        })
        navList[1].classList.add("active")
    })
    return (
        <>
        <div data-aos="fade-up" className="container-xl container-fluid">
        <Header/>
            <div className="login">
                <h3>Welcome</h3>
                <form action="POST">
                    <div className="loginId">
                        <label>Login Id</label>
                        <input type="name" required minLength="5" autoComplete="true"/>
                    </div>
                    <div className="password">
                        <label>Password</label>
                        <input type="password" required minLength="6"/>
                    </div>
                    <div className="login-btn">
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default Official
