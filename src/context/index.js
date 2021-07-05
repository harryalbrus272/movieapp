import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import React, { createContext } from 'react';
//Curried form of function logger
//logger(obj)(next)(action)
// const logger = function ({ dispatch, getState }) {
//   return function (next){
//     return function (action) {
//       //middleware code
//       console.log('ACTION_TYPE = ', action.type);
//       next(action);
//     }
//   }
// };
//Currying the above middleware
const logger =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    if (typeof action !== "function")
      console.log("ACTION_TYPE = ", action.type);
    next(action);
  };
// const thunk =
//   ({ dispatch, getState }) =>
//   (next) =>
//   (action) => {
//     if(typeof action === "function") {
//       action(dispatch);
//       return;
//     }
//     next(action);
//   };
//We have used redux-thunk library to work around the same funtion in our logic
const store = createStore(rootReducer, applyMiddleware(logger, thunk));

// //Dispatcher in place to dispatch the actions
// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: []
// });
  
export const UserContext = createContext("Hello from Context");

console.log("After State", store.getState());