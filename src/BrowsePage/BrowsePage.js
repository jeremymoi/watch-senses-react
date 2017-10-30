import React, { Component } from "react";
import styled from "styled-components";
import Header from "./Header";
import WatchesContainer from "./WatchesContainer";
import qs from "query-string";
import { Pagination } from "react-bootstrap";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

const pageSize = 20;

const Container = styled.div`
  padding: 0px calc(50% - 960px / 2);
`;

const StyledPagination = styled(Pagination)`
  display: flex;
  margin-top: 20px;
  justify-content: center;
  margin-bottom: 60px;
`;

class BrowsePage extends Component {
  componentDidUpdate(prevProps) {
    const { location } = this.props;
    if (prevProps.location !== location) {
      this.refetch();
    }
  }

  handlePageChange = page => {
    const { location, history } = this.props;
    const query = qs.parse(location.search);
    if (page === 1) {
      delete query.page;
    } else {
      query.page = page;
    }
    history.push({
      ...location,
      search: qs.stringify(query)
    });
  };

  refetch() {
    this.setState({ loading: true });
    const { location, pageSize } = this.props;
    const query = qs.parse(location.search);
  }

  render() {
    const { location } = this.props;
    const {
      _allWatchListingsMeta,
      allWatchListings,
      loading
    } = this.props.data;
    const query = qs.parse(location.search);
    const count = _allWatchListingsMeta ? _allWatchListingsMeta.count : 0;
    return (
      <Container>
        <Header />
        <WatchesContainer
          pageSize={pageSize}
          watches={allWatchListings || []}
          loading={loading}
        />
        {(!loading || _allWatchListingsMeta !== undefined) && (
          <StyledPagination
            prev
            next
            first
            last
            ellipsis
            boundaryLinks
            items={Math.ceil(count / pageSize)}
            maxButtons={5}
            activePage={parseInt(query.page, 10) || 1}
            onSelect={this.handlePageChange}
          />
        )}
      </Container>
    );
  }
}

const BrowseWatches = gql`
query BrowseWatches(
  $sort: WatchListingOrderBy
  $skip: Int
  $name: String
  $brand: String
) {
  allWatchListings(
    orderBy: $sort
    skip: $skip
    first: ${pageSize}
    filter: {
      brand: {
        name: $brand
      }
      name_contains: $name
    }
  ){
    id
    imageUrl
    name
    price
    url
  }
  _allWatchListingsMeta(

    filter: {
      brand: {
        name: $brand
      }
      name_contains: $name
    }
  ){
    count
  }
}
`;

export default graphql(BrowseWatches, {
  options: props => {
    const { location } = props;
    const query = qs.parse(location.search);
    return {
      variables: {
        name: query.search,
        brand: query.brand,
        skip: (parseInt(query.page || 1) - 1) * pageSize,
        sort: query.sort || "createdAt_DESC"
      }
    };
  }
})(BrowsePage);
