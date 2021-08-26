export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const FAVORITE_PRODUCT = "FAVORITE_PRODUCT";

export const createProduct = (
  imageUrl,
  title,
  category,
  price,
  description
) => {
  return {
    type: CREATE_PRODUCT,
    productData: {
      imageUrl,
      title,
      category,
      price,
      description,
    },
  };
};

export const favoriteProduct = (id) => {
  return { type: FAVORITE_PRODUCT, productId: id };
};
