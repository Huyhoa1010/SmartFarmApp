/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {MainScreen, LoginScreen, RegisterScreen} from './screens';

AppRegistry.registerComponent(appName, () => () => <RegisterScreen />);
