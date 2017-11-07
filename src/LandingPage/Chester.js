import React, { Component } from "react";
import styled from "styled-components";

const Span = styled.div`
  display: block;
  text-align: center;
  padding: 80px calc(50% - 960px);
  font-family: "Montserrat";
  margin: 100px 0px;
  font-weight: 300;
  font-size: 20px;
`;

const Words = styled.p`
  padding: 10px 10%;
`;

const Blacklogo = styled.img`
  margin-top: 190px;
  max-height: 45px;
`;

class Chester extends Component {
  render() {
    return (
      <Span>
        <Words>
          "The online marketplace for pre-owned luxury watches is confusing, too
          focused on price and messy. We want to help young watch collectors
          navigate this challenging landscape."
        </Words>
        <p>-Jeremy Ng, Co-Founder, WatchSenses</p>
        <Blacklogo src="/assets/black_logo.png" />
      </Span>
    );
  }
}

export default Chester;
