/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import  createAppContainer  from './Components/MainScreen';


AppRegistry.registerComponent(appName, () => createAppContainer);
