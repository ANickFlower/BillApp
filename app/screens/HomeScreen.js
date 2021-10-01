import React from "react";
import { StyleSheet, Text, View } from "react-native";
import NavOptions from "../components/NavOptions";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <NavOptions />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
