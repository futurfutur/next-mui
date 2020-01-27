import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";


import reducer from "./rootReducer";




export function initializeStore() {
  console.log('store initialized');
  return createStore(
    reducer,

    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
}
