import React, { Component } from "react";
import LatestSection from "./LatestSection";
import GetaQuote from "./GetaQuote";
import Chester from "./Chester";
import MCSignUp from "./MCSignUp";

class LandingPage extends Component {
  render() {
    return (
      <div>
        <GetaQuote />
        <LatestSection />
        <Chester />
        <MCSignUp />
      </div>
    );
  }
}

export default LandingPage;
