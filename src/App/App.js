import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "../HomePage/HomePage";
import Overview from "../Overview/Overview";
import Room from "../Room/Room";
import Memory from "../Memory/Memory";

export const Stack = createStackNavigator();

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="HomePage" component={HomePage} />
          <Stack.Screen name="Overview" component={Overview} />
          <Stack.Screen name="Room" component={Room} />
          <Stack.Screen name="Memory" component={Memory} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
