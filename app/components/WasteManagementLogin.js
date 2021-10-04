import React, { useState } from "react";
import {
  WASTEMANAGEMENT_USERNAME,
  WASTEMANAGEMENT_PASSWORD,
  WASTEMANAGEMENT_APIKEY_AUTH,
  WASTEMANAGEMENT_APIKEY_CUSTID,
  WASTEMANAGEMENT_APIKEY_DATA,
} from "@env";
import { useDispatch } from "react-redux";
import { AsyncStorage } from "react-native";

async function login() {
  let response = await fetch("https://rest-api.wm.com/user/authenticate", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      apikey: WASTEMANAGEMENT_APIKEY_AUTH,
    },
    body: JSON.stringify({
      username: WASTEMANAGEMENT_USERNAME,
      password: WASTEMANAGEMENT_PASSWORD,
      locale: "en_US",
    }),
  });
  let res = await response.json();

  const id = res.data.id;
  const access_token = res.data.access_token;

  response = await fetch(
    `https://rest-api.wm.com/authorize/user/${id}/accounts?lang=en_US`,
    {
      method: "GET",
      headers: {
        oktatoken: access_token,
        apikey: WASTEMANAGEMENT_APIKEY_CUSTID,
      },
    }
  );
  res = await response.json();

  const custId = res.data.linkedAccounts[0].custAccountId;
  response = await fetch(
    `https://rest-api.wm.com/account/${custId}/invoice?lang=en_US&fromDate=2020-10-03&userId=${id}`,
    {
      method: "GET",
      headers: {
        apikey: WASTEMANAGEMENT_APIKEY_DATA,
        token: access_token,
      },
    }
  );
  res = await response.json();
  return res.body.balances.filter((item) => {
    if (item.type === "Current") {
      return item;
    }
  });
}

const WasteManagementLogin = async (data, setData) => {
  const wmInfo = await login();
  let object = {
    date: wmInfo[0].date.slice(5),
    amount: wmInfo[0].amount,
    key: "wasteManagement",
    image: require("../assets/wasteManagement.png"),
  };
  //check if there is wastemanagement data
  //if there is, replace it, if not make a new entry
  const updateData = [...data];
  const oldDataIndex = updateData.findIndex(
    (data) => data.name === "wasteManagement"
  );
  if (oldDataIndex >= 0) {
    //if there is an entry, replace it
    updateData.splice(oldDataIndex, 1, object);
  } else {
    //if there isnt an entry, add it
    updateData.push(object);
  }
  AsyncStorage.setItem("data", JSON.stringify(updateData))
    .then((data) => {
      if (data !== null) {
        setData(JSON.parse(data));
      }
    })
    .catch((error) => console.log(error));
};

export default WasteManagementLogin;
