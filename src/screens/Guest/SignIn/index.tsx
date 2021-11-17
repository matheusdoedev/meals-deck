import React, { ReactElement, useRef, useCallback } from 'react';

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { Input, Button, TextLink } from '~/components';
import { AuthLayout } from '~/layouts';
import { RouteStackParamList } from '~/models/Routes';

type signInScreenProp = StackNavigationProp<RouteStackParamList, 'Home'>;

function SignIn(): ReactElement {
  const navigation = useNavigation<signInScreenProp>();

  const buttonStyle = useRef({
    marginBottom: 24,
  });

  const handleNavigateToSignUp = useCallback(() => {
    navigation.push('UserIndex');
  }, []);

  return (
    <AuthLayout>
      <Input
        label="E-mail"
        placeholder="Enter your e-mail"
        setValue={() => {}}
      />
      <Input
        label="Password"
        placeholder="Enter your password"
        setValue={() => {}}
      />
      <Button content="Enter" containerStyle={buttonStyle.current} />
      <TextLink content="Create a account" onPress={handleNavigateToSignUp} />
    </AuthLayout>
  );
}

export default SignIn;
