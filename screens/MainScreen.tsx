/* eslint-disable eqeqeq */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {Text, View, Image, ImageBackground} from 'react-native';
import {images, icons, colors} from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {UIButton} from '../components';

const MainScreen = () => {
  //state => khi một state thay đổi => UI sẽ reload
  // like getter/setter
  const [LoginForms, setLoginForms] = useState([
    {
      name: 'Login',
      isSelected: true,
    },
    {
      name: 'Sign up',
      isSelected: false,
    },
  ]);
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 100,
      }}>
      <ImageBackground
        source={images.background}
        resizeMode="cover"
        style={{
          flex: 100,
          width: null,
          height: null,
          // blurRadious: 20,
        }}>
        <View
          style={{
            flex: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              height: 50,
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <Image
              source={images.mainscreen}
              style={{
                marginStart: 10,
                marginEnd: 5,
                width: 50,
                height: 50,
              }}
            />
            <Text
              style={{
                color: 'black',
              }}>
              HELLO!
            </Text>
            <View style={{flex: 1}} />
            <Icon
              name={'question-circle'}
              style={{
                fontSize: 20,
                width: 20,
                height: 20,
                marginEnd: 15,
                color: 'black',
              }}
            />
          </View>
        </View>
        <View
          style={{
            flex: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'black',
            }}>
            Welcome to
          </Text>
          <Text
            style={{
              marginBottom: 10,
              color: 'black',
              fontWeight: 'bold',
            }}>
            Smart Farm App!
          </Text>
        </View>
        <View
          style={{
            flex: 40,
          }}>
          {LoginForms.map(LoginForm => (
            <UIButton
              onPress={() => {
                let newLoginForms = LoginForms.map(eachLoginForm => {
                  return {
                    ...eachLoginForm,
                    isSelected: eachLoginForm.name == LoginForm.name,
                  };
                });
                //accountTypes = newAccountTypes => ko làm ntn (sai)
                setLoginForms(newLoginForms);
              }}
              title={LoginForm.name}
              isSelected={LoginForm.isSelected}
            />
          ))}
        </View>
        <View
          style={{
            flex: 20,
          }}
        />
      </ImageBackground>
    </View>
  );
};
export default MainScreen;
