import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';
import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator,
  createSwitchNavigator,
  createBottomTabNavigator,
  Flatlist
} from 'react-navigation';
import { DrawerLayout } from 'react-native-drawer-layout';
import Styles from './StyleSheet';
import DetailScreen from './DetailScreen';
class MainScreen extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     fleg = true
  //   }
  // }
  click_Menu = () => {};
  render() {
    return (
      <View style={Styles.container}>
        <Text>Tu</Text>
        <TouchableHighlight style={Styles.buttonStyle} onPress={() => this.props.navigation.navigate('Detail')}>
          <Text style={{ color: '#fff' }}>Detail</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
// const AppNavigator = createStackNavigator({
//   Main: {
//     screen: MainScreen
//   },
//   Detail: {
//     screen: DetailScreen
//   }
// });
class News extends Component {
  render() {
    return (
      <View style={Styles.tabButtonStyle}>
        <Text>News</Text>
      </View>
    );
  }
}
class Profile extends Component {
  render() {
    return (
      <View style={Styles.tabButtonStyle}>
        <Text>Profile</Text>
      </View>
    );
  }
}
class Setting extends Component {
  render() {
    return (
      <View style={Styles.tabButtonStyle}>
        <Text>Setting</Text>
      </View>
    );
  }
}
const MainScreenTabNavigator = createBottomTabNavigator(
  {
    News,
    Profile,
    Setting
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: routeName
      };
    }
  }
);
let fleg = true;
const AppDrawerNavigator = createDrawerNavigator(
  {
    MainScreen: { screen: MainScreen },

    Detail: {
      screen: DetailScreen
    }
  },
  {
    initialRouteName: 'MainScreen',
    drawerPosition: 'left'
  }
);

const AppStackNavigator = createStackNavigator(
  {
    // Main: {
    //   screen: MainScreenTabNavigator
    // },
    Drawer: {
      screen: AppDrawerNavigator
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <View style={{ justifyContent: 'center', alignItem: 'center' }}>
            <TouchableHighlight
              onPress={() => {
                if (fleg) {
                  navigation.openDrawer();
                } else {
                  navigation.closeDrawer();
                }
                fleg = !fleg;
                alert(fleg);
              }}
              style={{}}
            >
              <Image source={require('./Images/list-menu.png')} style={{ width: 30, height: 30, margin: 15 }} />
            </TouchableHighlight>
          </View>
        )
      };
    }
  }
);

export default createAppContainer(AppStackNavigator);
