import React from "react";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";

import ShopNavigator from "./navigation/ShopNavigator";
// import ShopNavigator2 from "./navigation/ShopNavigator2"

import productsReducer from "./store/reducers/products";
import questionReducer from "./store/reducers/questions";

const rootReducer = combineReducers({
  products: productsReducer,
  questions: questionReducer,
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
}
