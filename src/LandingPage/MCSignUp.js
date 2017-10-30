import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  padding: 100px calc(50% - 960px);
`;

const Group = styled.div`
  margin: 30px;
  display: inline-flex;
`;

const Label = styled.label`
  margin-right: 15px;
`;

const Input = styled.input`
  width: 200px;
  margin-bottom: 40px;
  margin-top: 20px;
  padding: 0.5em 3em;
  background-color: gold;
  font-weight: bolder;
  text-transform: uppercase;
`;

class MCSignUp extends Component {
  render() {
    return (
      <Container>
        Subscribe to our newsletter for updates and interesting news.
        <form
          action="https://watchsenses.us16.list-manage.com/subscribe/post?u=d73d8b547a99501941e955455&amp;id=0ad0cebfc0"
          method="post"
          id="mc-embedded-subscribe-form"
        >
          <Group>
            <Label htmlFor="mce-NAME">Name</Label>
            <input type="text" name="NAME" id="mce-NAME" />
          </Group>
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
      </Container>
    );
  }
}

export default MCSignUp;
