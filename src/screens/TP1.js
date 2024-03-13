import { View, Text, StyleSheet } from "react-native";
import React from "react";

const TP1 = () => {
  return (
    <View style={Style.container}>
      <Text style={Style.Text}>
        Laouar Mohamed Mouaad Group G5
      </Text>
    </View>
  );
};

const Style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "white",
  },
  Text: {
    color: "blue",
    fontSize: 30
  },
});

export default TP1;
