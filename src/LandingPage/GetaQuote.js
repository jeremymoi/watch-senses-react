import React, { Component } from "react";
import styled from "styled-components";
import { LinkContainer } from "react-router-bootstrap";

/** UI **/
const Container = styled.div`
  text-align: center;
  padding: 10px calc(50% - 960px);
  background-image: url("/assets/searchbackground.jpg");
  background-size: cover;
  background-position: center;
`;

const Offerings = styled.div`
  display: block;
  align-items: center;
  margin: 10px;
  padding-top: 60px;
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
  font-size: 30px;
  padding-top: 60px;
  font-weight: 800;
`;

const Hat = styled.h5`
  display: inline-block;
  margin: 5px;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: bolder;
`;

const p = styled.p`
  margin: 5px;
  font-size: small;
`;

const Button = styled.button`
  margin-bottom: 40px;
  padding: 0.5em 3em;
  background-color: gold;
  font-weight: bolder;
`;

class GetaQuote extends Component {
  render() {
    return (
      <Container>
        <Header>We tell you if a watch is worth buying</Header>
        <Offerings>
          <Value>
            <Hat>UPLOAD DETAILS</Hat>
            <p>Send us details of the watch you want to sell.</p>
          </Value>
          <Value>
            <Hat>GET AN ANALYSIS</Hat>
            <p>
              Once we receive your information, give us 3 to 5 working days to
              do our job.
            </p>
          </Value>
          <Value>
            <Hat>LET US HELP YOU</Hat>
            <p>We can assist you in purchasing the watch. Just tell us!</p>
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
