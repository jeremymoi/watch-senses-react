import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  background: black;
  height: 100px;
  padding: 5px calc(50% - 960px / 2 - 5px);
`;

const Notice = styled.p`
  color: white;
  font-size: : 10px;
  font-style: italic;
  padding-top: 15px;
`;

class Footer extends Component {
  render() {
    return (
      <Container>
        <Notice>All Rights Reserved. © 2017.</Notice>
      </Container>
    );
  }
}

export default Footer;
