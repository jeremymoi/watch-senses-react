import React, { Component } from "react";
import styled from "styled-components";
import Select from "react-select";
import "react-select/dist/react-select.css";
import { FormControl, FormGroup } from "react-bootstrap";
import { withRouter } from "react-router";
import qs from "query-string";

var options = [
  { value: "", label: "Any Brands" },
  { value: "Rolex", label: "Rolex" },
  { value: "Not Rolex", label: "Not Rolex" }
];

const Container = styled.div`
  margin: 10px 0;
`;

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
`;

const InputWrapper = styled(FormGroup)`
  display: inline-block;
  width: 280px;
  margin-bottom: 0;
  margin-right: 30px;
`;

const DropdownSelect = styled(Select)`
  width: 140px;
  display: inline-block;
  margin-left: 10px;
  font-size: 12px;
`;

class Header extends Component {
  setFilter(key, value) {
    const { location, history } = this.props;
    const query = qs.parse(location.search);
    if (!value) {
      delete query[key];
    } else {
      query[key] = value;
    }
    delete query.page;
    history.push({
      ...location,
      search: qs.stringify(query)
    });
  }

  handleBrandChange = ({ value }) => {
    this.setFilter("brand", value);
  };

  handleSortChange = ({ value }) => {
    this.setFilter("sort", value === "latest" ? null : value);
  };

  handleSearchPress = e => {
    if (e.key === "Enter") {
      const value = e.target.value;
      this.setFilter("search", value);
    }
  };

  render() {
    const { location } = this.props;
    const query = qs.parse(location.search);
    return (
      <Container>
        <h4>Browse Online Watch</h4>

        <FilterContainer>
          <InputWrapper>
            <FormControl
              type="text"
              defaultValue={query.search}
              placeholder="Search"
              onKeyPress={this.handleSearchPress}
            />
          </InputWrapper>

          <DropdownSelect
            value={query.brand || ""}
            options={options}
            clearable={false}
            onChange={this.handleBrandChange}
          />
          <DropdownSelect
            value={query.sort || "latest"}
            options={[
              { value: "latest", label: "Latest" },
              { value: "low", label: "Price Low to High" },
              { value: "high", label: "Price High to Low" }
            ]}
            clearable={false}
            onChange={this.handleSortChange}
          />
        </FilterContainer>
      </Container>
    );
  }
}

export default withRouter(Header);
