import React from "react";
import { StyleSheet, Text, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

import { HeaderBackButton } from "@react-navigation/elements";

import ProductsOverviewScreen from "../screens/ProductsOverviewScreen";
import ProductDetailScreeen from "../screens/ProductDetailScreen";
import Screen from "../screens/Screen";
import FavoriteScreen from "../screens/FavoriteScreen";

import { Ionicons } from "@expo/vector-icons";
import MyCarrot from "../screens/MyCarrot";

const ProductsStackNavigator = createStackNavigator();

export const ProductStackNavigator = (props) => {
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
        options={{
          tabBarIcon: ({ focused }) => {
            let iconName;

            if (route.name === "ProductDetailScreen") {
              iconName = focused ? "" : "";
            }
            return <Ionicons name={iconName} size={25} />;
          },

          headerTransparent: true,
          headerTitle: "",
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <HeaderBackButton
                tintColor="white"
                onPress={() => {
                  props.navigation.goBack();
                }}
              />
              <Item
                title="home"
                color="white"
                iconName="home-outline"
                iconSize={26}
                onPress={() => {
                  props.navigation.navigate("ProductsOverviewScreen");
                }}
              />
            </HeaderButtons>
          ),
        }}
      />
    </ProductsStackNavigator.Navigator>
  );
};

const MyCarrotsStacksNavigator = createStackNavigator();

export const MyCarrotStackNavigator = () => {
  return (
    <MyCarrotsStacksNavigator.Navigator>
      <MyCarrotsStacksNavigator.Screen
        name="My Carrot"
        component={MyCarrot}
        options={{
          title: <Text style={styles.Header}>나의 당근</Text>,
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="notice"
                iconName="settings-outline"
                iconSize={26}
                onPress={() => {}}
              />
            </HeaderButtons>
          ),
        }}
      />

      <MyCarrotsStacksNavigator.Screen
        name="FavoriteScreen"
        component={FavoriteScreen}
        options={{
          title: <Text style={styles.Header}>관심목록</Text>,
        }}
      />
    </MyCarrotsStacksNavigator.Navigator>
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
        screenOptions={({ route }) => ({
          headerShown: false,

          tabBarIcon: ({ focused }) => {
            let iconName;

            if (route.name === "홈") {
              iconName = focused ? "home-sharp" : "home-outline";
            } else if (route.name === "동네생활") {
              iconName = focused ? "newspaper" : "newspaper-outline";
            } else if (route.name === "내 근처") {
              iconName = focused ? "location" : "location-outline";
            } else if (route.name === "채팅") {
              iconName = focused ? "chatbubbles-sharp" : "chatbubbles-outline";
            } else if (route.name === "나의 당근") {
              iconName = focused ? "person-sharp" : "person-outline";
            }

            return <Ionicons name={iconName} size={25} />;
          },
        })}
        barStyle={{ backgroundColor: "white" }}
        shifting={false}
        inactiveColor="black"
      >
        <BottomTabsbNavigator.Screen
          name="홈"
          component={ProductStackNavigator}
          options={{
            tabBarLabel: "홈",
          }}
        />
        <BottomTabsbNavigator.Screen
          name="동네생활"
          component={ScreenStackNavigator}
          options={{
            tabBarLabel: "동네생활",
          }}
        />
        <BottomTabsbNavigator.Screen
          name="내 근처"
          component={ScreenStackNavigator}
          options={{
            tabBarLabel: "내 근처",
          }}
        />
        <BottomTabsbNavigator.Screen
          name="채팅"
          component={ScreenStackNavigator}
          options={{
            tabBarLabel: "채팅",
          }}
        />
        <BottomTabsbNavigator.Screen
          name="나의 당근"
          component={MyCarrotStackNavigator}
          options={{
            tabBarLabel: "나의 당근",
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
