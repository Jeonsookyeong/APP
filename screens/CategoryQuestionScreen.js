import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useSelector } from "react-redux";

import ProductItem from "../components/ProductItem";

const CategoryQuestionScreen = (props) => {
  const category = props.route.params.category;
  props.navigation.setOptions({
    title: <Text style={styles.Header}>{category}</Text>,
  });
  // console.log(props.route.params.category);

  const products = useSelector((state) => state.products.availableProducts);

  const categoryProducts = products.filter(
    (products) => products.category === category
  );

  if (categoryProducts.length === 0) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 20 }}>No products found</Text>
      </View>
    );
  }
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

export default CategoryQuestionScreen;