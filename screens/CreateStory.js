import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

export default class CreateStory extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source ={require("../assets/logo.png")} style = {{width : 50, height:50}}></Image>
        <DropDownPicker items = {[
          {label:"Carro 1",
        value: require('../assets/logo.png')},
          {label:"Carro 2",
        value: require('../assets/logo.png')},
        ]}
        defaultValue = {require("../assets/logo.png")}></DropDownPicker>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   margin:20,
    alignItems: "center"
  }
});
