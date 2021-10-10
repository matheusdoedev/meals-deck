import React, { ReactElement, useCallback } from 'react';
import {
  View,
  Text,
  TextInput,
  TextInputProps,
  StyleSheetProperties,
} from 'react-native';

import { styles } from './styles';

interface IInputProps extends TextInputProps {
  label?: string;
  setValue: unknown;
  containerStyle?: StyleSheetProperties;
}

function Input({
  label,
  setValue,
  containerStyle,
  ...rest
}: IInputProps): ReactElement {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={{ ...styles.field, ...containerStyle }}>
        <TextInput {...rest} />
      </View>
    </View>
  );
}

export default Input;
