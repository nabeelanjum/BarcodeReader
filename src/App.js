import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from './utils/colors';
import AppContainer from './utils/router';

const App = () => {

  return (
    <View style={styles.container}>
      <AppContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BACKGROUND
  }
});

export default App