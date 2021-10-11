import React from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import WelcomeScreen from "./screens/AppSwichNavigater/WelcomeScreen";
import HomeScreen from "./screens/HomeScreen";
import Signup from "./screens/Signup";
import "react-native-gesture-handler";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";

const App = () => <AppContainer />;

const LoginAppNavigater = createStackNavigator({
  WelcomeScreen: {
    screen: WelcomeScreen,
    navigationOptions: {
      header: null,
    },
  },
     Signup,
});

const AppSwichNavigater = createSwitchNavigator({
  LoginAppNavigater,
  HomeScreen,
});

const AppDrawerNavigater = createDrawerNavigator({
  HomeScreen,
});

const AppContainer = createAppContainer(AppSwichNavigater);

export default App;
