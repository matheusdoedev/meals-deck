import React, { ReactElement, useCallback } from 'react';
import { View, Text, ImageBackground } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { WelcomeBg } from '~/assets/images';
import { Button, TextLink } from '~/components';
import { RouteStackParamList } from '~/models/Routes';

import { styles } from './styles';

type HomeScreenProp = StackNavigationProp<RouteStackParamList, 'Home'>;

function Home(): ReactElement {
  const navigation = useNavigation<HomeScreenProp>();

  const handleNavigateToSignUp = useCallback(() => {
    navigation.push('SignUp');
  }, []);

  const handleNavigateToSignIn = useCallback(() => {
    navigation.push('SignIn');
  }, []);

  return (
    <ImageBackground
      source={WelcomeBg}
      style={styles.container}
      resizeMode="cover"
    >
      <View style={styles.content}>
        <Text style={styles.title}>Arrange your recipes with My Meals</Text>
        <Text style={styles.tagline}>And see they later </Text>
        <Button content="Create a account" onPress={handleNavigateToSignUp} />
        <View style={styles.separator} />
        <TextLink
          content="Already have a account"
          onPress={handleNavigateToSignIn}
        />
      </View>
    </ImageBackground>
  );
}

export default Home;
