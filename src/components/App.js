import {useEffect} from 'react';
import { data } from '../data';
import Navbar from "./Navbar";
import MovieCard from "./Moviecard";
function App({ store }) {
  const movies = store.getState();

  useEffect(() => {
    //make an api call
    //dispatch an action
    store.subscribe(() => {
      //Subscribing to the state changes
      console.log('Updated');
    });
    console.log('state', store.getState());
    store.dispatch({
      type: 'ADD_MOVIES',
      movies: data
    });    
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
          {movies.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
