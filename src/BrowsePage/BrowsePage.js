import React, { Component } from "react";
import styled from "styled-components";
import Header from "./Header";
import WatchesContainer from "./WatchesContainer";
import qs from "query-string";
import { Pagination } from "react-bootstrap";
import PropTypes from "prop-types";

const apiSearch = ({ text, brand, sort, page = 0, pageSize }, cb) => {
  setTimeout(() => {
    const results = [];
    for (let i = 0; i < pageSize; i++) {
      results.push({
        imageUrl:
          "https://www.rolex.com/content/dam/rolex/catalog/watch-grid/m1/266/00/m126600-0001.jpg",
        brand: "Rolex",
        name: `Daytona ${page * pageSize + i + 1}`,
        price: 999,
        externalUrl: "https://google.com"
      });
    }
    cb({
      totalCount: 208,
      results
    });
  }, 500);
};

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
  static propTypes = {
    pageSize: PropTypes.number
  };

  static defaultProps = {
    pageSize: 20
  };

  state = {
    watches: null,
    totalCount: 0,
    loading: null
  };

  componentWillMount() {
    this.refetch();
  }

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
    apiSearch({ ...query, pageSize }, response => {
      this.setState({
        loading: false,
        totalCount: response.totalCount,
        watches: response.results
      });
    });
  }

  render() {
    const { location, pageSize } = this.props;
    const { watches, loading, totalCount } = this.state;
    const query = qs.parse(location.search);
    return (
      <Container>
        <Header />
        <WatchesContainer
          pageSize={pageSize}
          watches={watches || []}
          loading={loading}
        />
        {(!loading || watches !== null) && (
          <StyledPagination
            prev
            next
            first
            last
            ellipsis
            boundaryLinks
            items={Math.ceil(totalCount / pageSize)}
            maxButtons={5}
            activePage={parseInt(query.page, 10) || 1}
            onSelect={this.handlePageChange}
          />
        )}
      </Container>
    );
  }
}

export default BrowsePage;
