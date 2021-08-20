import React, { useEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { PRODUCTS } from "../data/dummy-data";
import ProductItem from "../components/ProductItem";

import ActionButton from "@logvinme/react-native-action-button";
import Icon from "react-native-vector-icons/Ionicons";
import { useSelector } from "react-redux";

const ProductsOverviewScreen = (props) => {
  // useEffect(() => {
  //   console.log(props.route.name);
  // }, [props.route.name]);

  const products = useSelector((state) => state.products.availableProducts);
  
  return (
    <View style={{ flex: 1, backgroundColor: "#f3f3f3" }}>
      {
        /* Rest of the app comes ABOVE the action button component !*/
        <FlatList
          data={products}
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
      }

      <ActionButton buttonColor="#FF8000">
        <ActionButton.Item
          buttonColor="#FF8000"
          title="동네홍보"
          onPress={() => {}}
        >
          <Icon name="newspaper" style={styles.actionButtonIcon} />
        </ActionButton.Item>

        <ActionButton.Item
          buttonColor="#FF8000"
          title="중고거래"
          onPress={() => {
            props.navigation.navigate("UsedTransactionScreen");
          }}
        >
          <Icon name="pencil" style={styles.actionButtonIcon} />
        </ActionButton.Item>
      </ActionButton>
    </View>
  );
};

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: "white",
  },
});

export default ProductsOverviewScreen;
