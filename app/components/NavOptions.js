import { useNavigation } from "@react-navigation/core";
import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const data = [
  {
    id: "0",
    title: "spectrum",
    image: require("../assets/spectrum.png"),
    screen: "SpectrumScreen",
    dueDate: "11/21",
    balance: "201",
  },
  {
    id: "1",
    title: "ameren",
    image: require("../assets/ameren.png"),
    screen: "AmerenScreen",
    dueDate: "02/15",
    balance: "356",
  },
  {
    id: "3",
    title: "wasteManagement",
    image: require("../assets/wasteManagement.png"),
    screen: "WasteManagementScreen",
    dueDate: "9/30",
    balance: "50",
  },
];

const NavOptions = () => {
  const navigation = useNavigation();

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.screen)}
          style={styles.buttons}
        >
          <View style={styles.container}>
            <Image source={item.image} style={styles.image} />
            <View>
              <Text style={styles.textTitle}>Due Date:</Text>
              <Text style={styles.textContent}>{item.dueDate}</Text>
            </View>
            <View>
              <Text style={styles.textTitle}>Balance:</Text>
              <Text style={styles.textContent}>${item.balance}</Text>
            </View>
          </View>
        </TouchableOpacity>
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
