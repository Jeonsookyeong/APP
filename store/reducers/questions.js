// import PRODUCTS from "../../data/dummy-data";
// import Product from "../../models/products";

import { QUESTIONS } from "../../data/dummy-data";
import Question from "../../models/question";

// import { CREATE_PRODUCT } from "../actions/products";

const initialState = {
  availableQuestions: QUESTIONS,
};

export default (state = initialState, action) => {
  //   switch (action.type) {
  //     case CREATE_PRODUCT:
  //       const newProduct = new Product(
  //         new Date().toString(),
  //         "sk",
  //         "*분전",
  //         action.productData.title,
  //         action.productData.category,
  //         action.productData.imageUrl,
  //         action.productData.description,
  //         action.productData.price
  //       );
  //       return {
  //         ...state,
  //         availableProducts: state.availableProducts.concat(newProduct),
  //       };
  //   }
  return state;
};
