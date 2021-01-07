import React, { Component } from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Calculator from "./pages/Calculator";
import Boundles from "./pages/Boundles";
import "./index.css";
import PageNotFound from "./pages/PageNotFound";
import Prices from "./pages/Prices";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={() => <Home />} />
            <Route exact path="/bundles" component={() => <Boundles />} />
            <Route exact path="/calculator" component={() => <Calculator />} />
            <Route exact path="/prices" component={() => <Prices />}></Route>
            <Route path="/" component={() => <PageNotFound />}></Route>
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
