import { ADD_MOVIES, ADD_FAVOURITE } from '../actions';

const initialMoviesState = {
  list: [],
  favourites: []
}

export default function movies(state = initialMoviesState, action) {
  //intent to change the action
  switch (action.type) {
    case ADD_MOVIES: return {...state, list: action.movies};
    case ADD_FAVOURITE: {console.log(action); return {...state, favourites: [action.movie, ...state.favourites]};}
    default: return state;
  }
}