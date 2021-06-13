import React, { useEffect, useState, useReducer } from "react";
import { data } from "../data";
import { connect } from 'react-redux';
import Navbar from "./Navbar";
import MovieCard from "./Moviecard";
import { addMovies, setShowFavourite } from "../actions";
function App({ store }) {
  const { movies, search } = store.getState(); /// movies: {}, search: {}
  const { list, favourites, showFavourites } = movies;
  const [loaded, setLoaded] = useState(false);
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  const displayMovies = showFavourites ? favourites : list;
  useEffect(() => {
    //make an api call
    //dispatch an action
    store.subscribe(() => {
      //Subscribing to the state changes
      setLoaded(true);
      console.log(store.getState());
      forceUpdate();
    });
    store.dispatch(addMovies(data));
  }, []);
  let isMovieFavourite = (movie) => {
    const { favourites } = movies;
    const index = favourites.indexOf(movie);
    //Found the movie
    if (index !== -1) return true;
    return false;
  };

  //changing the display content between the tabs
  let onChangeTab = (val) => {
    store.dispatch(setShowFavourite(val));
  };

  return (
    <div className="App">
      <Navbar dispatch={store.dispatch} search={search} />
      <div className="main">
        <div className="tabs">
          <div
            className={`tab ${showFavourites ? "" : "active-tabs"}`}
            onClick={() => onChangeTab(false)}
          >
            Movies
          </div>
          <div
            className={`tab ${showFavourites ? "active-tabs" : ""}`}
            onClick={() => onChangeTab(true)}
          >
            Favourites
          </div>
        </div>
        <div className="list">
          {loaded &&
            displayMovies.map((movie, index) => (
              <MovieCard
                key={index}
                movie={movie}
                dispatch={store.dispatch}
                isMovieFavourite={isMovieFavourite(movie)}
              />
            ))}
        </div>
        {displayMovies.length === 0 && (
          <div className="no-movies">No Movies to show!</div>
        )}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    movies: state.movies,
    search: state.search,
  };
}
//These properties from store as props to the function
const connectedAppComponent = connect(mapStateToProps)(App);

export default connectedAppComponent;
