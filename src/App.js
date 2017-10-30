import React, { Component } from "react";
import Topbar from "./Topbar";
import LandingPage from "./LandingPage";
import BrowsePage from "./BrowsePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import client from "./apollo";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div>
            <Topbar />
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/browse" component={BrowsePage} />
              <Route component={() => <div>Not found</div>} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
