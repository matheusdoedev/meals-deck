import React, { ReactElement } from 'react';

import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import { PTSerif_400Regular } from '@expo-google-fonts/pt-serif';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import AppRoutes from './app.routes';

function Routes(): ReactElement {
  const [fontsLoaded] = useFonts({
    PoppinsRegular: Poppins_400Regular,
    PoppinsMedium: Poppins_500Medium,
    PoppinsBold: Poppins_700Bold,
    PTSerifRegular: PTSerif_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <AppRoutes />;
}

export default Routes;
