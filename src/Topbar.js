import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  background: black;
  height: 48px;
  padding: 5px calc(50% - 960px / 2 - 5px);
`;

const Logo = styled.img`
  max-height: 38px;
`;

class Topbar extends Component {
  render() {
    return (
      <Container>
        <Logo src="/assets/white_logo.png" />
      </Container>
    );
  }
}

export default Topbar;
