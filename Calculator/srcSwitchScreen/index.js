import React, { Component } from 'react';
import {
  Button,
  View,
  Text,
  TextInput,
  Image,
  Dimensions,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { TabNavigator, TabBarTop } from 'react-navigation';
import LoginScreen from './LoginScreen';
import SettingsScreen from './SettingScreen';

var { height, width } = Dimensions.get('window');
class HomeScreen extends React.Component {
  render() {
    const source = { uri: 'https://facebook.github.io/react/logo-og.png' };
    return (
      <View style={{ flex: 1 }}>
        <Image
          source={source}
          style={{
            width,
            height: 230,
            resizeMode: 'contain'
          }}
        />
        <View style={{ marginBottom: 10 }} />
        <Text type="largeTitleBold" style={styles.txtAppName} center>
          SETTINGS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        </Text>
        <View style={{ marginBottom: 10 }} />
        <TouchableOpacity
          style={{ flexDirection: 'row', alignItems: 'center' }}
          onPress={() => this.props.navigation.navigate('SettingsScreen')}
        >
          <Image
            source={require('./doctor_who.jpg')}
            style={{
              width: 150,
              height: 100
            }}
          />
          <Button
            title="Go to Settings"
            onPress={() => this.props.navigation.navigate('SettingsScreen')}
          />
        </TouchableOpacity>
        <View style={{ marginBottom: 20 }} />
        <TouchableOpacity
          style={{ flexDirection: 'row', alignItems: 'center' }}
          onPress={() => this.props.navigation.navigate('LoginScreen')}
        >
          <Image
            source={require('./doctor_who.jpg')}
            style={{
              width: 150,
              height: 100
            }}
          />
          <Button
            title="Go to Login"
            onPress={() => this.props.navigation.navigate('LoginScreen')}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const Tabs = TabNavigator(
  { HomeScreen, SettingsScreen: SettingsScreen, LoginScreen: LoginScreen },
  {
    tabBarComponent: TabBarTop,
    tabBarPosition: 'Top',
    tabBarOptions: {
      activeTintColor: 'yellow',
      inactiveTintColor: 'gray'
    },
    animationEnabled: false,
    swipeEnabled: true
  }
);

export default class App extends Component {
  render() {
    return <Tabs />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    width,
    paddingHorizontal: 20,
    paddingBottom: 20
  },
  vButtonGroup: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 32
  },
  btnLogin: {
    width: width - 40,
    marginBottom: 20
  },
  vHeader: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  txtDes: {
    marginTop: 10,
    marginBottom: 20
  },
  txtAppName: {
    color: 'blue'
  }
});
