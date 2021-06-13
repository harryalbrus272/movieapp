import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import "./index.css";
import App from "./components/App";
import rootReducer from "./reducers";
import reportWebVitals from "./reportWebVitals";
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
//export const StoreContext = createContext();
// //Dispatcher in place to dispatch the actions
// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: []
// });

// export function connect(callback) {
//   return function (Component) {
//     class ConnectedComponent extends React.Component {
//       constructor(props) {
//         super(props);
//         this.unsubscribe = this.props.store.subscribe(() => {
//           this.forceUpdate();
//         });
//       }

//       componentWillUnmount() {
//         this.unsubscribe();
//       }
//       render() {
//         const { store } = this.props;
//         const state = store.getState();
//         const dataToBeSentAsProps = callback(state);

//         return <Component dispatch={store.dispatch} {...dataToBeSentAsProps} />;
//       }
//     }

//     //Wrapper component to the above class based component so that the constructor has the access to the store
//     class ConnectedComponentWrapper extends React.Component {
//       render() {
//         return (
//           <StoreContext.Consumer>
//             {(store) => {
//               return <ConnectedComponent store={store} />;
//             }}
//           </StoreContext.Consumer>
//         );
//       }
//     }
//     return ConnectedComponentWrapper;
//   };
// }

console.log("After State", store.getState());
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App store={store} />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
