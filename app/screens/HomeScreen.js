import React, { useState } from "react";
import { AsyncStorage, StyleSheet, Text, View } from "react-native";
import NavOptions from "../components/NavOptions";
import AppLoading from "expo-app-loading";
import WasteManagementLogin from "../components/WasteManagementLogin";

const HomeScreen = () => {
  const initialData = [];
  const [ready, setReady] = useState(false);
  const [data, setData] = useState(initialData);

  const loadEverything = async () => {
    await WasteManagementLogin(data, setData);
    loadData();
  };

  const loadData = () => {
    AsyncStorage.getItem("data")
      .then((data) => {
        if (data !== null) {
          setData(JSON.parse(data));
        }
      })
      .catch((error) => console.log(error));
  };

  if (!ready) {
    return (
      <AppLoading
        startAsync={loadEverything}
        onFinish={() => setReady(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <View style={styles.container}>
      <NavOptions data={data} setData={setData} />
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
