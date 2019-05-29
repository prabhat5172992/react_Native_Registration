import React from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";

class AboutAcreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>About!</Text>
      </View>
    );
  }
}

class ContactsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Contacts!</Text>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  About: { screen: AboutAcreen },
  Contacts: { screen: ContactsScreen }
});

export default createAppContainer(TabNavigator);
