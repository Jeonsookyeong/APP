import React, {
  createRef,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from "react";
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
import UsedTransactionScreen from "../screens/UsedTransaction";
import CategoryScreen from "../screens/CategoryScreen";
import CategoryProductScreen from "../screens/CategoryProductScreen";
import QuestionOverviewScreen from "../screens/QuestionOverviewScreen";
import QuestionScreen from "../screens/QuestionScreen";
import QCategoryScreen from "../screens/QCategoryScreen";
import CategoryQuestionScreen from "../screens/CategoryQuestionScreen";
import QuestionDetailScreen from "../screens/QuestionDetailScreen";

import { Ionicons } from "@expo/vector-icons";
import MyCarrot from "../screens/MyCarrot";

const ProductsStackNavigator = createStackNavigator();

export const ProductStackNavigator = (props) => {
  // console.log(props);
  const { setIsVisible } = props;
  return (
    <ProductsStackNavigator.Navigator
      screenOptions={({ route }) => {
        // console.log(route); /////////////////////
        // console.log(params.submit);
      }}
    >
      <ProductsStackNavigator.Screen
        name="ProductsOverviewScreen"
        // component={ProductsOverviewScreen}
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
                onPress={() => {
                  props.navigation.navigate("CategoryScreen");
                }}
                //////////////
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
      >
        {(props) => {
          // useEffect(() => {
          //   console.log(props.route.name);
          // }, [props.route.name]);
          // console.log(props.navigation);
          return (
            <ProductsOverviewScreen {...props} setIsVisible={setIsVisible} />
          );
        }}
      </ProductsStackNavigator.Screen>
      <ProductsStackNavigator.Screen
        name="ProductDetailScreen"
        // component={ProductDetailScreeen}
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
                  // console.log(props.navigation);
                  // this.props.navigator.pop()
                  ///////////////////////////////////////////////////////////////////
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
      >
        {(props) => (
          <ProductDetailScreeen {...props} setIsVisible={setIsVisible} />
        )}
      </ProductsStackNavigator.Screen>

      <ProductsStackNavigator.Screen
        name="UsedTransactionScreen"
        component={UsedTransactionScreen}
        options={({ route, navigation }) => ({
          title: <Text style={styles.Header}>중고거래 글쓰기</Text>,

          tabBarIcon: ({ focused }) => {
            let iconName;

            if (route.name === "UsedTransactionScreen") {
              iconName = focused ? "" : "";
            }
            return <Ionicons name={iconName} size={25} />;
          },

          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <HeaderBackButton
                onPress={() => {
                  props.navigation.goBack();
                }}
              />
            </HeaderButtons>
          ),
          // headerRight: () => (
          //   <View style={{ paddingRight: 20 }}>
          //     <HeaderButtons HeaderButtonComponent={HeaderButton}>
          //       <View
          //         style={{
          //           borderRadius: 50,
          //           height: 50,
          //           width: 50,
          //           overflow: "hidden",
          //           justifyContent: "center",
          //         }}
          //       >
          //         <Item
          //           title={<Text style={{ fontSize: 20 }}>완료</Text>}
          //           color="orange"
          //           onPress={() => {
          //             route.params.submit();
          //           }}
          //         />
          //       </View>
          //     </HeaderButtons>
          //   </View>
          // ),
        })}
      ></ProductsStackNavigator.Screen>

      <ProductsStackNavigator.Screen
        name="CategoryScreen"
        // component={ProductDetailScreeen}
        options={{
          title: <Text style={styles.Header}>카테고리</Text>,
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <HeaderBackButton
                tintColor="black"
                onPress={() => {
                  props.navigation.goBack();
                }}
              />
            </HeaderButtons>
          ),
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
            </HeaderButtons>
          ),
        }}
      >
        {(props) => <CategoryScreen {...props} setIsVisible={setIsVisible} />}
      </ProductsStackNavigator.Screen>

      <ProductsStackNavigator.Screen
        name="CategoryProductScreen"
        // component={ProductDetailScreeen}
        options={{
          // title: <Text style={styles.Header}>카테고리</Text>,
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <HeaderBackButton
                tintColor="black"
                onPress={() => {
                  props.navigation.goBack();
                }}
              />
            </HeaderButtons>
          ),
        }}
      >
        {(props) => (
          <CategoryProductScreen {...props} setIsVisible={setIsVisible} />
        )}
      </ProductsStackNavigator.Screen>
    </ProductsStackNavigator.Navigator>
  );
};

// onPress={() => {
// // console.log(route.params);
// ////////////////////////////////////////////////
// // this.props.navigation.getParam("submit");
// // console.log(route);
// route.param.submit;
// // route.params.submit();
// }}
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

