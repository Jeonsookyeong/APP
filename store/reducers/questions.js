// import PRODUCTS from "../../data/dummy-data";
// import Product from "../../models/products";

import { QUESTIONS } from "../../data/dummy-data";
import Question from "../../models/question";

// import { CREATE_PRODUCT } from "../actions/products";
import { CREATE_QUESTION } from "../actions/questions";

const initialState = {
  availableQuestions: QUESTIONS,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_QUESTION:
      const newQuestion = new Question(
        new Date().toString(),
        action.productData.category,
        "sk",
        "흥해읍",
        action.productData.description,
        "*분전"
      );
      return {
        ...state,
        availableQuestions: state.availableQuestions.concat(newQuestion),
      };
  }
  return state;
};
