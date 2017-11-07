import React, { Component } from "react";
import styled from "styled-components";

const Title = styled.h4`
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  font-family: "Montserrat";
  padding-top: 50px;
`;

const Form = styled.div`
  text-align: center;
`;

const Group = styled.div`
  width: 250px;
  height: 100px;
  margin: 15px;
  display: inline-grid;
`;

const Hat = styled.h5`
  margin: 5px;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 600;
  font-family: "Montserrat";
`;

const P = styled.p`
  margin: 5px;
  font-family: "Laro";
  letter-spacing: 0.1em;
`;

class HowItWorks extends Component {
  render() {
    return (
      <div>
        <Title>HOW IT WORKS</Title>
        <Form>
          <Group>
            <Hat>SEND IN A REQUEST</Hat>
            <P>Take 5 minutes to fill in our 'Get a recommendation' form.</P>
          </Group>
          <Group>
            <Hat>LET US FIND YOUR WATCH</Hat>
            <P>
              Give us 3 to 5 working days to source for a piece that suits you.
            </P>
          </Group>
          <Group>
            <Hat>COME DOWN TO TRY</Hat>
            <P>
              If you like our recommendation and we have the watch, come meet us
              to try it!
            </P>
          </Group>
        </Form>
      </div>
    );
  }
}

export default HowItWorks;
