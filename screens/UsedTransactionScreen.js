import React from "react";
import { View, Text, StyleSheet } from "react-native";

const UsedTransactionScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={{ fontSize: 30 }}>중고거래 글쓰기</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default UsedTransactionScreen;
