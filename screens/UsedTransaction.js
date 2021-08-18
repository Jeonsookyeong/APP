import React, { useCallback, useEffect, useState } from "react";
import { ScrollView, TextInput, StyleSheet, View, Text } from "react-native";

import { useSelector, useDispatch } from "react-redux";
import * as productsAction from "../store/actions/products";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

const UsedTransactionScreen = (props) => {
  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  const submitHandler = useCallback(() => {
    console.log("submitting");
    dispatch(
      productsAction.createProduct(
        imageUrl,
        title,
        category,
        price,
        description
      )
    );
  }, [dispatch, imageUrl, title, category, price, description]);

  // useCallback(() => {
  // console.log(imageUrl);
  // console.log(title);
  // console.log(category);
  // console.log(price);
  // console.log(description);
  // }, [imageUrl, title, category, price, description]);

  // console.log(props.navigation);
  // useEffect(() => {
  //   props.navigation.setParams({ submit: submitHandler });
  // }, [submitHandler]);

  // useEffect(() => {
  //   props.navigation.setOptions({
  //     headerRight: () => (
  //       <View style={{ paddingRight: 20 }}>
  //         <HeaderButtons HeaderButtonComponent={HeaderButton}>
  //           <View
  //             style={{
  //               borderRadius: 50,
  //               height: 50,
  //               width: 50,
  //               overflow: "hidden",
  //               justifyContent: "center",
  //             }}
  //           >
  //             <Item
  //               title={<Text style={{ fontSize: 20 }}>완료</Text>}
  //               color="orange"
  //               onPress={submitHandler}
  //             />
  //           </View>
  //         </HeaderButtons>
  //       </View>
  //     ),
  //   });
  // }, []); /////////////////////////////////
  props.navigation.setOptions({
    headerRight: () => (
      <View style={{ paddingRight: 20 }}>
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <View
            style={{
              borderRadius: 50,
              height: 50,
              width: 50,
              overflow: "hidden",
              justifyContent: "center",
            }}
          >
            <Item
              title={<Text style={{ fontSize: 20 }}>완료</Text>}
              color="orange"
              onPress={submitHandler}
            />
          </View>
        </HeaderButtons>
      </View>
    ),
  });
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <TextInput
        style={styles.image}
        placeholder="Image Url"
        value={imageUrl}
        onChangeText={(text) => {
          setImageUrl(text);
          // console.log(text);
        }}
      />
      <TextInput
        style={styles.title}
        placeholder="제목"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <TextInput
        style={styles.category}
        placeholder="카테고리"
        value={category}
        onChangeText={(text) => setCategory(text)}
      />
      <TextInput
        style={styles.price}
        // keyboardType="numeric"
        placeholder="가격"
        value={price}
        onChangeText={(text) => setPrice(text)}
      />
      <TextInput
        style={styles.description}
        placeholder="흥해읍에 올릴 게시글 내용을 작성해주세요. 가품 및 판매금지품목은 게시가&#13;&#10;제한될 수 있어요."
        value={description}
        onChangeText={(text) => setDescription(text)}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 100,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginHorizontal: 20,
  },
  title: {
    height: 70,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginHorizontal: 20,
  },
  category: {
    height: 70,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginHorizontal: 20,
  },
  price: {
    height: 70,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginHorizontal: 20,
  },
  description: {
    marginHorizontal: 20,
    paddingTop: 20,
  },
});

export default UsedTransactionScreen;
