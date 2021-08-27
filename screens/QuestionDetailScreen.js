import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { TouchableNativeFeedback } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import QuestionItem from "../components/QuestionItem";

const QuestionDetailScreen = (props) => {
  const questionCategory = props.route.params.questionCategory;
  const questionDescription = props.route.params.questionDescription;
  const questionOwnerId = props.route.params.questionOwnerId;
  const questionLocation = props.route.params.questionLocation;
  const questionCreatedAt = props.route.params.questionCreatedAt;

  // console.log(navigation);

  return (
    <View style={styles.screen}>
      <View style={styles.actions}>
        <View style={styles.categoryContainer}>
          <Text style={styles.category}>{questionCategory}</Text>
        </View>

        <View style={{ flexDirection: "row" }}>
          <View>
            <Ionicons name="person-circle-outline" size={50} />
          </View>
          <View style={{ flexDirection: "column" }}>
            <Text style={styles.ownerId}>{questionOwnerId}</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.location}>{questionLocation}</Text>
              <Text style={styles.createAt}>{questionCreatedAt}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.description}>
        <Text style={{ margin: 15 }}>{questionDescription}</Text>
      </View>

      <View>
        <View style={styles.bottomContainer}>
          <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple("white")}
            onPress={() => {}}
            useForeground
          >
            <View style={styles.sTouchable}>
              <View style={{ marginRight: 5 }}>
                <Ionicons name="happy-outline" size={18} color="grey" />
              </View>
              <Text style={styles.greyText}>공감하기</Text>
            </View>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple("white")}
            onPress={() => {}}
            useForeground
          >
            <View style={styles.sTouchable}>
              <View style={{ marginRight: 5 }}>
                <Ionicons name="chatbubble-outline" size={18} color="grey" />
              </View>
              <Text style={styles.greyText}>댓글쓰기</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "white",
  },
  actions: {
    flexDirection: "column",
    height: 100,
    alignItems: "flex-start",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    paddingTop: 20,
    marginHorizontal: 15,
  },
  categoryContainer: {
    // marginBottom: 15,
    padding: 1,
    height: 20,
    width: 55,
    // borderColor: "black",
    // borderWidth: 5,
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2,
    marginBottom: 5,
  },
  category: {
    fontSize: 12,
  },
  ownerId: {
    paddingTop: 5,
    fontSize: 15,
    fontWeight: "bold",
  },
  location: {
    fontSize: 13,
    color: "grey",
  },
  createAt: {
    fontSize: 13,
    color: "grey",
  },
  description: {
    height: 100,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    // marginHorizontal: 15,
  },
  bottomContainer: {
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    flexDirection: "row",
  },
  sTouchable: {
    width: "18%",
    height: "100%",
    // backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  greyText: {
    color: "grey",
  },
});
export default QuestionDetailScreen;
