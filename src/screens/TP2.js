import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import React, { useState } from "react";

const TP2 = () => {
  const [UserName, setUserName] = useState("");
  const [Password, setPassword] = useState("");

  const HandleValid = () => {
    if (UserName === "admin" && Password === "admin") {
      Alert.alert('Valide', 'User Name and Password are correct');
    } else {
      Alert.alert('Error', 'User Name or Password are wrong')
      HandleCancel()
    }
  };

  const HandleCancel = () => {
    setUserName("");
    setPassword("");
  };
  return (
    <View style={Style.container}>
      <Text style={Style.Title}>Login</Text>

      <Text style={Style.label}>User Name</Text>
      <TextInput
        placeholder="Use Name"
        style={Style.TextInput}
        value={UserName}
        onChangeText={(Text) => setUserName(Text)}
      />

      <Text style={Style.label}>User Name</Text>
      <TextInput
        placeholder="Use Name"
        style={Style.TextInput}
        value={Password}
        onChangeText={(Text) => setPassword(Text)}
        secureTextEntry={true}
      />

      <Pressable style={Style.Button} onPress={HandleValid}>
        <Text style={Style.ButtonText}>Valider</Text>
      </Pressable>

      <Pressable style={Style.Button} onPress={HandleCancel}>
        <Text style={Style.ButtonText}>Cancel</Text>
      </Pressable>
    </View>
  );
};

const Style = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  Title: {
    fontSize: 30,
    marginTop: 70,
  },
  label: {
    marginVertical: 5,
  },
  TextInput: {
    marginBottom: 20,
    borderWidth: 1,
    padding: 10,
  },
  Button: {
    maxWidth: 100,
    padding: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#124076",
    marginBottom: 20,
  },
  ButtonText: {
    color: "white",
    fontWeight: "400",
  },
});

export default TP2;
