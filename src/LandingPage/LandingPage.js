import React, { Component } from "react";
import LatestSection from "./LatestSection";
import GetaQuote from "./GetaQuote";
import HowItWorks from "./HowItWorks";
import Chester from "./Chester";
import MCSignUp from "./MCSignUp";

class LandingPage extends Component {
  render() {
    return (
      <div>
        <GetaQuote />
        <HowItWorks />
        <LatestSection />
        <Chester />
        <MCSignUp />
      </div>
    );
  }
}

export default LandingPage;
