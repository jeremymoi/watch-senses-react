import React, { Component } from "react";
import styled from "styled-components";
import { withRouter } from "react-router";

const Container = styled.div`
  opacity: ${props => (props.loading ? 0.3 : 1)};
  transition: opacity 0.5s ease-in;
`;

const WatchContainer = styled.a`
  text-align: center;
  margin-bottom: 20px;
  display: inline-block;
`;

const WatchImage = styled.img`
  width: 192px;
  height: 192px;
  object-fit: cover;
`;

const WatchBrand = styled.h6`
  text-transform: uppercase;
  margin: 0;
  margin-bottom: 5px;
`;

const WatchName = styled.span`
  text-transform: uppercase;
  color: #aaa;
  font-size: 12px;
  display: block;
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
