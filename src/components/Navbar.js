import React, { Component } from "react";
import { data } from "../data";
import { addMovieToList, handleMovieSearch } from "../actions";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSearchResults: true,
      searchText: "",
    };
  }
  handleAddtoMovies = (movie) => {
    this.props.dispatch(addMovieToList(movie));
    this.setState({
      showSearchResults: false,
    });
  };
  handleSearch = () => {
    const { searchText } = this.state;
    this.props.dispatch(handleMovieSearch(searchText));
  };
  handleChange = (e) => {
    this.setState({
      searchText: e.target.value,
    });
  };
  render() {
    return (
      <div className="nav">
        <div className="search-container">
          <input onChange={this.handleChange} />
          <button onClick={this.handleSearch} id="search-btn">
            Search
          </button>
        </div>
      </div>
    );
  }
}
