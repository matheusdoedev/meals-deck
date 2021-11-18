import React, { ReactElement, ReactNode } from 'react';
import { Text, TextProps, TextStyle } from 'react-native';

import { styles } from './styles';

interface ITitleProps extends Omit<TextProps, 'style'> {
  children: ReactNode;
  extraStyles?: TextStyle;
}

function Title({ children, extraStyles, ...rest }: ITitleProps): ReactElement {
  return (
    <Text style={{ ...styles.title, ...extraStyles }} {...rest}>
      {children}
    </Text>
  );
}

export default Title;
