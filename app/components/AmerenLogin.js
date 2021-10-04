import React from "react";
import { StyleSheet, Text, View } from "react-native";

const login = async () => {
  response = await fetch(
    `https://rest-api.wm.com/account/000234045813003/invoice?userId=00u75eezkzoIKIPMt2p7`,
    {
      method: "GET",
      headers: {
        apikey: "615F2EFC82FF8BB2F864",
        token:
          "eyJraWQiOiJlaHJjSnpyVm83bnlOLUJ0R1J6c2VnNDVmc3JrempQTEdrTzg0MWsyejVjIiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULktmd09qWE9DTVgxb25UNnM5SXlERGgyMk12S3BvXy1OWHc5dmJLVHpmRXMub2FyMTFwcjVodzdERjB5TUEycDciLCJpc3MiOiJodHRwczovL3Nzb2xvZ2luLndtLmNvbS9vYXV0aDIvYXVzMTcwbWluanRRT1JlNHUycDciLCJhdWQiOiJodHRwczovL3d3dy53bS5jb20iLCJpYXQiOjE2MzMyMTUzMTMsImV4cCI6MTYzMzIxODkxMywiY2lkIjoiMG9hNDRiajEwclZMRTJuczQycDciLCJ1aWQiOiIwMHU3NWVlemt6b0lLSVBNdDJwNyIsInNjcCI6WyJvZmZsaW5lX2FjY2VzcyIsIm9wZW5pZCJdLCJzdWIiOiJkZXN0aW55bGF4dG9uMjAxNEBnbWFpbC5jb20ifQ.NuDfkGz5i_L6f1Z82toai6kIGZ3k5bOsfqjCQIaCXTcVuH_I8Z9RuJmSfbzMh9ubGzIBYMtQym0aXP9e-IRY2GfmprOPUiyteGJvO5mM5u_5Pmuduf0IfKsvR444k5aYqKN6UXlj9LDH9tweNY_TXY41U0J0Q1WiJloGRGRfzKMsALIVnsIX6zhJ5UXI7FX8Pkujtyr4D7iBHsHw5_k17VsiwR-t8WLWYK2jrCQNTRwVSayyB-1PDFygUFdsHuPF8M6rv01JJENPU94qbpIupCxEdUg_zn16MoFlcUBarILBxQjuMPAWt1KZDhTTzs_wKDc1ErFFzDwvQaZ1vKQoMw",
      },
    }
  );
  res = await response.json();
};

const AmerenLogin = () => {
  login();
};

export default AmerenLogin;

const styles = StyleSheet.create({});
