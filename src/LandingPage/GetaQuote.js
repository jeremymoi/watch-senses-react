import React, { Component } from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

/** UI **/
const Container = styled.div`
  text-align: center;
  padding: 10px calc(50% - 960px);
  background-image: url("/assets/search_background.jpg");
`;

const Offerings = styled.div`
  display: block;
  align-items: center;
  margin: 10px;
`;

const Value = styled.div`
  display: inline-block;
  text-align: center;
  width: 250px;
  height: 100px;
  margin: 15px;
`;

const Header = styled.h4`
  margin: 10px;
  margin-top: 50px;
  text-transform: uppercase;
`;

const h5 = styled.h5`
  display: inline-block;
  margin: 5px;
  text-transform: uppercase;
  text-decoration: bold;
`;

const p = styled.p`
  margin: 5px;
  font-size: 10px;
`;

class GetaQuote extends Component {
  render() {
    return (
      <Container>
        <Header>Let us value your watch.</Header>
        <Offerings>
          <Value>
            <h5>UPLOAD DETAILS</h5>
            <p>Send us details of the watch you want to sell.</p>
          </Value>
          <Value>
            <h5>GET AN ANALYSIS</h5>
            <p>
              Once we receive your information, give us 3 to 5 working days to
              do our job.
            </p>
          </Value>
          <Value>
            <h5>RECEIVE AN OFFER</h5>
            <p>We help you get a competitive deal through our partners!</p>
          </Value>
        </Offerings>
        <LinkContainer to="/browse">
          <Button>GET A QUOTE NOW</Button>
        </LinkContainer>
      </Container>
    );
  }
}

export default GetaQuote;
