import React, { ReactElement, useRef, useCallback } from 'react';

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { Input, Button } from '~/components';
import { AuthLayout } from '~/layouts';
import { RouteStackParamList } from '~/models/Routes';

type signUpScreenProp = StackNavigationProp<RouteStackParamList, 'SignUp'>;

function SignUp(): ReactElement {
  const navigation = useNavigation<signUpScreenProp>();

  const buttonStyle = useRef({
    marginBottom: 24,
  });

  const handleSubmitSignUp = useCallback(() => {
    navigation.push('UserIndex');
  }, []);

  return (
    <AuthLayout>
      <Input
        label="Name"
        placeholder="Enter your full name"
        setValue={() => {}}
      />
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
      <Input
        label="Confirm your password"
        placeholder="Confirm your password"
        setValue={() => {}}
      />
      <Button
        content="Confirm"
        containerStyle={buttonStyle.current}
        onPress={handleSubmitSignUp}
      />
    </AuthLayout>
  );
}

export default SignUp;
