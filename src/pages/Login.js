import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity
} from "react-native";
import Logo from "../components/Logo";
import Form from "../components/Form";

export default class Login extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#1c313a" barStyle="light-content" />
        <Logo />
        <Form type="Login" navigate={this.props.navigation} />
        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Don't have an account yet? </Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("SignupScreen")}
          >
            <Text style={styles.signupButton}>SignUp</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#718792",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  signupTextCont: {
    flexGrow: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingVertical: 16,
    flexDirection: "row"
  },
  signupText: {
    color: "rgba(255,255,255, 0.6)",
    fontSize: 16
  },
  signupButton: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500"
  }
});
