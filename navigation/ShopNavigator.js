import React from "react";
import { StyleSheet, Text, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

import ProductsOverviewScreen from "../screens/ProductsOverviewScreen";
import ProductDetailScreeen from "../screens/ProductDetailScreen";
import Screen from "../screens/Screen";

import { Ionicons } from "@expo/vector-icons";

const ProductsStackNavigator = createStackNavigator();

export const ProductStackNavigator = () => {
  return (
    <ProductsStackNavigator.Navigator>
      <ProductsStackNavigator.Screen
        name="ProductsOverviewScreen"
        component={ProductsOverviewScreen}
        options={{
          title: <Text style={styles.Header}>흥해읍</Text>,
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="search"
                iconName={
                  Platform.OS === "android"
                    ? "md-search-outline"
                    : "ios-search-outline"
                }
                iconSize={26}
                onPress={() => {}}
              />
              <Item
                title="category"
                iconName={
                  Platform.OS === "android"
                    ? "md-menu-outline"
                    : "ios-menu-outline"
                }
                iconSize={30}
                onPress={() => {}}
              />
              <Item
                title="notice"
                iconName={
                  Platform.OS === "android"
                    ? "md-notifications-outline"
                    : "ios-notifications-outline"
                }
                iconSize={26}
                onPress={() => {}}
              />
            </HeaderButtons>
          ),
        }}
      />
      <ProductsStackNavigator.Screen
        name="ProductDetailScreen"
        component={ProductDetailScreeen}
      />
    </ProductsStackNavigator.Navigator>
  );
};

const ScreensStackNavigator = createStackNavigator();

export const ScreenStackNavigator = () => {
  return (
    <ScreensStackNavigator.Navigator>
      <ScreensStackNavigator.Screen
        name="Screen"
        component={Screen}
        options={{
          title: <Text style={styles.Header}>흥해읍</Text>,
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="search"
                iconName={
                  Platform.OS === "android"
                    ? "md-search-outline"
                    : "ios-search-outline"
                }
                iconSize={26}
                onPress={() => {}}
              />
              <Item
                title="category"
                iconName={
                  Platform.OS === "android"
                    ? "md-menu-outline"
                    : "ios-menu-outline"
                }
                iconSize={30}
                onPress={() => {}}
              />
              <Item
                title="notice"
                iconName={
                  Platform.OS === "android"
                    ? "md-notifications-outline"
                    : "ios-notifications-outline"
                }
                iconSize={26}
                onPress={() => {}}
              />
            </HeaderButtons>
          ),
        }}
      />
    </ScreensStackNavigator.Navigator>
  );
};

const BottomTabsbNavigator = createMaterialBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <NavigationContainer>
      <BottomTabsbNavigator.Navigator
        screenOptions={{
          headerShown: false,
        }}
        barStyle={{ backgroundColor: "white" }}
        shifting={false}
        // inactiveColor='black'
      >
        <BottomTabsbNavigator.Screen
          name="홈"
          component={ProductStackNavigator}
          options={{
            tabBarLabel: "홈",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home-outline" size={25} /> //home-sharp
            ),
          }}
        />
        <BottomTabsbNavigator.Screen
          name="동네생활"
          component={ScreenStackNavigator}
          options={{
            tabBarLabel: "동네생활",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="newspaper-outline" size={25} /> //newspaper
            ),
          }}
        />
        <BottomTabsbNavigator.Screen
          name="내 근처"
          component={ScreenStackNavigator}
          options={{
            tabBarLabel: "내 근처",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="location-outline" size={25} /> //location
            ),
          }}
        />
        <BottomTabsbNavigator.Screen
          name="채팅"
          component={ScreenStackNavigator}
          options={{
            tabBarLabel: "채팅",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="chatbubbles-outline" size={25} /> //chatbubbles-sharp
            ),
          }}
        />
        <BottomTabsbNavigator.Screen
          name="나의 당근"
          component={ScreenStackNavigator}
          options={{
            tabBarLabel: "나의 당근",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="md-person-outline" size={25} /> //md-person-sharp
            ),
          }}
        />
      </BottomTabsbNavigator.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  Header: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
export default BottomTabNavigator;
