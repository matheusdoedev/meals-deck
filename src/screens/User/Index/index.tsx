import React, { ReactElement } from 'react';
import { View, Text, FlatList, Image } from 'react-native';

import { MealImageMock } from '~/assets/images';
import { Title, Paragraph } from '~/components';
import { mealsMock } from '~/utils/data/mealsMock';

import { styles } from './styles';

function Index(): ReactElement {
  return (
    <View style={styles.container}>
      <Title>My Meals</Title>
      <Paragraph extraStyles={{ marginBottom: 48 }}>
        Here your list of saved meals
      </Paragraph>
      <View style={styles.mealsListWrapper}>
        <FlatList
          data={mealsMock}
          style={styles.mealsList}
          renderItem={meal => (
            <View style={styles.mealItem}>
              <Image style={styles.mealCover} source={MealImageMock} />
              <Text>{meal.item.name}</Text>
            </View>
          )}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </View>
  );
}

export default Index;
