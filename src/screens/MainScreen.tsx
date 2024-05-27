/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {colors} from '../constants';

const MainScreen = ({navigation, route}: any) => {
  const {devices} = route.params || {devices: []};

  return (
    <View style={{flex: 100}}>
      <View
        style={{
          flex: 10,
          backgroundColor: colors.font,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text
            style={{fontSize: 20, fontWeight: 'bold', color: colors.primary}}>
            MainScreen
          </Text>
        </View>
        <Icon.Button
          onPress={() => navigation.navigate('Account')}
          name={'bars'}
          backgroundColor={colors.font}
          iconStyle={{color: colors.primary, fontSize: 20, marginRight: 20}}
          style={{padding: 0}}
        />
      </View>
      <View
        style={{
          flex: 10,
          height: 50,
          backgroundColor: 'rgba(0,0,0,0.2)',
          justifyContent: 'center',
        }}>
        <Text style={{color: 'red', fontSize: 15, paddingStart: 10}}>
          Device Information
        </Text>
      </View>
      <View style={{flex: 80, padding: 10}}>
        {devices.length === 0 ? (
          <Text style={{fontSize: 15}}>There are no devices to display</Text>
        ) : (
          devices.map((device: any, index: any) => (
            <View
              key={index}
              style={{
                marginBottom: 10,
                padding: 10,
                backgroundColor: '#fff',
                borderRadius: 10,
              }}>
              <Text>Name: {device.name}</Text>
              <Text>MAC: {device.mac}</Text>
              <Text>Status: {device.status.toString()}</Text>
            </View>
          ))
        )}
      </View>
    </View>
  );
};

export default MainScreen;
