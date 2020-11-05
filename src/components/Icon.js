import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../utils/colors';

const AppIcon = ({ name, size = 40, color = colors.THEME, bgColor = colors.WHITE, raised, style, onPress }) => (
  <TouchableOpacity
    activeOpacity={1}
    onPress={onPress}
    style={[
      styles.container,
      { backgroundColor: bgColor, width: size, height: size, borderRadius: size / 2 },
      raised && styles.raisedContainer,
      style,
    ]}>
    <Icon name={name} size={size / 2.5} color={color} />
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  raisedContainer: {
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 0 },
    elevation: 10,
  }
})

export default AppIcon;