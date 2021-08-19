import React, { ReactElement, ReactNode } from 'react';
import { View, Image } from 'react-native';

import { MealsDeckLogo } from '~/assets/icons';

import { styles } from './styles';

interface IAuthLayoutProps {
  children: ReactNode;
}

function AuthLayout({ children }: IAuthLayoutProps): ReactElement {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={MealsDeckLogo}
        width={159}
        height={80}
      />
      {children}
    </View>
  );
}

export default AuthLayout;
