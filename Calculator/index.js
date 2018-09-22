/** @format */

import { AppRegistry } from 'react-native';
// import App from './App';
import CalculatorWrapper from './src/CalculatorWrapper';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => CalculatorWrapper);
