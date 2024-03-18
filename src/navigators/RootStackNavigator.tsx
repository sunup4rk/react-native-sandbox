import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DrawerNavigator from './DrawerNavigator';
import Note from '../screens/Note';
import {DrawerNavigationProp} from '@react-navigation/drawer';

export type RootStackParamList = {
  // SomeScreen: undefined; // 해당 스크린에 파라미터가 없는 경우
  // AnotherScreen: {param1: string; param2: number}; // 파라미터가 있는 경우
  DrawerNavigator: undefined;
  Note: undefined;
};

export type RootStackNavigation = DrawerNavigationProp<RootStackParamList>;

const Stack = createStackNavigator<RootStackParamList>();

function RootStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="DrawerNavigator"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
      <Stack.Screen name="Note" component={Note} />
    </Stack.Navigator>
  );
}

export default RootStackNavigator;
