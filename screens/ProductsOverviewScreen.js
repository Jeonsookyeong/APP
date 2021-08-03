import React from "react";
import { FlatList } from "react-native";

import PRODUCTS from "../data/dummy-data";
import ProductItem from "../components/ProductItem";

const ProductsOverviewScreen = (props) => {
  return (
    <FlatList
      data={PRODUCTS}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <ProductItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          createdAt={itemData.item.createdAt}
          price={itemData.item.price}
        ></ProductItem>
      )}
    />
  );
};

export default ProductsOverviewScreen;
