import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";
import { storeData, getData } from "../utils/index";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: {
        email: "",
        password: ""
      },
      signup: {
        email: "",
        password: "",
        cnf_passwd: ""
      }
    };
  }

  getValues = (key, Val) => {
    if (this.props.type === "Login") {
      let login = this.state.login;
      login = Object.assign({}, login, { [key]: Val });
      this.setState({ login });
    } else if (this.props.type === "Signup") {
      let signup = this.state.signup;
      signup = Object.assign({}, signup, { [key]: Val });
      this.setState({ signup }, () => storeData(this.state.signup));
    }
  };

  validateEntry = () => {
    let signup = getData();
    if (
      this.props.type === "Login" &&
      this.state.login["email"] === signup["email"] &&
      this.state.login["password"] === signup["password"]
    ) {
      this.props.navigate.navigate("homeScreen");
    } else if (
      this.props.type === "Signup" &&
      this.state.signup["password"] === this.state.signup["cnf_passwd"]
    ) {
      this.props.navigate.navigate("LoginScreen");
    }
  };

  render() {
    return (
      <View style={{ textAlign: "center" }}>
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Email"
          placeholderTextColor="#fff"
          selectionColor="#fff"
          keyboardType="email-address"
          onSubmitEditing={() => this.password.focus()}
          onChangeText={value => this.getValues("email", value)}
          value={this.state.login["email"] || this.state.signup["email"]}
        />
        <TextInput
          style={styles.inputBox}
          secureTextEntry={true}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Password"
          placeholderTextColor="#fff"
          ref={input => (this.password = input)}
          onChangeText={value => this.getValues("password", value)}
          value={this.state.login["password"] || this.state.signup["password"]}
        />
        {this.props.type === "Signup" ? (
          <TextInput
            style={styles.inputBox}
            secureTextEntry={true}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="Confirm Password"
            placeholderTextColor="#fff"
            onChangeText={value => this.getValues("cnf_passwd", value)}
            value={this.state.signup["cnf_passwd"]}
          />
        ) : null}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={this.validateEntry}>
            {this.props.type}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  inputBox: {
    width: 300,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#fff",
    marginVertical: 10,
    paddingVertical: 9
  },
  button: {
    backgroundColor: "#1c313a",
    borderRadius: 25,
    width: 300,
    marginVertical: 10,
    paddingVertical: 12
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#fff",
    textAlign: "center"
  }
});
