export const CREATE_QUESTION = "CREATE_QUESTION";

export const createQuestion = (
  category,
  description
) => {
  return {
    type: CREATE_QUESTION,
    productData: {
      category,
      description,
    },
  };
};
