import React, { ReactElement } from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../screens";

const Stack = createStackNavigator();

function AppRoutes(): ReactElement {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

export default AppRoutes;
