import React, { Component } from "react";
import styled from "styled-components";
import { withRouter } from "react-router";

const Container = styled.div`
  opacity: ${props => (props.loading ? 0.3 : 1)};
  transition: opacity 0.5s ease-in;
  display: flex;
  all: inherit;
  text-align: -webkit-center;
  margin-top: 35px;
`;

const WatchContainer = styled.a`
  text-align: center;
  margin-bottom: 20px;
  display: inline-grid;
`;

const WatchImage = styled.img`
  width: 192px;
  height: 192px;
  object-fit: cover;
`;

const WatchName = styled.span`
  text-transform: uppercase;
  color: #aaa;
  font-size: 12px;
  display: inline-grid;
  text-align: center;
  word-wrap: break-word;
  margin: 5px;
  width: 192px;
`;

const WatchPrice = styled.span`
  color: #aaa;
  font-size: 12px;
`;

const Watch = ({ watch: { imageUrl, name, price, url } }) => {
  return (
    <WatchContainer href={url} target="_blank">
      <WatchImage src={imageUrl} />
      <WatchName>{name}</WatchName>
      <WatchPrice>${price}</WatchPrice>
    </WatchContainer>
  );
};

class WatchesContainer extends Component {
  render() {
    const { watches, loading } = this.props;

    return (
      <Container loading={loading}>
        {watches.map((watch, i) => <Watch watch={watch} key={i} />)}
      </Container>
    );
  }
}

export default withRouter(WatchesContainer);
