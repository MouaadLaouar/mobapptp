import { View, Text, StyleSheet, Pressable, TextInput } from "react-native";
import React, { useState } from "react";
import Button from "../components/Button";
import AntDesign from "@expo/vector-icons/AntDesign";

const TP4 = () => {
  const [stars, setStars] = useState([
    {
      id: 0,
      name: "staro",
    },
    {
      id: 1,
      name: "staro",
    },
    {
      id: 2,
      name: "staro",
    },
    {
      id: 3,
      name: "staro",
    },
    {
      id: 4,
      name: "staro",
    },
  ]);
  const [Name, SetName] = useState("");
  const [Comment, SetComment] = useState("");
  const handleStars = (id) => {
    const newStar = stars.map((star) => {
      if (star.id <= id) {
        return { ...star, name: "star" };
      } else {
        return { ...star, name: "staro" };
      }
    });
    setStars(newStar);
  };

  const Send = () => {
    alert("Merci pour avoir donner votre avis");
    Clear()
  };

  const Clear = () => {
    SetName("");
    SetComment("");
    const newStar = stars.map((star) => {
        return { ...star, name: "staro" };
    });
    setStars(newStar);
  }
  return (
    <View style={Style.container}>
      <TextInput
        style={Style.TextInput}
        placeholder="Product Name"
        value={Name}
        onChangeText={(text) => SetName(text)}
      />
      <View style={Style.stars}>
        {stars.map((star) => (
          <Pressable key={star.id} onPress={() => handleStars(star.id)}>
            <AntDesign name={star.name} size={24} color="#FFC100" />
          </Pressable>
        ))}
      </View>
      <TextInput
        style={Style.TextInput}
        placeholder="add comment"
        multiline={true}
        value={Comment}
        onChangeText={(text) => SetComment(text)}
      />
      <View style={Style.Button}>
        <Button title="Send" onPress={Send} />
        <Button title="Cancel" onPress={Clear} />
      </View>
    </View>
  );
};

const Style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
  TextInput: {
    borderWidth: 1,
    padding: 15,
    marginVertical: 10,
  },
  Button: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
});

export default TP4;
