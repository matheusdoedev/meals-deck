import React, { ReactElement } from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";

import { Button } from "~/components";
import bgImg from "~/assets/images/welcome-bg.jpg";

import { styles } from "./styles";
import { NavigationProp } from "@react-navigation/native";

function Home({ navigation }): ReactElement {
  return (
    <ImageBackground source={bgImg} style={styles.container} resizeMode="cover">
      <View style={styles.content}>
        <Text style={styles.title}>Arrange your recipes with My Meals</Text>
        <Text style={styles.tagline}>And see they later </Text>
        <Button
          content="Create a account"
          onPress={() => navigation.push("SignUp")}
        />
        <View style={styles.separator} />
        <TouchableOpacity
          style={styles.link}
          activeOpacity={0.75}
          onPress={() => navigation.push("SignIn")}
        >
          <Text style={styles.linkText}>Already have a account</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

export default Home;
