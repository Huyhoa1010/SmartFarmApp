/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {BarChart} from 'react-native-chart-kit';
import {colors} from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';

const MainScreen = ({navigation}: any) => {
  return (
    <View
      style={{
        flex: 100,
      }}>
      <View
        style={{
          flex: 10,
          backgroundColor: colors.font,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: colors.primary,
            }}>
            MainScreen
          </Text>
        </View>
        <Icon.Button
          onPress={() => navigation.navigate('Account')}
          name={'bars'}
          backgroundColor={colors.font}
          iconStyle={{
            color: colors.primary,
            fontSize: 20,
            marginRight: 20,
          }}
          style={{
            padding: 0,
          }}
        />
      </View>
      <View
        style={{
          flex: 90,
        }}>
        <Text>Hello</Text>
      </View>
    </View>
  );
};

export default MainScreen;
