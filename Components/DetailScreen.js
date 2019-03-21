import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import MainScreen from './MainScreen';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Styles from './StyleSheet';
export default class DetailScreen extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <Text>Tu2</Text>
      </View>
    );
  }
}
