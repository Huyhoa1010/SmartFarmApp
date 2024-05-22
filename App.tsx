import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  AccountInformation,
  ChooseGateway,
  HomeScreen,
  LoginScreen,
  MainScreen,
  RegisterScreen,
} from './src/screens';
import UITab from './src/navigation/UITab';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen
          name="Gateway"
          component={ChooseGateway}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UITab"
          component={UITab}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Account"
          component={AccountInformation}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
    //<ChooseGateway />
    //<LoginScreen />
    //<MainScreen />
    //<AccountInformation />
    //<RegisterScreen />
    //<UITab />
  );
};

export default App;
