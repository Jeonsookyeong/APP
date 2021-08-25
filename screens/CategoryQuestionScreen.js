import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  Image,
  TouchableNativeFeedback,
} from "react-native";

import { useSelector } from "react-redux";

// import ProductItem from "../components/ProductItem";
import QuestionItem from "../components/QuestionItem";

const CategoryQuestionScreen = (props) => {
  const Qcategory = props.route.params.category;
  const image = props.route.params.image;

  props.navigation.setOptions({
    title: "",
    headerTransparent: true,
  });
  // console.log(props.route.params.category);

  const questions = useSelector((state) => state.questions.availableQuestions);

  const categoryQuestions = questions.filter(
    (questions) => questions.category === Qcategory
  );

  return (
    <ScrollView style={styles.screen}>
      <Image style={{ height: 250, width: "100%" }} source={{ uri: image }} />
      <View
        style={{
          height: 180,
          backgroundColor: "white",
          borderBottomColor: "#ccc",
          borderBottomWidth: 8,
        }}
      >
        <View
          style={{
            padding: 15,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>{Qcategory}</Text>
          <Text style={{ paddingTop: 15 }}>
            궁금한 것을 물어보세요! 흥해읍 근처 이웃이 친절하게 진짜 정보를
            알려줄 거예요.
          </Text>
          <TouchableNativeFeedback
            onPress={() => {
              props.navigation.navigate("QCategoryScreen");
            }}
          >
            <View
              style={{ width: 85, alignItems: "center", marginVertical: 10 }}
            >
              <Text style={{ color: "grey" }}>다른 관심주제 보기 ></Text>
            </View>
          </TouchableNativeFeedback>
        </View>
        <View>
          <TouchableNativeFeedback onPress={() => {}}>
            <View
              style={{
                height: 49,
                borderTopColor: "#ccc",
                borderTopWidth: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "orange" }}>{Qcategory} 주제로 글쓰기</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
      <FlatList
        data={categoryQuestions}
        kkeyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <QuestionItem
            category={itemData.item.category}
            description={itemData.item.description}
            ownerId={itemData.item.ownerId}
            location={itemData.item.location}
            createdAt={itemData.item.createdAt}
            onSelect={() => {
              // props.setIsVisible(false);
              // props.navigation.navigate("ProductDetailScreen", {
              //   productImage: itemData.item.imageUrl,
              //   productOwnerId: itemData.item.ownerId,
              //   productTitle: itemData.item.title,
              //   productDescription: itemData.item.description,
              //   productPrice: itemData.item.price,
              // });
            }}
          ></QuestionItem>
        )}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "white",
  },
  Header: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});

export default CategoryQuestionScreen;
