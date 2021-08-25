import React, { useCallback, useEffect, useState } from "react";
import {
  ScrollView,
  TextInput,
  StyleSheet,
  View,
  Text,
  Picker,
} from "react-native";
import { useDispatch } from "react-redux";

// import * as productsAction from "../store/actions/products";
import * as questionAction from "../store/actions/questions";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

const QuestionScreen = (props) => {
  const [category, setCategory] = useState("카테고리");
  const [description, setDescription] = useState("");
  const [done, setDone] = useState(false);

  //   useEffect(() => {
  //     return () => {
  //       if (description === "") {
  //         setDone(false);
  //       } else {
  //         setDone(true);
  //       }
  //     };
  //   }, [description]);

  const dispatch = useDispatch();

  const submitHandler = useCallback(() => {
    console.log("submitting");
    dispatch(questionAction.createQuestion(category, description));
    // props.navigation.goBack();
  }, [dispatch, category, description]);

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
              color={done ? "black" : "grey"}
              onPress={() => {
                submitHandler();
                props.navigation.goBack(); /////////////////////////
              }}
            />
          </View>
        </HeaderButtons>
      </View>
    ),
  });
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.category}>
        <Text />
        <Picker
          selectedValue={category}
          onValueChange={(itemValue, itemIndex) => {
            console.log(itemValue);
            setCategory(itemValue);
          }}
          //   mode={"dropdown"}
        >
          <Picker.Item label="게시글의 주제를 선택해주세요" />
          <Picker.Item label="우리동네질문" value="우리동네질문" />
          <Picker.Item label="동네사건사고" value="동네사건사고" />
          <Picker.Item label="동네맛집" value="동네맛집" />
          <Picker.Item label="동네소식" value="동네소식" />
          <Picker.Item label="분실/실종센터" value="분실/실종센터" />
          <Picker.Item label="일상" value="일상" />
          <Picker.Item label="해주세요" value="해주세요" />
          <Picker.Item label="취미생활" value="취미생활" />
          <Picker.Item label="고양이" value="고양이" />
          <Picker.Item label="강아지" value="강아지" />
          <Picker.Item label="건강" value="건강" />
          <Picker.Item label="살림" value="살림" />
          <Picker.Item label="인테리어" value="인테리어" />
          <Picker.Item label="교육/학원" value="교육/학원" />
          <Picker.Item label="동네사진전" value="동네사진전" />
          <Picker.Item label="출산/육아" value="출산/육아" />
          <Picker.Item label="기타" value="기타" />
        </Picker>
      </View>

      <TextInput
        style={styles.description}
        placeholder="흥해읍 근처 이웃과 우리 동네 관련된 질문이나 이야기를 해보세요."
        value={description}
        onChangeText={(text) => {
          setDescription(text);
          setDone(true);
        }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  category: {
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

export default QuestionScreen;
