import React, { ReactElement } from 'react';
import { View, Text, FlatList, Image } from 'react-native';

import { Title } from '~/components';
import { mealsMock } from '~/utils/data/mealsMock';

import { styles } from './styles';

function Index(): ReactElement {
  return (
    <View style={styles.container}>
      <Title>My Meals</Title>
      <Text>Here your list of saved meals</Text>
      <View style={styles.mealsListWrapper}>
        <FlatList
          data={mealsMock}
          renderItem={meal => (
            <View>
              <Image source={{ uri: meal.item.cover_image }} />
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
