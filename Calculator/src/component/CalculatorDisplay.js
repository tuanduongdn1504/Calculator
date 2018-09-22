import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity
} from 'react-native';

export default class CalculatorDisplay extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      scale: 1
    };
  }

  handleTextLayout = e => {
    const { scale } = this.state;
    const { width, x } = e.nativeEvent.layout;
    const maxWidth = width + x;
    const actualWidth = width / scale;
    const newScale = maxWidth / actualWidth;
    if (x < 0) {
      this.setState({ scale: newScale });
    } else if (x > width) {
      this.setState({ scale: 1 });
    }
  };

  render() {
    const { value } = this.props;
    const { scale } = this.state;

    const language = navigator.language || 'en-US';
    let formattedValue = parseFloat(value).toLocaleString(language, {
      useGrouping: true,
      maximumFractionDigits: 6
    });

    const trailingZeros = value.match(/\.0*$/);

    if (trailingZeros) formattedValue += trailingZeros;

    return (
      <View style={calculatorDisplayStyles.root}>
        <Text
          children={formattedValue}
          onLayout={this.handleTextLayout}
          style={[calculatorDisplayStyles.text, { transform: [{ scale }] }]}
        />
      </View>
    );
  }
}

const calculatorDisplayStyles = StyleSheet.create({
  root: {
    backgroundColor: '#1c191c',
    flex: 1,
    justifyContent: 'center'
  },
  text: {
    alignSelf: 'flex-end',
    color: 'white',
    lineHeight: 130,
    fontSize: 50,
    paddingHorizontal: 30,
    position: 'absolute',
    right: 0
    // transformOrigin: 'right'
  }
});
