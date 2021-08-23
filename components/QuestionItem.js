import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  StyleSheet,
  TouchableNativeFeedback,
  View,
  Image,
  Text,
} from "react-native";

const QuestionItem = (props) => {
  return (
    <View style={{ height: 200 }}>
      <View style={styles.product}>
        <View style={styles.touchable}>
          <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple("white")}
            onPress={props.onSelect}
            useForeground
          >
            <View style={{ margin: 10 }}>
              <View style={styles.categoryContainer}>
                <Text style={styles.category}>{props.category}</Text>
              </View>
              <Text style={styles.description}>{props.description}</Text>

              <View style={{ flexDirection: "row" }}>
                <View style={styles.ownerIdContainer}>
                  <Text style={styles.greyText}>{props.ownerId}</Text>
                </View>

                <Text style={styles.greyText}>{props.location}</Text>

                <View style={styles.createdAtContainer}>
                  <Text style={styles.greyText}>{props.createdAt}</Text>
                </View>
              </View>
            </View>
          </TouchableNativeFeedback>
        </View>
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
  product: {
    height: 135,
    backgroundColor: "white",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  categoryContainer: {
    marginBottom: 15,
    padding: 1,
    height: 20,
    width: 55,
    // borderColor: "black",
    // borderWidth: 5,
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2,
  },
  category: {
    fontSize: 12,
  },
  description: {
    fontSize: 16,
    marginBottom: 30,
  },
  ownerIdContainer: {
    marginRight: 10,
  },
  createdAtContainer: {
    flex: 1,
    alignItems: "flex-end",
    marginRight: 10,
  },
  greyText: {
    color: "grey",
  },
  bottomContainer: {
    height: 50,
    borderBottomWidth: 8,
    borderBottomColor: "#ccc",
    flexDirection: "row",
  },
  touchable: {
    overflow: "hidden",
  },
  sTouchable: {
    width: "18%",
    height: "100%",
    // backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
});
export default QuestionItem;
