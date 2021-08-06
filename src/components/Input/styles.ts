import { StyleSheet } from "react-native";

import light from "../../styles/theme/light";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 24,
  },

  label: {
    fontSize: 14,
    lineHeight: 21,
    fontFamily: light.fontFamily.poppinsRegular,
    opacity: 0.85,
    color: light.colors.black,
    marginBottom: 8,
  },

  field: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
    backgroundColor: light.colors.gray,
  },
});
