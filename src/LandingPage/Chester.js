import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  text-align: center;
  padding: 10px calc(50% - 960px);
`;

class Chester extends Component {
  render() {
    return (
      <Container>
        <span>
          <p>
            "We aim to create ease, convenience and peace of mind for the modern
            online watch buyer."
          </p>
          <p>-Chester Lau, Co-Founder, WatchSenses</p>
        </span>

        <img src="/assets/chesterlau.jpg" alt="Chester" />
      </Container>
    );
  }
}

export default Chester;
