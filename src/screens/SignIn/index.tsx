import React, { ReactElement } from "react";
import { View, Image } from "react-native";

import { Input, Button } from "~/components";
import { MealsDeckLogo } from "~/assets/icons";

import { styles } from "./styles";

function SignIn({ navigation }): ReactElement {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={MealsDeckLogo}
        width={159}
        height={80}
      />
      <Input label="Username" />
      <Input label="Senha" />
      <Button content="Sign in" />
    </View>
  );
}

export default SignIn;
