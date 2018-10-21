// @flow

import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

import DashboardPage from "./pages/Dashboard";
import NotFoundPage from "./pages/NotFound";

import "normalize.css";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Sidebar />
        <div className="main__container">
          <Switch>
            <Route exact path="/" component={DashboardPage} />
            <Route path="/servers" component={NotFoundPage} />
            <Route path="" component={NotFoundPage} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
