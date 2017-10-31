import React, { Component } from "react";
import styled from "styled-components";

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
        <Header>We help you find your next pre-owned luxury watch</Header>
        <Offerings>
          <Value>
            <Hat>UPLOAD DETAILS</Hat>
            <p>Send us details of the watch you are looking for.</p>
          </Value>
          <Value>
            <Hat>SEARCH BEGINS</Hat>
            <p>Give us 3 to 5 working days to find you a suitable deal.</p>
          </Value>
          <Value>
            <Hat>WAIT FOR IT</Hat>
            <p>We let you know if we find something good!</p>
          </Value>
        </Offerings>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSe_RLXnWmcQsgLFnyn2DC5LIakKnBXzDcYVmllRwTNduEiIxw/viewform?usp=sf_link"
          target="_blank"
        >
          <Button>START FINDING</Button>
        </a>
      </Container>
    );
  }
}

export default GetaQuote;
