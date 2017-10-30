import React, { Component } from "react";
import styled from "styled-components";
import { LinkContainer } from "react-router-bootstrap";

const Container = styled.div`
  background: black;
  height: 68px;
  padding: 5px calc(50% - 960px / 2 - 5px);
`;

const Logo = styled.img`
  max-height: 45px;
  padding-top: inherit;
`;

class Topbar extends Component {
  render() {
    return (
      <Container>
        <LinkContainer to="/">
          <Logo src="/assets/white_logo.png" />
        </LinkContainer>
      </Container>
    );
  }
}

export default Topbar;
