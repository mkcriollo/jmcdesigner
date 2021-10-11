import React from "react";
import Home from "./components/home/home";
import "./index.css";
import Nav from "./components/nav/nav";
import About from "./components/about/about";
import Project from "./components/projects/project.jsx";
import Collections from "./components/collections/collections.jsx";
import Location from "./components/location/location.jsx";
import RhineCollection from "./components/collectionShow/rhimestone.jsx";
import ClassicCollection from "./components/collectionShow/classic";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/footer/footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Project} />
          <Route path="/collections" component={Collections} />
          <Route path="/location" component={Location} />
          <Route path="/rhinestone" component={RhineCollection} />
          <Route path="/classic" component={ClassicCollection} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
