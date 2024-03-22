import React, {useState} from 'react';
import {Text, View, Image, ImageBackground, Button} from 'react-native';
import {images} from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {UIButton} from '../components';
import {NavigationContainer, useNavigation} from '@react-navigation/native';

const MainScreen = ({navigation}: any) => {
  return (
    <View>
      <Text>Hello</Text>
      <Button title="Nhấn đây" onPress={() => navigation.navigate('Account')} />
    </View>
  );
};
export default MainScreen;
