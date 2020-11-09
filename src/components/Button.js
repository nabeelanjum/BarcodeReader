import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../utils/colors';
import { normalizeY } from '../utils/functions';
import Text from './Text';

const Button = ({ onPress, style, titleStyle, title }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text bolder size={13} style={[styles.title, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: normalizeY(48) > 60 ? 60 : normalizeY(48),
    backgroundColor: colors.THEME,
    borderRadius: 50,
  },
  title: {
    color: 'white',
  },
})

export default Button;