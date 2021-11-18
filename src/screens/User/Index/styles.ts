import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    paddingHorizontal: 40,
  },

  mealsListWrapper: {
    maxHeight: 300,
  },

  mealsList: {
    flexWrap: 'wrap',
  },

  mealItem: {
    maxWidth: 130,
    width: '100%',
  },

  mealCover: {
    width: 130,
    maxHeight: 130,
    borderRadius: 5,
  },
});
