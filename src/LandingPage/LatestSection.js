import React, { Component } from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const apiSearchLatest = cb => {
  //  Call /search api with sort=latest, limit to 5
  setTimeout(() => {
    cb({
      totalCount: 900992,
      results: [
        {
          imageUrl:
            "https://www.rolex.com/content/dam/rolex/catalog/watch-grid/m1/266/00/m126600-0001.jpg",
          brand: "Rolex",
          name: "Daytona 1",
          price: 999,
          externalUrl: "https://google.com"
        },
        {
          imageUrl:
            "https://www.rolex.com/content/dam/rolex/catalog/watch-grid/m1/266/00/m126600-0001.jpg",
          brand: "Rolex",
          name: "Daytona 2",
          price: 999,
          externalUrl: "https://google.com"
        },
        {
          imageUrl:
            "https://www.rolex.com/content/dam/rolex/catalog/watch-grid/m1/266/00/m126600-0001.jpg",
          brand: "Rolex",
          name: "Daytona 3",
          price: 999,
          externalUrl: "https://google.com"
        },
        {
          imageUrl:
            "https://www.rolex.com/content/dam/rolex/catalog/watch-grid/m1/266/00/m126600-0001.jpg",
          brand: "Rolex",
          name: "Daytona 4",
          price: 999,
          externalUrl: "https://google.com"
        },
        {
          imageUrl:
            "https://www.rolex.com/content/dam/rolex/catalog/watch-grid/m1/266/00/m126600-0001.jpg",
          brand: "Rolex",
          name: "Daytona 5",
          price: 999,
          externalUrl: "https://google.com"
        }
      ]
    });
  }, 500);
};

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

const ItemContainer = styled.div`
  text-align: center;
  margin-bottom: 20px;
  display: inline-block;
`;

const ItemImage = styled.img`
  width: 192px;
  height: 192px;
  object-fit: cover;
`;

const ItemBrand = styled.h6`
  text-transform: uppercase;
  margin: 0;
  margin-bottom: 5px;
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

const Item = ({ item: { imageUrl, name, brand, price, externalUrl } }) => {
  return (
    <ItemContainer>
      <ItemImage src={imageUrl} />
      <ItemBrand>{brand}</ItemBrand>
      <ItemName>{name}</ItemName>
      <ItemPrice>${price}</ItemPrice>
    </ItemContainer>
  );
};

/**
 * Component
 */
class LatestSection extends Component {
  state = {
    items: [
      {
        name: ".",
        brand: ".",
        price: "."
      }
    ],
    loading: true
  };

  componentWillMount() {
    apiSearchLatest(({ results }) => {
      this.setState({
        items: results,
        loading: false
      });
    });
  }

  render() {
    const { items, loading } = this.state;

    return (
      <Container>
        <Header>Trending Online</Header>
        <Description>
          Browse private watch sales that are currently occurring online.
        </Description>
        <Items loading={loading}>
          {items.map((item, i) => <Item key={i} item={item} />)}
        </Items>
        <LinkContainer to="/browse">
          <Button>Browse Watches</Button>
        </LinkContainer>
      </Container>
    );
  }
}

export default LatestSection;
