import { View, Text, StyleSheet } from "react-native";
import Button from "../components/Button";
import React from "react";

const TP = [1, 2, 3, 4, 5, 6, 7];

const Home = ({ navigation }) => {
  return (
    <View style={Style.container}>
      <View style={Style.Box}>
        {TP.map((item, index) => (
          // <View key={ index } style={ Style.Box }>
          //   <Button title={`TP ${item}`} color={"blue"} onPress={() => navigation.navigate(`TP${ item }`)}/>
          // </View>
          <Button
            key={index}
            title={`TP ${item}`}
            onPress={() => navigation.navigate(`TP${item}`)}
          />
        ))}
      </View>
    </View>
  );
};

const Style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    flexWrap: "wrap",
    backgroundColor: "white",
  },
  Box: {
    maxHeight: 250,
    flexWrap: "wrap",
  },
  Text: {
    color: "white",
  },
});

export default Home;
