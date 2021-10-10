import React, { ReactElement } from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { RouteStackParamList } from '../models/Routes';
import { Guest } from '../screens';

const Stack = createStackNavigator<RouteStackParamList>();

function AppRoutes(): ReactElement {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Guest.Home} />
      <Stack.Screen name="SignIn" component={Guest.SignIn} />
      <Stack.Screen name="SignUp" component={Guest.SignUp} />
    </Stack.Navigator>
  );
}

export default AppRoutes;
