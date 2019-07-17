import React from 'react';
//import logo from './logo.svg';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Search from "./components/pages/Search";
import Saved from "./components/pages/Saved";
import './App.css';

function App() {
  return (

    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={Search} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/saved" component={Saved} />
      </div>
    </Router>

    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;