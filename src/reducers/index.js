export default function movies(state = [], action) {
  //intent to change the action
  if (action.type === "ADD_MOVIES") return action.movies;
  return state;
}
