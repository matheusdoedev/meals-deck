import { StyleSheet } from "react-native";

import light from "../../styles/theme/light";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: light.colors.primary,
    paddingHorizontal: light.gaps.md,
    paddingVertical: light.gaps.md,
    borderRadius: 5,
  },

  text: {
    fontSize: 16,
    fontFamily: light.fontFamily.poppinsMedium,
    color: light.colors.white,
  },
});
