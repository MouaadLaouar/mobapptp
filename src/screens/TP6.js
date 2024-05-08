import { View, Text, StyleSheet, TextInput, Alert } from "react-native";
import React, { useState } from "react";

const TP6 = () => {
  const [template, setTemplate] = useState([
    [
      { value: -1, editable: true },
      { value: 3, editable: false },
      { value: -1, editable: true },
      { value: 1, editable: false },
    ],
    [
      { value: 1, editable: false },
      { value: -1, editable: true },
      { value: 3, editable: false },
      { value: 2, editable: false },
    ],
    [
      { value: 3, editable: false },
      { value: -1, editable: true },
      { value: 1, editable: false },
      { value: -1, editable: true },
    ],
    [
      { value: -1, editable: true },
      { value: 1, editable: false },
      { value: -1, editable: true },
      { value: 3, editable: false },
    ],
  ]);

  const handleChange = (value, row, col) => {
    if (value >= 1 && value <= 4) {
      const newTemplate = [...template];
      newTemplate[row][col] = { value: value, editable: true };
      setTemplate(newTemplate);
    } else {
      const newTemplate = [...template];
      newTemplate[row][col] = { value: -1, editable: true };
      setTemplate(newTemplate);
    }
  };

  return (
    <View style={Style.container}>
      <Text style={Style.Title}>Sudoku Game</Text>
      <View>
        {template.map((row, rowIndex) => (
          <View key={rowIndex} style={Style.row}>
            {row.map((cell, cellIndex) => (
              <View key={cellIndex} style={Style.cell}>
                {cell.editable ? (
                  <TextInput
                    style={Style.cellText}
                    value={cell.value === -1 ? "" : cell.value}
                    onChangeText={(value) =>
                      handleChange(value, rowIndex, cellIndex)
                    }
                    keyboardType="numeric"
                  />
                ) : (
                  <Text style={Style.Text}>{cell.value}</Text>
                )}
              </View>
            ))}
          </View>
        ))}
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
  Title: {
    fontSize: 18,
    fontWeight: "400",
    marginBottom: 10
  },
  row: {
    flexDirection: "row",
  },
  cell: {
    width: 50,
    height: 50,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cellText: {
    fontSize: 18,
    height: 50,
    width: 50,
    textAlign: "center",
  },
  Text: {
    fontSize: 16,
    color: "blue"
  }
});

export default TP6;
