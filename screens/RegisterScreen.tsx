/* eslint-disable eqeqeq */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
  ScrollView,
} from 'react-native';
import {images, icons, colors} from '../constants';
import {isValidEmail, isValidPassword} from '../Validations/Validation';

const RegisterScreen = () => {
  //state for validate
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  //state to store email/password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isValidationLogin = () =>
    email.length > 0 &&
    password.length > 0 &&
    isValidEmail(email) == true &&
    isValidPassword(password) == true;
  return (
    <ScrollView
      style={{
        flex: 100,
        backgroundColor: '#CEF3F9',
      }}>
      <View
        style={{
          flex: 20,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: 15,
            fontWeight: 'bold',
            width: '50%',
          }}>
          Create your account
        </Text>
        <Image
          source={images.mainscreen}
          style={{
            width: 100,
            height: 100,
            alignSelf: 'center',
          }}
        />
      </View>
      <View
        style={{
          flex: 60,
          backgroundColor: 'white',
          padding: 15,
          margin: 15,
          borderRadius: 15,
        }}>
        <View
          style={{
            marginHorizontal: 10,
          }}>
          <Text
            style={{
              fontSize: 10,
              color: 'black',
              fontWeight: 'bold',
            }}>
            Email:
          </Text>
          <TextInput
            onChangeText={text => {
              setErrorEmail(
                isValidEmail(text) == true ? '' : 'Email not in correct format',
              );
              setEmail(text);
            }}
            style={{
              color: 'black',
            }}
            placeholder="Enter your email here"
            placeholderTextColor={colors.placeholder}
          />
          <View
            style={{
              height: 1,
              width: '100%',
              backgroundColor: 'black',
              marginBottom: 5,
              marginHorizontal: 20,
              alignSelf: 'center',
            }}
          />
          <Text
            style={{
              fontSize: 10,
              color: 'red',
            }}>
            {errorEmail}
          </Text>
        </View>
        <View
          style={{
            marginHorizontal: 10,
          }}>
          <Text
            style={{
              fontSize: 10,
              color: 'black',
              fontWeight: 'bold',
            }}>
            Password:
          </Text>
          <TextInput
            onChangeText={text => {
              setErrorPassword(
                isValidPassword(text) == true
                  ? ''
                  : 'Password contain at least 8-16 characters, 1 uppercase letter, 1 lowercase letter, 1 special character, and 1 number.',
              );
              setPassword(text);
            }}
            style={{
              color: 'black',
            }}
            secureTextEntry={true}
            placeholder="Enter your password here"
            placeholderTextColor={colors.placeholder}
          />
          <View
            style={{
              height: 1,
              width: '100%',
              backgroundColor: 'black',
              marginBottom: 5,
              marginHorizontal: 20,
              alignSelf: 'center',
            }}
          />
          <Text
            style={{
              fontSize: 10,
              color: 'red',
            }}>
            {errorPassword}
          </Text>
        </View>
        <View
          style={{
            marginHorizontal: 10,
          }}>
          <Text
            style={{
              fontSize: 10,
              color: 'black',
              fontWeight: 'bold',
            }}>
            Retype Password:
          </Text>
          <TextInput
            style={{
              color: 'black',
            }}
            secureTextEntry={true}
            placeholder="Re-Enter your password here"
            placeholderTextColor={colors.placeholder}
          />
          <View
            style={{
              height: 1,
              width: '100%',
              backgroundColor: 'black',
              marginBottom: 5,
              marginHorizontal: 20,
              alignSelf: 'center',
            }}
          />
          <Text
            style={{
              fontSize: 10,
              color: 'red',
            }}>
            {errorPassword}
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'flex-start',
          }}>
          <TouchableOpacity
            disabled={isValidationLogin() == false}
            onPress={() => {
              Alert.alert(`Email= ${email}, password= ${password}`);
            }}
            style={{
              backgroundColor:
                isValidationLogin() == true ? 'red' : colors.inactive,
              justifyContent: 'center',
              alignItems: 'center',
              width: '50%',
              alignSelf: 'center',
              borderRadius: 30,
            }}>
            <Text
              style={{
                padding: 10,
                fontSize: 13,
                fontWeight: 'bold',
              }}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flex: 20,
        }}>
        <View
          style={{
            height: 40,
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 10,
          }}>
          <View
            style={{
              height: 1,
              flex: 1,
              backgroundColor: 'black',
            }}
          />
          <Text
            style={{
              padding: 8,
              fontSize: 10,
              fontWeight: 'bold',
              color: 'black',
              alignSelf: 'center',
              marginHorizontal: 5,
            }}>
            Use other methods?
          </Text>
          <View
            style={{
              height: 1,
              flex: 1,
              backgroundColor: 'black',
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
          }}>
          <Image
            source={images.facebook}
            style={{marginStart: 10, marginEnd: 5, width: 35, height: 35}}
          />
          <Image
            source={images.google}
            style={{marginStart: 10, marginEnd: 5, width: 35, height: 35}}
          />
        </View>
      </View>
    </ScrollView>
  );
};
export default RegisterScreen;