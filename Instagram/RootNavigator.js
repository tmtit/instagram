import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator,
  createSwitchNavigator,
  createBottomTabNavigator
} from 'react-navigation';
import HomeScreenView from './Screen/HomeScreen/HomeScreenView';
import NotificationsScreenView from './Screen/NotificationsScreen/NotificationsScreenView';
import PostScreenView './Screen/PostScreen/PostScreenView';
const AppStackNavigator = createStackNavigator({
  HomeScreen: {}
});
