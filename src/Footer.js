import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  background: #9a0612;
  padding: 5px calc(50% - 960px / 2 - 5px);
`;

const Notice = styled.p`
  color: white;
  font-size: 10px;
  font-style: italic;
  padding-top: 15px;
  font-family: "Laro";
`;

const Foot = styled.div`
  background-color: #303836;
`;

const Column = styled.div`
  color: white;
  display: inline-grid;
  padding: 35px calc(40% - 960px / 2 - 5px) 35px calc(50% - 960px / 2 - 5px);
`;

const Head = styled.h4`
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 600;
  font-family: "Montserrat", sans-serif;
  color: white;
`;

const Info = styled.p`
  padding-bottom: 5px;
  font-family: "Laro";
  letter-spacing: 0.1em;
`;
/** MChimp styling**/
const Group = styled.div`
  margin-right: 10px;
`;

const Label = styled.label`
  margin-right: 15px;
`;

const Input = styled.input`
  text-transform: uppercase;
  padding: 0.3em 1em;
  background-color: #9a0612;
  border-radius: 10px;
  font-family: "Montserrat", sans-serif;
  letter-spacing: 0.05em;
  color: white;
  font-size: 10px;
`;

class Footer extends Component {
  render() {
    return (
      <Foot>
        <Column>
          <Head>Get In Touch</Head>
          <Info>
            <div>The Hangar </div>
            <div>21 Heng Mui Keng Terrace</div> <div>Singapore 119613</div>
          </Info>
          <Info>admin@thewatchsenses.com</Info>
        </Column>
        <Column>
          <Head>About</Head>
        </Column>
        <Column>
          <Head>FAQ</Head>
        </Column>
        <Column>
          <Head>Our Regular Stories</Head>
          <form
            action="https://watchsenses.us16.list-manage.com/subscribe/post?u=d73d8b547a99501941e955455&amp;id=0ad0cebfc0"
            method="post"
            id="mc-embedded-subscribe-form"
          >
            <Group>
              <Label htmlFor="mce-EMAIL">Email </Label>
              <input type="email" name="EMAIL" id="mce-EMAIL" />
            </Group>
            <Input
              type="submit"
              value="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
            />
          </form>
        </Column>
        <Container>
          <Notice>All Rights Reserved. © 2017.</Notice>
        </Container>
      </Foot>
    );
  }
}

export default Footer;
