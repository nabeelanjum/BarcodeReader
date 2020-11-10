import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens //
import Home from '../screens/Home';
import ProductDetails from '../screens/ProductDetails';

const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name='Home'
      component={Home}
      options={{
        title: 'Scan Barcode'
      }}
    />
    <Stack.Screen
      name='ProductDetails'
      component={ProductDetails}
      options={{
        title: 'Product Details'
      }}
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