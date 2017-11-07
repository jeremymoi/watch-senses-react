import React, { Component } from "react";
import styled from "styled-components";
import "react-select/dist/react-select.css";

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

const Runner = styled.div`
  text-align: center;
  padding: 45px 60px;
`;

const Col = styled.div`
  display: inline-grid;
  padding: 20px;
`;

class BrandsWeCarry extends Component {
  render() {
    return (
      <div>
        <Header>Brands we carry in our Collection</Header>
        <Runner>
          <Col>
            <Logo src="/assets/glashutte.jpg" />
          </Col>
          <Col>
            <Logo src="/assets/jlc.jpg" />
          </Col>
          <Col>
            <Logo src="/assets/longines.jpg" />
          </Col>
          <Col>
            <Logo src="/assets/oris.jpg" />
          </Col>
          <Col>
            <Logo src="/assets/seiko.jpg" />
          </Col>
          <Col>
            <Logo src="/assets/tagheuer.jpg" />
          </Col>
          <Col>
            <Logo src="/assets/zenith.jpg" />
          </Col>
        </Runner>
      </div>
    );
  }
}

export default BrandsWeCarry;
