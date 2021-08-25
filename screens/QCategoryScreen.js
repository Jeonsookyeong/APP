import React from "react";
import { FlatList } from "react-native-gesture-handler";

import { QCATEGORIES } from "../data/dummy-data";
// import CategoryGridTile from "../components/CategoryGridTile";
import QCategoryGridTile from "../components/QCategoryGridTile";

const QCategoryScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <QCategoryGridTile
        category={itemData.item.category}
        image={itemData.item.image}
        onSelect={() => {
          //   props.navigation.navigate("CategoryProductScreen", {
          //     category: itemData.item.category,
          //   });
        }}
      />
    );
  };
  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={QCATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

export default QCategoryScreen;
