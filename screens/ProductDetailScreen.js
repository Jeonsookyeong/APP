import React, { useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  Button,
  StyleSheet,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ProductDetailScreeen = (props) => {
  const productImage = props.route.params.productImage;
  const productOwnerId = props.route.params.productOwnerId;
  const productTitle = props.route.params.productTitle;
  const productDescription = props.route.params.productDescription;
  const productPrice = props.route.params.productPrice;
  
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
