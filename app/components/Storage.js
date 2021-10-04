import { AsyncStorage } from "react-native";

export const addData = (name, data, newData) => {
  const newDataList = [...data, newData];
  AsyncStorage.setItem(name, JSON.stringify(newDataList))
    .then((data) => {
      if (data !== null) {
        setData(JSON.parse(data));
      }
    })
    .catch((error) => console.log(error));
};
