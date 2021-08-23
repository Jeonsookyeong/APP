import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import QuestionItem from "../components/QuestionItem";

import ActionButton from "@logvinme/react-native-action-button";
import { Ionicons } from "@expo/vector-icons";

import ProductItem from "../components/ProductItem";
import { useSelector } from "react-redux";

const QScreen = (navigation) => {
  // console.log(navigation);
  const questions = useSelector((state) => state.questions.availableQuestions);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      {
        /* Rest of the app comes ABOVE the action button component !*/
        <FlatList
          data={questions}
          keyExtractor={(item) => item.id}
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
      }

      <ActionButton
        buttonColor="#FF8000"
        renderIcon={() => (
          <Ionicons name="pencil" style={styles.actionButtonIcon} />
        )}
      ></ActionButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  actionButtonIcon: {
    fontSize: 30,
    height: 30,
    color: "white",
  },
});
export default QScreen;
