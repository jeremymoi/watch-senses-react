import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  padding: 10px calc(50% - 960px);
`;
class MCSignUp extends Component {
  render() {
    return (
      <Container>
        We reach out monthly and provide you with updates to what we do and
        anything interesting.
        <form
          action="https://watchsenses.us16.list-manage.com/subscribe/post?u=d73d8b547a99501941e955455&amp;id=0ad0cebfc0"
          method="post"
          id="mc-embedded-subscribe-form"
        >
          <label htmlFor="mce-NAME">Name</label>
          <input type="text" name="NAME" id="mce-NAME" />

          <label htmlFor="mce-EMAIL">Email </label>
          <input type="email" name="EMAIL" id="mce-EMAIL" />
          <input
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
