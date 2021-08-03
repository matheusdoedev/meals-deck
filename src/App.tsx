import React, { ReactElement } from "react";
import { StatusBar } from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import light from "./styles/theme/light";
import Routes from "./routes";

function App(): ReactElement {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor={light.colors.primary}
        barStyle="light-content"
      />
      <Routes />
    </NavigationContainer>
  );
}

export default App;
