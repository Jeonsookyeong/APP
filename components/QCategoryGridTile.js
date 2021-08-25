import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableNativeFeedback,
  ImageBackground,
} from "react-native";


const QCategoryGridTile = (props) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TouchableNativeFeedback onPress={props.onSelect} useForeground>
        <View style={styles.grid}>
          <ImageBackground
            source={{ uri: props.image }}
            resizeMode="cover"
            style={styles.image}
          >
            <Text style={{ color: "white" }}>{props.category}</Text>
          </ImageBackground>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  grid: {
    height: 80,
    width: 160,
    marginBottom: 15,
    marginTop: 15,
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft: 15,
    paddingBottom: 7,
  },
});

export default QCategoryGridTile;
