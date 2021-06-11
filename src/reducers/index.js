import {
  ADD_MOVIES,
  ADD_FAVOURITE,
  REMOVE_FAVOURITE,
  SET_SHOW_FAVOURITES,
} from "../actions";
import { combineReducers }  from 'redux';

const initialMoviesState = {
  list: [],
  favourites: [],
  showFavourites: false,
};

export function movies(state = initialMoviesState, action) {
  console.log('Movies Reducer');
  //intent to change the action
  switch (action.type) {
    case ADD_MOVIES:
      return { ...state, list: action.movies };
    case ADD_FAVOURITE:
      return { ...state, favourites: [action.movie, ...state.favourites] };
    case REMOVE_FAVOURITE:
      return {
        ...state,
        favourites: state.favourites.filter((item) => item !== action.movie),
      };
    case SET_SHOW_FAVOURITES:
      return { ...state, showFavourites: action.val };
    default:
      return state;
  }
}
const initialSearchState = { result: {} };
export function search(state = initialSearchState, action) {
  return state;
}
const initialRootState = {movies: initialMoviesState, search: initialSearchState}
// export default function rootReducer (state = initialRootState, action) {
//   console.log('Search Reducer');
//   return {
//     movies: movies(state.movies, action),
//     search: search(state.search, action)
//   };
// }

//The above method is already provided by Redux
export default combineReducers({movies,search});