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
          onSelect={() => {
            props.navigation.navigate("ProductDetailScreen", {
              productImage: itemData.item.imageUrl,
              productOwnerId: itemData.item.ownerId,
              productTitle: itemData.item.title,
              productDescription: itemData.item.description,
              productPrice: itemData.item.price,
            });
          }}
        ></ProductItem>
      )}
    />
  );
};

export default ProductsOverviewScreen;
