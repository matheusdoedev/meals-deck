import { StyleSheet } from 'react-native';

import light from '~/styles/theme/light';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },

  content: {
    paddingHorizontal: 40,
  },

  title: {
    fontSize: 36,
    lineHeight: 45,
    fontFamily: light.fontFamily.poppinsBold,
    maxWidth: 180,
    color: light.colors.white,
    marginBottom: light.gaps.md,
  },

  tagline: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: light.fontFamily.poppinsRegular,
    maxWidth: 180,
    color: light.colors.white,
    opacity: 0.85,
    marginBottom: 128,
  },

  separator: {
    width: 20,
    height: 1,
    backgroundColor: light.colors.white,
    opacity: 0.2,
    alignSelf: 'center',
    marginVertical: 24,
  },
});
