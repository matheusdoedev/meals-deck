import React, { ReactElement } from 'react';
import {
  TouchableOpacity,
  Text,
  TouchableOpacityProps,
  StyleSheetProperties,
} from 'react-native';

import { styles } from './styles';

interface ITextLinkProps extends TouchableOpacityProps {
  content: string;
  textStyle?: StyleSheetProperties;
}

function TextLink({
  content,
  textStyle,
  ...props
}: ITextLinkProps): ReactElement {
  return (
    <TouchableOpacity style={styles.wrapper} activeOpacity={0.75} {...props}>
      <Text style={{ ...styles.text, ...textStyle }}>{content}</Text>
    </TouchableOpacity>
  );
}

export default TextLink;
