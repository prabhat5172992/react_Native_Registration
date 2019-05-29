import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  Image,
  FlatList
} from "react-native";
import { formatData } from "../utils/service/index";

export default class Home extends Component {
  static navigationOptions = {
    title: "Details"
  };

  render() {
    const { navigation } = this.props;
    const flags = navigation.getParam("countries", "No Data");
    console.log("This is Details Page---", flags);
    console.log("Aeeat length", flags.length);
    return (
      <View style={styles.main}>
        <StatusBar backgroundColor="#1c313a" barStyle="light-content" />
        <View style={styles.container}>
          <Text style={styles.text}>Welcome to Details Page!</Text>
          <View style={styles.imageList}>
            <FlatList
              data={flags}
              renderItem={({ item }) => (
                <Image
                  key={item.key}
                  source={{
                    uri: "https://facebook.github.io/react/logo-og.png"
                  }}
                  style={{ width: 350, height: 300, marginVertical: 5 }}
                />
              )}
            />
            {/* {flags &&
              flags.map(item => {
                return (
                  <Image
                    key={item.key}
                    source={{ uri: "https://restcountries.eu/data/ind.svg" }}
                    style={{ width: 400, height: 300 }}
                  />
                );
              })} */}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: "100%",
    flex: 1,
    backgroundColor: "#718792",
    alignItems: "center",
    justifyContent: "center"
  },
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500"
  },
  imageList: {
    flexGrow: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
    width: "100%"
  }
});
