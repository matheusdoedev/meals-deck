import { StyleSheet } from "react-native";

import light from "../../styles/theme/light";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: light.colors.primary,
    paddingHorizontal: light.gaps.md,
    paddingVertical: light.gaps.xs,
    borderRadius: 5,
  },

  text: {
    fontSize: 16,
    fontFamily: light.fontFamily.poppinsMedium,
    color: light.colors.white,
    textAlign: "center",
  },
});
