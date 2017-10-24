import React, { Component } from "react";
import Topbar from "./Topbar";
import LandingPage from "./LandingPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Topbar />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route component={() => <div>Not found</div>} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
