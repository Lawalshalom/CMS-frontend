import React from "react";
import { Route, Switch } from 'react-router-dom';
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