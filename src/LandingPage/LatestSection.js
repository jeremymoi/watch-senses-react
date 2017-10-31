import React, { Component } from "react";
import styled from "styled-components";
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

const Pref = styled.h4`
  margin: 10px;
  margin-top: 50px;
  text-transform: uppercase;
  font-weight: bolder;
`;

const Description = styled.p`
  margin: 20px;
`;

const Items = styled.div`
  opacity: ${props => (props.loading ? 0 : 1)};
  transition: opacity 0.5s ease-in;
  display: flex;
  all: inherit;
`;

const ItemContainer = styled.a`
  text-align: center;
  margin-bottom: 20px;
  display: inline-grid;
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
  display: inline-grid;
  text-align: center;
  word-wrap: break-word;
  margin: 5px;
  width: 192px;
`;

const ItemPrice = styled.span`
  color: #aaa;
  font-size: 12px;
`;

const Button = styled.button`
  margin-bottom: 40px;
  margin-top: 20px;
  padding: 0.5em 3em;
  background-color: gold;
  font-weight: bolder;
  text-transform: uppercase;
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
        <Pref>Prefer to do it yourself?</Pref>
        <Description>
          Browse curated private watch sales from our partners.
        </Description>
        <Items loading={loading}>
          {allWatchListings &&
            allWatchListings.map((item, i) => <Item key={i} item={item} />)}
        </Items>
        <LinkContainer to="/browse">
          <Button>Browse More Watches</Button>
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
