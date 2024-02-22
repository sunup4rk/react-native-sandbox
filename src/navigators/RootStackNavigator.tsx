import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DrawerNavigator from './DrawerNavigator';

export type RootStackParamList = {
  // SomeScreen: undefined; // 해당 스크린에 파라미터가 없는 경우
  // AnotherScreen: {param1: string; param2: number}; // 파라미터가 있는 경우
  DrawerNavigator: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

function RootStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="DrawerNavigator"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
    </Stack.Navigator>
  );
}

export default RootStackNavigator;
