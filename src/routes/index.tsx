import React, { ReactElement } from "react";

import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

import AppRoutes from "./app.routes";

function Routes(): ReactElement {
  const [fontsLoaded] = useFonts({
    PoppinsRegular: Poppins_400Regular,
    PoppinsMedium: Poppins_500Medium,
    PoppinsBold: Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <AppRoutes />;
}

export default Routes;
