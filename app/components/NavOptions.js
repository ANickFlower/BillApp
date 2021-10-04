import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";

const NavOptions = ({ data }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.key}
      renderItem={({ item }) => (
        <View style={styles.buttons}>
          <View style={styles.container}>
            <Image source={item.image} style={styles.image} />
            <View>
              <Text style={styles.textTitle}>Due Date:</Text>
              <Text style={styles.textContent}>{item.date}</Text>
            </View>
            <View>
              <Text style={styles.textTitle}>Balance:</Text>
              <Text style={styles.textContent}>${item.amount}</Text>
            </View>
          </View>
        </View>
      )}
    />
  );
};

export default NavOptions;

const styles = StyleSheet.create({
  buttons: {
    padding: 10,
    backgroundColor: "gainsboro",
    width: "100%",
    borderColor: "black",
    borderWidth: 2,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  textTitle: {
    fontWeight: "bold",
    fontSize: 20,
  },
  textContent: {
    fontSize: 30,
  },
});
