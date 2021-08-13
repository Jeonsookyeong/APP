import React from "react";
import { ScrollView, TextInput, StyleSheet } from "react-native";

const UsedTransactionScreen = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <TextInput style={styles.image} placeholder="Image Url" />
      <TextInput style={styles.title} placeholder="제목" />
      <TextInput style={styles.category} placeholder="카테고리" />
      <TextInput style={styles.price} placeholder="가격" />
      <TextInput
        style={styles.description}
        placeholder="흥해읍에 올릴 게시글 내용을 작성해주세요. 가품 및 판매금지품목은 게시가&#13;&#10;제한될 수 있어요."
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
