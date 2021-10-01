import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon, Input } from "react-native-elements";
import { WASTEMANAGEMENT_USERNAME } from "@env";

const WasteManagementScreen = () => {
  const navigation = useNavigation();
  const [value, setValue] = useState({
    userename: "",
    password: "",
  });
  const envfile = require;
  return (
    <View style={styles.container}>
      <Text style={styles.question}>
        What is your log in for Waste Management
      </Text>
      <View style={styles.boxes}>
        <Text style={styles.text}>Your Username</Text>
        <Input
          style={styles.input}
          placeholder={WASTEMANAGEMENT_USERNAME}
          onChangeText={(text) => setValue({ ...value, username: text })}
          leftIcon={
            <Icon
              name="person-circle-outline"
              type="ionicon"
              color="gainsboro"
              size={20}
            />
          }
        ></Input>
      </View>
      <View style={styles.boxes}>
        <Text style={styles.text}>Your Password</Text>
        <Input
          style={styles.input}
          placeholder="Password"
          onChangeText={(text) => setValue({ ...value, password: text })}
          secureTextEntry
          leftIcon={
            <Icon
              name="lock-closed-outline"
              type="ionicon"
              color="gainsboro"
              size={20}
            />
          }
        ></Input>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Text style={styles.submit}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WasteManagementScreen;

const styles = StyleSheet.create({
  boxes: {
    width: 250,
    borderBottomColor: "gainsboro",
    padding: 5,
    margin: 2,
  },
  button: {
    backgroundColor: "black",
    width: 150,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  input: {
    alignSelf: "center",
    color: "black",
    flexShrink: 1,
  },
  submit: {
    color: "white",
    fontWeight: "bold",
    padding: 5,
    fontSize: 20,
  },
  text: {
    color: "gainsboro",
  },
  question: {
    fontSize: 30,
    fontWeight: "bold",
    padding: 40,
  },
});
