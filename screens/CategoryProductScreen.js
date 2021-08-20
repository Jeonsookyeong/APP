import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useSelector } from "react-redux";

import ProductItem from "../components/ProductItem";

const CategoryProductScreen = (props) => {
  const category = props.route.params.category;
  props.navigation.setOptions({
    title: <Text style={styles.Header}>{category}</Text>,
  });
  // console.log(props.route.params.category);

  const products = useSelector((state) => state.products.availableProducts);

  const categoryProducts = products.filter(
    (products) => products.category === category
  );
  return (
    <FlatList
      data={categoryProducts}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <ProductItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          createdAt={itemData.item.createdAt}
          price={itemData.item.price}
          ///////////////
          category={itemData.item.category}
          onSelect={() => {
            // props.setIsVisible(false);
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  Header: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default CategoryProductScreen;
