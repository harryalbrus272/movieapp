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