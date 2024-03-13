import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import Home from "../screens/Home";
import TP1 from "../screens/TP1";
import TP2 from "../screens/TP2";
import TP3 from "../screens/TP3";
import TP4 from "../screens/TP4";
import TP5 from "../screens/TP5";
import TP6 from "../screens/TP6";
import TP7 from "../screens/TP7";

const RootNavigation = () => {
  return (
    <SafeAreaView style={Style.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="TP3">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="TP1" component={TP1} />
          <Stack.Screen name="TP2" component={TP2} />
          <Stack.Screen name="TP3" component={TP3} />
          <Stack.Screen name="TP4" component={TP4} />
          <Stack.Screen name="TP5" component={TP5} />
          <Stack.Screen name="TP6" component={TP6} />
          <Stack.Screen name="TP7" component={TP7} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const Style = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight,
    // marginHorizontal: 20
  },
});

export default RootNavigation;
