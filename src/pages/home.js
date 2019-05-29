import React, { Component } from "react";
import {
  Text,
  ScrollView,
  View,
  StyleSheet,
  DrawerLayoutAndroid,
  ToastAndroid,
  StatusBar,
  ImageBackground
} from "react-native";

export default class Home extends Component {
  static navigationOptions = {
    title: "Home"
  };

  render() {
    ToastAndroid.show("Logged In!!", ToastAndroid.SHORT);
    var navigationView = (
      <View style={{ flex: 1, backgroundColor: "rgba(210, 218, 214, 0.5)" }}>
        <Text style={{ margin: 10, fontSize: 15, textAlign: "left" }}>
          I'm in the Drawer!
        </Text>
      </View>
    );
    return (
      <DrawerLayoutAndroid
        drawerWidth={200}
        //drawerBackgroundColor="rgba(40, 175, 53, 0.63)"
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => navigationView}
      >
        <View style={styles.container}>
          <ImageBackground
            source={require("../Images/background.jpg")}
            style={styles.imageBg}
          >
            <StatusBar backgroundColor="#1c313a" barStyle="light-content" />
            <Text style={styles.text}>Hello Prabhat</Text>
            <Text style={styles.text}>Welcome to React Native World!</Text>
          </ImageBackground>
          {/* <BottomTab /> */}
        </View>
      </DrawerLayoutAndroid>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //backgroundColor: "#718792",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500"
  },
  imageBg: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%"
  }
});
