import { StyleSheet } from "react-native";

import light from "../../styles/theme/light";

export const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
  },

  text: {
    color: light.colors.primary,
    textDecorationLine: "underline",
    fontSize: 14,
    fontFamily: light.fontFamily.poppinsRegular,
  },
});
