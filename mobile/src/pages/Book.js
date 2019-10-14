import React from "react";
import { View, Text, SafeAreaView } from "react-native";

export default function Book({ navigation }) {
  const id = navigation.getParam("id");

  return (
    <SafeAreaView>
      <Text>{id}</Text>
    </SafeAreaView>
  );
}
