import React, { ReactElement, ReactNode } from 'react';
import { Text, TextProps, TextStyle } from 'react-native';

import { styles } from './styles';

interface IParagraphProps extends Omit<TextProps, 'style'> {
  children: ReactNode;
  extraStyles?: TextStyle;
}

function Paragraph({
  children,
  extraStyles,
  ...rest
}: IParagraphProps): ReactElement {
  return (
    <Text style={{ ...styles.paragraph, ...extraStyles }} {...rest}>
      {children}
    </Text>
  );
}

export default Paragraph;
