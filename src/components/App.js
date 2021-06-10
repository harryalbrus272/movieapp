import React, { useEffect, useState, useReducer } from "react";
import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./Moviecard";
import { addMovies } from "../actions";
function App({ store }) {
  const { list } = store.getState();
  const [loaded, setLoaded] = useState(false);
  const [, forceUpdate] = useReducer(x => x + 1, 0);

  useEffect(() => {
    //make an api call
    //dispatch an action
    store.subscribe(() => {
      //Subscribing to the state changes
      setLoaded(true);
      forceUpdate();
    });
    store.dispatch(addMovies(data));
  }, []);
  let isMovieFavourite = (movie) => {
    const { favourites } = store.getState();
    const index = favourites.indexOf(movie);
    //Found the movie
    if (index !== -1) return true;
    return false;
  };

  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <div className="tabs">
          <div className="tab">Movies</div>
          <div className="tab">Favourites</div>
        </div>
        <div className="list">
          {loaded &&
            list.map((movie, index) => (
              <MovieCard
                key={index}
                movie={movie}
                dispatch={store.dispatch}
                isMovieFavourite={isMovieFavourite(movie)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
