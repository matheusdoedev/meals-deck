import React, { ReactElement } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  TouchableOpacityProps,
  StyleSheetProperties,
} from "react-native";

import { styles } from "./styles";

interface IButtonProps extends TouchableOpacityProps {
  content: string;
  containerStyle?: StyleSheetProperties;
}

function Button({
  content,
  containerStyle,
  ...rest
}: IButtonProps): ReactElement {
  return (
    <TouchableOpacity activeOpacity={0.75} {...rest}>
      <View style={{ ...styles.container, ...containerStyle }}>
        <Text style={styles.text}>{content}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default Button;