const QuestionOverviewScreensStackNavigator = createStackNavigator();

export const QuestionOverviewScreenStackNavigator = (props) => {
  const [off, setOff] = useState(true);

  return (
    <QuestionOverviewScreensStackNavigator.Navigator>
      <QuestionOverviewScreensStackNavigator.Group>
        <QuestionOverviewScreensStackNavigator.Screen
          name="QuestionOverviewScreen"
          component={QuestionOverviewScreen}
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
                <Item /////////////////
                  title="category"
                  iconName={"options-outline"}
                  iconSize={30}
                  onPress={() => {
                    props.navigation.navigate("QCategoryScreen");
                  }}
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
          name="QuestionDetailScreen"
          // component={QuestionDetailScreen}
          options={{
            headerTitle: "",
            headerLeft: () => (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <HeaderBackButton
                  onPress={() => {
                    // console.log(props.navigation);
                    // this.props.navigator.pop()

                    // props.navigation.goBack();
                    props.navigation.navigate("QuestionOverviewScreen");
                  }}
                />
              </HeaderButtons>
            ),
            headerRight: () => (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                  title="notifications"
                  iconName={off ? "notifications-off-outline" : "notifications"}
                  iconSize={26}
                  onPress={() => setOff(!off)}
                />
                <Item /////////////////
                  title="share"
                  iconName={"share-social-outline"}
                  iconSize={30}
                  onPress={() => {}}
                />
                <Item
                  title="notice"
                  iconName={"ellipsis-vertical"}
                  iconSize={26}
                  onPress={() => {}}
                />
              </HeaderButtons>
            ),
          }}
        >
          {(props) => <QuestionDetailScreen {...props} />}
        </ProductsStackNavigator.Screen>
      </QuestionOverviewScreensStackNavigator.Group>

      <QuestionOverviewScreensStackNavigator.Group
        screenOptions={{ presentation: "modal" }}
      >
        <QuestionOverviewScreensStackNavigator.Screen
          name="QuestionScreen"
          component={QuestionScreen}
          options={({ route, navigation }) => ({
            title: <Text style={styles.Header}>동네생활 글쓰기</Text>,
            headerLeft: () => (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <HeaderBackButton
                  onPress={() => {
                    ///////////////////////////////////////////////////  ?
                    // props.navigation.goBack();
                    props.navigation.navigate("QuestionOverviewScreen");
                  }}
                />
              </HeaderButtons>
            ),
          })}
        />

        <QuestionOverviewScreensStackNavigator.Screen
          name="QCategoryScreen"
          // component={ProductDetailScreeen}
          options={{
            title: <Text style={styles.Header}>동네생활 주제목록</Text>,
            headerLeft: () => (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <HeaderBackButton
                  tintColor="black"
                  onPress={() => {
                    props.navigation.navigate("QuestionOverviewScreen");
                  }}
                />
              </HeaderButtons>
            ),
            headerRight: () => (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                  title="search"
                  iconName={"options-outline"}
                  iconSize={26}
                  onPress={() => {}}
                />
              </HeaderButtons>
            ),
          }}
        >
          {(props) => <QCategoryScreen {...props} />}
        </QuestionOverviewScreensStackNavigator.Screen>
        <QuestionOverviewScreensStackNavigator.Screen
          name="CategoryQuestionScreen"
          // component={ProductDetailScreeen}
          options={{
            // title: <Text style={styles.Header}>카테고리</Text>,
            headerLeft: () => (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <HeaderBackButton
                  tintColor="white"
                  onPress={() => {
                    props.navigation.navigate("QCategoryScreen");
                  }}
                />
              </HeaderButtons>
            ),
          }}
        >
          {(props) => <CategoryQuestionScreen {...props} />}
        </QuestionOverviewScreensStackNavigator.Screen>
      </QuestionOverviewScreensStackNavigator.Group>
    </QuestionOverviewScreensStackNavigator.Navigator>
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
  const [isVisible, setIsVisible] = useState(true);

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
        barStyle={{
          backgroundColor: "white",
          display: isVisible ? "flex" : "none",
        }}
        shifting={false}
        inactiveColor="black"
      >
        <BottomTabsbNavigator.Screen
          name="홈"
          options={{
            tabBarLabel: "홈",
          }}
        >
          {(props) => (
            <ProductStackNavigator {...props} setIsVisible={setIsVisible} />
          )}
        </BottomTabsbNavigator.Screen>

        <BottomTabsbNavigator.Screen
          name="동네생활"
          component={QuestionOverviewScreenStackNavigator}
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
