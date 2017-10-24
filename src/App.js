import React, { Component } from "react";
import Topbar from "./Topbar";
import LandingPage from "./LandingPage";
import BrowsePage from "./BrowsePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Topbar />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/browse" component={BrowsePage} />
            <Route component={() => <div>Not found</div>} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
