/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
import React from 'react';
import {AccountInformation, ChooseGateway, MainScreen} from '../screens';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {colors} from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Tab = createMaterialBottomTabNavigator();

function UITab() {
  return (
    <Tab.Navigator
      initialRouteName="Main"
      activeColor={colors.primary}
      inactiveColor={colors.inactive}
      barStyle={{backgroundColor: colors.font}}>
      <Tab.Screen
        name="Main"
        component={MainScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) => (
            <Icon
              name="home"
              size={20}
              color={focused ? colors.font : colors.inactive}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Gateway"
        component={ChooseGateway}
        options={{
          tabBarLabel: 'Gateway',
          tabBarIcon: ({focused}) => (
            <Icon
              name="qrcode"
              size={20}
              color={focused ? colors.font : colors.inactive}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountInformation}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({focused}) => (
            <Icon
              name="user-alt"
              size={20}
              color={focused ? colors.font : colors.inactive}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default UITab;
