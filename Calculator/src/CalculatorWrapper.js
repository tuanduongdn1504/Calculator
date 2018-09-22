import React, { Component } from "react";
import {
  View
} from "react-native";
import Calculator from "./Calculator";

const CalculatorWrapper = () => (
  <View style={{
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  }}>
    <Calculator />
  </View>
)

export default CalculatorWrapper