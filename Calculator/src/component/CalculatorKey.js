import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity
} from 'react-native';

export default class CalculatorKey extends React.Component {
  render() {
    const { children, onPress, style, textStyle } = this.props;

    return (
      <TouchableOpacity
        accessibilityRole="button"
        onPress={onPress}
        style={[calculatorKeyStyles.root, style]}
        underlayColor="rgba(0,0,0,0.25)"
      >
        <Text
          children={children}
          style={[calculatorKeyStyles.text, textStyle]}
        />
      </TouchableOpacity>
    );
  }
}

const calculatorKeyStyles = StyleSheet.create({
  root: {
    width: 105,
    height: 105,
    borderTopWidth: 1,
    borderTopColor: '#777',
    // borderTopStyle: 'solid',
    borderRightWidth: 1,
    borderRightColor: '#666'
    // borderTopStyle: 'solid',
    // outline: 'none'
  },
  text: {
    lineHeight: 80,
    textAlign: 'center'
  }
});
