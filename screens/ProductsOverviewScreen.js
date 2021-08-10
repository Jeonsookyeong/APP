import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { FAB } from "react-native-elements";
import PRODUCTS from "../data/dummy-data";
import ProductItem from "../components/ProductItem";

import Icon from "react-native-vector-icons/Ionicons";
const ProductsOverviewScreen = (props) => {
  return (
    <View style={{ flex: 1 }}>
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

      <FAB
        style={styles.fab}
        icon={<Icon name="add" size={30} color="white" />}

        placement="right"
        color="#FF8000"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  fab: {
    paddingBottom: 20,
  },
});

export default ProductsOverviewScreen;
