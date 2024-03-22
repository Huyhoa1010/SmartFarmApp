/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import colors from '../constants/colors';

const AccountInformation = () => {
  return (
    <View
      style={{
        flex: 100,
        backgroundColor: colors.primary,
      }}>
      <View
        style={{
          flex: 10,
          backgroundColor: colors.font,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Icon.Button name={'facebook'} />
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'black',
            alignSelf: 'center',
          }}>
          Settings
        </Text>
      </View>
      <View
        style={{
          flex: 90,
        }}
      />
    </View>
  );
};

export default AccountInformation;
