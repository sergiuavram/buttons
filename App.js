import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/screens/Home';
import Details from './src/screens/Details';

const App = () => {

  const TheNavigator = createStackNavigator();
  const navigator =
    <TheNavigator.Navigator >
      <TheNavigator.Screen name="Home" component={Home} />
      <TheNavigator.Screen name="Details" component={Details} options={{ title: 'Details' }} />
    </TheNavigator.Navigator>

  return (
    <>
      <NavigationContainer>
        {navigator}
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
