import React, { useEffect, useState } from "react";
import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./Moviecard";
import { addMovies } from "../actions";
function App({ store }) {
  const { list } = store.getState();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    //make an api call
    //dispatch an action
    store.subscribe(() => {
      //Subscribing to the state changes
      setLoaded(true);
    });
    store.dispatch(addMovies(data));
  }, []);
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <div className="tabs">
          <div className="tab">Movies</div>
          <div className="tab">Favourites</div>
        </div>
        <div className="list">
          {loaded && list.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
