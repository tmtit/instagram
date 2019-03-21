import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator,
  createSwitchNavigator,
  createBottomTabNavigator
} from 'react-navigation';

const AppTabNavigator = createBottomTabNavigator(
  {
    HomeScreen,
    SearchScreen,
    PostScreen,
    NotificationsScreen,
    ProfileScreen
  },
  {}
);
export default AppTabNavigator;
