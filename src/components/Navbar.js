import React, { Component } from "react";
import { addMovieToList, handleMovieSearch } from "../actions";
import { connect } from 'react-redux';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    const { result, showSearchResults } = this.props.search;
    return (
      <div className="nav">
        <div className="search-container">
          <input onChange={this.handleChange} />
          <button onClick={this.handleSearch} id="search-btn">
            Search
          </button>
          {showSearchResults && (
            <div className="search-results">
              <div className="search-result">
                <img src={result.Poster} alt="search-pic" />
                <div className="movie-info">
                  <span>{result.Title}</span>
                  <button onClick={() => this.handleAddtoMovies(result)}>
                    Add to Movies
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
function mapStateToProps({ search }) {
  return {
    search,
  };
}

export default connect(mapStateToProps)(Navbar);