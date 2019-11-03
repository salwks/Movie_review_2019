import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SearchPresenter = ({
  movieResults,
  tvResults,
  searchTerm,
  loading,
  error,
  handleSubmit
}) => null;

SearchPresenter.PropTypes = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  error: PropTypes.string,
  searchTerm: PropTypes.string,
  loading: PropTypes.bool.isRequire,
  handleSubmit: PropTypes.func.isRequired
};

export default SearchPresenter;
