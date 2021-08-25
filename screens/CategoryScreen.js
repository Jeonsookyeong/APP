import React from "react";
import { FlatList } from "react-native-gesture-handler";

import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

const CategoryScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile
        category={itemData.item.category}
        icon={itemData.item.icon}
        onSelect={() => {
          props.navigation.navigate("CategoryProductScreen", {
            category: itemData.item.category,
          });
        }}
      />
    );
  };
  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={3}
    />
  );
};

export default CategoryScreen;
