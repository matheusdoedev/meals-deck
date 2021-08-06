import React, { ReactElement } from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { Home, SignIn, SignUp } from "../screens";

const Stack = createStackNavigator();

function AppRoutes(): ReactElement {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}

export default AppRoutes;
