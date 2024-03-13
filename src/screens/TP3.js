import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import Button from "../components/Button";

const TP3 = () => {
  const [Valeur1, setValeur1] = useState("");
  const [Valeur2, setValeur2] = useState("");
  const [Valeur3, setValeur3] = useState("");
  const [Result, setResult] = useState("");

  const Moyenne = () => {
    const result = (Number(Valeur1) + Number(Valeur2) + Number(Valeur3)) / 3;
    setResult(result)
  };

  const Max = () => {
    const arr = [Number(Valeur1), Number(Valeur2), Number(Valeur3)]
    setResult(Math.max(...arr))
  };

  const Min = () => {
    const arr = [Number(Valeur1), Number(Valeur2), Number(Valeur3)]
    setResult(Math.min(...arr))
  };

  const Clean = () => {
    setValeur1("");
    setValeur2("");
    setValeur3("");
    setResult("");
  };

  return (
    <View style={Style.container}>
      <Text style={{ fontSize: 25 }}>Calculatrice en trois valeurs</Text>
      <TextInput
        style={Style.TextInput}
        placeholder="Valeur 1"
        value={Valeur1}
        onChangeText={(number) => setValeur1(number)}
        keyboardType="numeric"
      />
      <TextInput
        style={Style.TextInput}
        placeholder="Valeur 2"
        value={Valeur2}
        onChangeText={(number) => setValeur2(number)}
        keyboardType="numeric"
      />
      <TextInput
        style={Style.TextInput}
        placeholder="Valeur 3"
        value={Valeur3}
        onChangeText={(number) => setValeur3(number)}
        keyboardType="numeric"
      />

      <View style={Style.Box}>
        <Button title="Moyenne" onPress={Moyenne} />
        <Button title="Max" onPress={Max} />
        <Button title="Min" onPress={Min} />
        <Button title="Clean" onPress={Clean} />
      </View>

      <View>
        <Text style={{ fontSize: 25 }}>Result :</Text>
        <Text style={{ fontSize: 25, margin: 20 }}>{`${Result}`}</Text>
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
  TextInput: {
    borderWidth: 1,
    padding: 15,
    marginVertical: 10,
  },
  Box: {
    paddingVertical: 10,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default TP3;
