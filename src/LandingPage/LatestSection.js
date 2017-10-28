import React, { Component } from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

/**
 * UI
 */
const Container = styled.div`
  text-align: center;
  padding: 0px calc(50% - 960px);
`;

const Header = styled.h4`
  margin: 10px;
  margin-top: 50px;
  text-transform: uppercase;
`;

const Description = styled.p`
  margin: 10px;
`;

const Items = styled.div`
  opacity: ${props => (props.loading ? 0 : 1)};
  transition: opacity 0.5s ease-in;
`;

const ItemContainer = styled.a`
  text-align: center;
  margin-bottom: 20px;
  display: inline-block;
`;

const ItemImage = styled.img`
  width: 192px;
  height: 192px;
  object-fit: cover;
`;

const ItemName = styled.span`
  text-transform: uppercase;
  color: #aaa;
  font-size: 12px;
  display: block;
`;

const ItemPrice = styled.span`
  color: #aaa;
  font-size: 12px;
`;

const Item = ({ item: { imageUrl, name, price, url } }) => {
  return (
    <ItemContainer href={url} target="_blank">
      <ItemImage src={imageUrl} />
      <ItemName>{name}</ItemName>
      <ItemPrice>${price}</ItemPrice>
    </ItemContainer>
  );
};

/**
 * Component
 */
class LatestSection extends Component {
  render() {
    const { allWatchListings, loading } = this.props.data;

    return (
      <Container>
        <Header>Trending Online</Header>
        <Description>
          Browse private watch sales that are currently occurring online.
        </Description>
        <Items loading={loading}>
          {allWatchListings &&
            allWatchListings.map((item, i) => <Item key={i} item={item} />)}
        </Items>
        <LinkContainer to="/browse">
          <Button>Browse Watches</Button>
        </LinkContainer>
      </Container>
    );
  }
}

const LatestWatches = gql`
  query LatestWatches {
    allWatchListings(orderBy: createdAt_DESC, first: 5) {
      id
      imageUrl
      name
      price
      url
    }
  }
`;
export default graphql(LatestWatches)(LatestSection);
