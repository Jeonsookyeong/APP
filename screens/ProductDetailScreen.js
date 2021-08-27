import React, { useCallback } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

import { useDispatch, useSelector } from "react-redux";
import { favoriteProduct } from "../store/actions/products";

const ProductDetailScreeen = (props) => {
  const productImage = props.route.params.productImage;
  const productOwnerId = props.route.params.productOwnerId;
  const productTitle = props.route.params.productTitle;
  const productDescription = props.route.params.productDescription;
  const productPrice = props.route.params.productPrice;
  const productId = props.route.params.productId;

  const dispatch = useDispatch();

  const favoriteProductHandler = useCallback(() => {
    dispatch(favoriteProduct(productId));
  }, [dispatch, productId]);

  const currentProductIsFavorite = useSelector((state) =>
    state.products.favoriteProducts.some((product) => product.id === productId)
  );

  props.navigation.setOptions({
    headerRight: () => (
      <View>
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="favorite"
            iconName={currentProductIsFavorite ? "heart" : "heart-outline"}
            iconSize={26}
            color="white"
            onPress={favoriteProductHandler}
          />
          <Item
            title="share"
            iconName={"share-social-outline"}
            iconSize={30}
            color="white"
            onPress={() => {}}
          />
          <Item
            title="vertical"
            iconName={"ellipsis-vertical"}
            iconSize={30}
            color="white"
            onPress={() => {}}
          />
        </HeaderButtons>
      </View>
    ),
  });
  return (
    <ScrollView style={styles.screen}>
      <Image style={styles.image} source={{ uri: productImage }} />
      <View style={styles.actions}>
        <Ionicons name="person-circle-outline" size={50} />
        <Text style={styles.ownerId}>{productOwnerId}</Text>
      </View>

      <Text style={styles.title}>{productTitle}</Text>
      <Text style={styles.description}>{productDescription}</Text>

      <Text style={styles.price}>{productPrice}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    height: 400,
  },
  actions: {
    flexDirection: "row",
    height: 90,
    alignItems: "flex-start",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    paddingTop: 20,
    marginHorizontal: 15,
  },
  ownerId: {
    paddingTop: 10,
    fontSize: 15,
    fontWeight: "bold",
  },
  title: {
    paddingLeft: 20,
    paddingTop: 30,
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    height: 150,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    paddingLeft: 20,
    paddingTop: 30,
    fontSize: 14,
  },
  price: {
    fontSize: 20,
    color: "#888",
    textAlign: "center",
    marginVertical: 20,
  },
});

export default ProductDetailScreeen;
