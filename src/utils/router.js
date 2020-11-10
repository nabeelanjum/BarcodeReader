import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens //
import Home from '../screens/Home';
import ProductDetails from '../screens/ProductDetails';

const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator
    initialRouteName='ProductDetails'
  // screenOptions={{
  //   headerShown: false
  // }}
  >
    <Stack.Screen
      name='Home'
      component={Home}
    />
    <Stack.Screen
      name='ProductDetails'
      component={ProductDetails}
    />
  </Stack.Navigator>
);

export default AppContainer = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}