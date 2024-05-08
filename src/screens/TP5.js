import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";

const TP5 = () => {
  const language = ["Java", "Javascript", "Dart", "Python", "C#", "C++"];
  const [selectedLanguage, setSelectedLanguage] = useState(language[0]);

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.nativeValue);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sélectionnez un langage de programmation</Text>
      <View>
        {
          language.map((item) => (
            <Pressable style={styles.picker} onPress={() => {
              setSelectedLanguage(item);
            }}>
              <Text style={styles.text}>{item}</Text>
            </Pressable>
          ))
        }
      </View>
      <Text style={styles.selectedLanguageText}>
        Langage sélectionné : {selectedLanguage}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  picker: {
    width: 200,
    marginVertical: 10,
  },
  selectedLanguageText: {
    fontSize: 18,
    marginTop: 20,
  },
  text: {
    fontSize: 18,
    marginVertical: 2
  }
});

export default TP5;
