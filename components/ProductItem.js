import React from "react";
import {
  StyleSheet,
  TouchableNativeFeedback,
  View,
  Image,
  Text,
} from "react-native";

const ProductItem = (props) => {
  return (
    <View style={styles.product}>
      <View style={styles.touchable}>
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple("white")}
          onPress={() => {}}
          useForeground
        >
          <View style={styles.container}>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={{ uri: props.image }} />
            </View>
            <View style={styles.details}>
              <Text style={styles.title}>{props.title}</Text>
              <Text style={styles.createdAt}>{props.createdAt}</Text>
              <Text style={styles.price}>{props.price}</Text>
            </View>
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  product: {
    height: 135,
    backgroundColor: "white",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  touchable: {
    overflow: "hidden",
  },
  container: {
    flexDirection: "row",
  },
  imageContainer: {
    width: "35%",
    height: "100%",
    padding: 18,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 5,
  },
  details: {
    alignItems: "flex-start",
    height: "17%",
    paddingTop: 10,
  },
  title: {
    fontSize: 15,
    marginVertical: 2,
  },
  createdAt: {
    fontSize: 10,
    marginVertical: 2,
    color: "grey",
  },
  price: {
    fontSize: 15,
    color: "black",
    fontWeight: "bold",
  },
});
export default ProductItem;
