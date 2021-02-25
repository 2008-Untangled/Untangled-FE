import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import App from "../App/App";
import Room from "../Room/Room";
import Overview from "../Overview/Overview";

export const Stack = createStackNavigator();

export const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name='App' component={App} /> */}

        <Stack.Screen name='HomePage' component={HomePage} />
        <Stack.Screen name='Overview' component={Overview} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
