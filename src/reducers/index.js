import {
  ADD_MOVIES,
  ADD_FAVOURITE,
  REMOVE_FAVOURITE,
  SET_SHOW_FAVOURITES,
  ADD_SEARCH_RESULT,
  ADD_MOVIES_TO_LIST,
} from "../actions";
import { combineReducers } from "redux";

const initialMoviesState = {
  list: [],
  favourites: [],
  showFavourites: false,
};

export function movies(state = initialMoviesState, action) {
  console.log("Movies Reducer");
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
    case ADD_MOVIES_TO_LIST:
      return {
        ...state,
        list: [action.movie, ...state.list],
      };
    default:
      return state;
  }
}
const initialSearchState = { result: {}, showSearchResults: false };
export function search(state = initialSearchState, action) {
  switch (action.type) {
    case ADD_SEARCH_RESULT:
      return { ...state, result: action.movie, showSearchResults: true };
    case ADD_MOVIES_TO_LIST:
      return {
        ...state,
        showSearchResults: false,
      };
    default:
      return state;
  }
}
const initialRootState = {
  movies: initialMoviesState,
  search: initialSearchState,
};
// export default function rootReducer (state = initialRootState, action) {
//   console.log('Search Reducer');
//   return {
//     movies: movies(state.movies, action),
//     search: search(state.search, action)
//   };
// }

//The above method is already provided by Redux
export default combineReducers({ movies, search });
