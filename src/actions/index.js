//Actions express the intent to bring the change to the state in reducer
//this decides the flow of the application. Actions act as breadcrumbs for the application
// {
//     type: 'INCREASE_COUNT',
//     movies: [],
//     user: [],
// }
// {
//     type: 'DECREASE_COUNT'
// }

//action type
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVOURITE = 'ADD_FAVOURITE';
export const REMOVE_FAVOURITE = 'REMOVE_FAVOURITE';
export const SET_SHOW_FAVOURITES = 'SET_SHOW_FAVOURITES';

//action creators
export function addMovies(movies) {
  return {
    type: 'ADD_MOVIES',
    movies
  }
}
export function addFavourite(movie) {
  return {
    type: 'ADD_FAVOURITE',
    movie
  }
}
export function removeFavourite(movie) {
  return {
    type: 'REMOVE_FAVOURITE',
    movie
  }
}
export function setShowFavourite(val) {
  return {
    type: 'SET_SHOW_FAVOURITES',
    val
  }
}