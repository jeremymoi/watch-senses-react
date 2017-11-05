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
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  font-family: "Montserrat";
`;

const Description = styled.p`
  margin: 20px;
  font-family: "Laro";
  letter-spacing: 0.1em;
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
  margin-top: 30px;
  padding: 1em 2em;
  background-color: transparent;
  text-transform: uppercase;
  border-radius: 14px;
  font-family: "Montserrat", sans-serif;
  letter-spacing: 0.05em;
  color: #9a0612;
  border: #9a0612;
  border-width: 3px;
  border-style: ridge;
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
        <Pref>Browse our curated collection</Pref>
        <Description>
          This marketplace is curated to only offer top quality deals from
          trusted dealers.
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
