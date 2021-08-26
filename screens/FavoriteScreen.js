import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import ProductItem from "../components/ProductItem";

const FavoriteScreen = (props) => {
  const favProducts = useSelector((state) => state.products.favoriteProducts);
  return (
    <FlatList
      data={favProducts}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <ProductItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          createdAt={itemData.item.createdAt}
          price={itemData.item.price}
          category={itemData.item.category}
          onSelect={() => {
            props.navigation.navigate("ProductDetailScreen", {
              productImage: itemData.item.imageUrl,
              productOwnerId: itemData.item.ownerId,
              productTitle: itemData.item.title,
              productDescription: itemData.item.description,
              productPrice: itemData.item.price,
              productId: itemData.item.id,
            });
          }}
        ></ProductItem>
      )}
    />
  );
};

const styles = StyleSheet.create({});

export default FavoriteScreen;
