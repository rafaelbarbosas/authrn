import React from "react";
import "react-native-gesture-handler";

import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <View>
        <Text>Teste</Text>
      </View>
    </NavigationContainer>
  );
};

export default App;
