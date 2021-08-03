import React from "react";
import {} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import ProductsOverviewScreen from "../screens/ProductsOverviewScreen";
import ProductDetailScreeen from "../screens/ProductDetailScreen";
const ProductsStackNavigator = createStackNavigator();

export const ProductStackNavigator = () => {
  return (
    <NavigationContainer>
      <ProductsStackNavigator.Navigator>
        <ProductsStackNavigator.Screen
          name="ProductsOverviewScreen"
          component={ProductsOverviewScreen}
        />
        <ProductsStackNavigator.Screen
          name="ProductDetailScreen"
          component={ProductDetailScreeen}
        />
      </ProductsStackNavigator.Navigator>
    </NavigationContainer>
  );
};

export default ProductStackNavigator;
