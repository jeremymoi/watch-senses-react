import React, { Component } from "react";
import styled from "styled-components";
import "react-select/dist/react-select.css";
import { Col } from "react-bootstrap";

const Header = styled.h4`
  font-family: "Montserrat";
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
`;

const Logo = styled.img`
  padding-top: inherit;
  max-height: 90px;
`;

const Group = styled.div`
  display: block;
`;

const Runner = styled.div`
  justify-content: center;
  display: flex;
  padding: 20px;
`;

class BrandsWeCarry extends Component {
  render() {
    return (
      <div>
        <Header>Brands we carry in our Collection</Header>
        <Group>
          <Runner>
            <Col xs={6} md={2} offset={2}>
              <Logo src="/assets/glashutte.jpg" />
            </Col>
            <Col xs={6} md={2} offset={2}>
              <Logo src="/assets/jlc.jpg" />
            </Col>
            <Col xs={6} md={2} offset={2}>
              <Logo src="/assets/longines.jpg" />
            </Col>
            <Col xs={6} md={2} offset={2}>
              <Logo src="/assets/oris.jpg" />
            </Col>
          </Runner>
          <Runner>
            <Col xs={6} md={2}>
              <Logo src="/assets/seiko.jpg" />
            </Col>
            <Col xs={6} md={2}>
              <Logo src="/assets/tagheuer.jpg" />
            </Col>
            <Col xs={6} md={2}>
              <Logo src="/assets/zenith.jpg" />
            </Col>
          </Runner>
        </Group>
      </div>
    );
  }
}

export default BrandsWeCarry;