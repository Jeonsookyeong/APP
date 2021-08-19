import React, { useCallback, useEffect, useState } from "react";
import {
  ScrollView,
  TextInput,
  StyleSheet,
  View,
  Text,
  Picker,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import * as productsAction from "../store/actions/products";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

const UsedTransactionScreen = (props) => {
  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("카테고리");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  /////////////////////////////////////////
  const [selectedValue, setSelectedValue] = useState("카테고리");

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
  // }, []); //////
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
              onPress={() => {
                submitHandler();
                props.navigation.goBack();
              }}
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
      {/* <TextInput
        style={styles.category}
        placeholder="카테고리"
        value={category}
        onChangeText={(text) => setCategory(text)}
      /> /////////////////////////////////////////////////////*/}

      <View style={styles.category}>
        <Text />
        <Picker
          placeholder="Select navigator app"
          selectedValue={category}
          onValueChange={(itemValue, itemIndex) => {
            console.log(itemValue);
            setCategory(itemValue);
          }}
          // label="카테고리"
        >
          <Picker.Item label="카테고리" value="카테고리" />
          <Picker.Item label="디지털기기" value="디지털기기" />
          <Picker.Item label="생활가전" value="생활가전" />
          <Picker.Item label="가구/인테리어" value="가구/인테리어" />
          <Picker.Item label="유아동" value="유아동" />
          <Picker.Item label="생활/가공식품" value="생활/가공식품" />
          <Picker.Item label="유아도서" value="유아도서" />
          <Picker.Item label="스포츠/레저" value="스포츠/레저" />
          <Picker.Item label="여성잡화" value="여성잡화" />
          <Picker.Item label="여성의류" value="생활/가공식품" />
          <Picker.Item label="남성패션/잡화" value="남성패션/잡화" />
          <Picker.Item label="게임/취미" value="게임/취미" />
          <Picker.Item label="뷰티/미용" value="뷰티/미용" />
          <Picker.Item label="반려동물용품" value="반려동물용품" />
          <Picker.Item label="도서/티켓/음반" value="도서/티켓/음반" />
          <Picker.Item label="식물" value="식물" />
          <Picker.Item label="기타 중고물품" value="기타 중고물품" />
          <Picker.Item label="삽니다" value="삽니다" />
        </Picker>
      </View>

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
