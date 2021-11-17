import React, { ReactElement, ReactNode } from 'react';
import { Text, TextProps } from 'react-native';

interface ITitleProps extends TextProps {
  children: ReactNode;
}

function Title({ children, ...rest }: ITitleProps): ReactElement {
  return <Text {...rest}>{children}</Text>;
}

export default Title;
