import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";

const TP = [1, 2, 3, 4, 5, 6, 7];

const Home = ({ navigation }) => {
  return (
    <View style={Style.container}>
      {TP.map((item, index) => (
        <View key={ index } style={ Style.Box }>
          <Button title={`TP ${item}`} color={"blue"} onPress={() => navigation.navigate(`TP${ item }`)}/>
        </View>
      ))}
    </View>
  );
};

const Style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    maxHeight: 300,
    flexWrap: "wrap",
  },
  Box: {
    backgroundColor: "blue",
    padding: 10,
    margin: 10,
    height: 60,
    gap: 10,
  },
  Text: {
    color: "white",
  },
});

export default Home;
