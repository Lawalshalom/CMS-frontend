import React, { useEffect } from "react";
import { Route, Switch } from 'react-router-dom';
import AOS from "aos";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Official from "./Pages/Official";
import Administrative from "./Pages/Administrative";
import Contact from "./Pages/Contact";
import Error from "./Error";
import "./app.css";


  const App = () => {
    const toggleClass = () => {
      return "dark theme"
    }
    useEffect(() => {

      AOS.init({
        offset: 20, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 1000, // values from 0 to 3000, with step 50ms
        easing: 'ease-in', // default easing for AOS animations
        once: true, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

      });
    })
    return (
      <main>
          <Switch>
              <Route path="/" render={renderprops =>
                <Home toggleClass={toggleClass} {...renderprops} />} exact />
              <Route path="/about" render={renderprops =>
                <About toggleClass={toggleClass} {...renderprops} />} />
              <Route path="/official" render={renderprops =>
                <Official toggleClass={toggleClass} {...renderprops} />} />
              <Route path="/administrative" render={renderprops =>
                <Administrative toggleClass={toggleClass} {...renderprops} />} />
              <Route path="/contact" render={renderprops =>
                <Contact toggleClass={toggleClass} {...renderprops} />} />
              <Route render={renderprops =>
                <Error toggleClass={toggleClass} {...renderprops} />} />
          </Switch>
      </main>
    )
  }
  export default App;