import React, { Component } from 'react';
import { AppState, Text } from 'react-native';

export default class KeyboardInput extends React.Component {
  handleKeyDown(event) {
    if (this.props.onKeyDown) this.props.onKeyDown(event);
  }

  componentDidMount() {
    // Ah, auto-binding. I hardly knew ye.
    this.handleKeyDown = this.handleKeyDown.bind(this);
    AppState.addEventListener('change', this.handleKeyDown);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleKeyDown);
  }

  render() {
    return null;
  }
}

let counter = 0;
