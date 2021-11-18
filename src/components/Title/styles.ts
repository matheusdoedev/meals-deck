import { StyleSheet } from 'react-native';

import light from '~/styles/theme/light';

export const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    lineHeight: 36.8,
    fontFamily: light.fontFamily.poppinsBold,
    maxWidth: '50%',
    color: light.colors.secondary,
    marginBottom: 8,
  },
});
