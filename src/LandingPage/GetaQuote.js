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

const Header = styled.h4`
  margin: 10px;
  margin-top: 50px;
  text-transform: uppercase;
  font-size: 30px;
  padding-top: 100px;
  font-weight: 800;
  font-family: "Montserrat", sans-serif;
  color: white;
`;

const Liner = styled.h5`
  font-family: "Laro", serif;
  font-size: 18px;
  color: white;
  padding: 50px 150px 50px 150px;
  letter-spacing: 0.1em;
  line-height: 1.5;
`;

const Button = styled.button`
  margin-bottom: 80px;
  padding: 1em 2em;
  background-color: #ca9e67;
  border-radius: 14px;
  font-family: "Montserrat", sans-serif;
  letter-spacing: 0.05em;
`;

const A = styled.p`
  color: white;
`;

class GetaQuote extends Component {
  render() {
    return (
      <Container>
        <Header>Get help buying a quality second hand luxury watch</Header>
        <Liner>
          WatchSenses is a simplier way to find valuable luxury watches than on
          crowded marketplaces. Get tailored recommendations based on your
          preferences, style and budget. Do all these easily in 5 minutes.
        </Liner>
        <A
          href="https://docs.google.com/forms/d/e/1FAIpQLSe_RLXnWmcQsgLFnyn2DC5LIakKnBXzDcYVmllRwTNduEiIxw/viewform?usp=sf_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>GET A RECOMMENDATION</Button>
        </A>
      </Container>
    );
  }
}

export default GetaQuote;
