import React from 'react';
//import logo from './logo.svg';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Search from "./components/Search";
import Saved from "./components/Saved";
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
  );
}

export default App;