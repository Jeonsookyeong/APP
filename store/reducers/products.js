import PRODUCTS from "../../data/dummy-data";
import Product from "../../models/products";

import { CREATE_PRODUCT } from "../actions/products";
import { FAVORITE_PRODUCT } from "../actions/products";

const initialState = {
  availableProducts: PRODUCTS,
  products: PRODUCTS,
  favoriteProducts: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PRODUCT:
      const newProduct = new Product(
        new Date().toString(),
        "sk",
        "*분전",
        action.productData.title,
        action.productData.category,
        action.productData.imageUrl,
        action.productData.description,
        action.productData.price
      );
      return {
        ...state,
        availableProducts: state.availableProducts.concat(newProduct),
      };

    case FAVORITE_PRODUCT:
      const existingIndex = state.favoriteProducts.findIndex(
        (product) => product.id === action.productId // action
      );
      if (existingIndex >= 0) {
        const updatedFavProducts = [...state.favoriteProducts];
        updatedFavProducts.splice(existingIndex, 1);
        return { ...state, favoriteProducts: updatedFavProducts };
      } else {
        const product = state.products.find(
          (product) => product.id === action.productId
        );
        return {
          ...state,
          favoriteProducts: state.favoriteProducts.concat(product),
        };
      }
  }
  return state;
};
// new Date().toString()
