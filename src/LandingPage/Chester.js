import React, { Component } from "react";
import styled from "styled-components";

const Span = styled.div`
  display: block;
  text-align: center;
  padding: 80px calc(50% - 960px);
  font-style: italic;
  font-variant: petite-caps;
  margin: 100px;
`;

const Blacklogo = styled.img`
  margin-top: 225px;
  max-height: 45px;
`;

class Chester extends Component {
  render() {
    return (
      <Span>
        <p>
          "We aim to create ease, convenience and peace of mind for the modern
          online watch buyer."
        </p>
        <p>-Chester Lau, Co-Founder, WatchSenses</p>
        <Blacklogo src="/assets/black_logo.png" />
      </Span>
    );
  }
}

export default Chester;
