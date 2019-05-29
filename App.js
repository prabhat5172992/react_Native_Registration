import React, { Component } from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import Login from "./src/pages/Login";
import Signup from "./src/pages/Signup";
import Home from "./src/pages/home";
import Details from "./src/pages/Details";
import { createAppContainer, createStackNavigator } from "react-navigation";

const RootStack = createStackNavigator(
  {
    LoginScreen: {
      screen: Login
    },
    SignupScreen: {
      screen: Signup
    },
    homeScreen: {
      screen: Home
    },
    DetailsScreen: {
      screen: Details
    }
  },
  {
    initialRouteName: "LoginScreen"
  }
);

RootStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible
  };
};

const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#718792",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
