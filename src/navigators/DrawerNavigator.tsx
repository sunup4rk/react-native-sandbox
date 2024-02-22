import React from 'react';
import {
  createDrawerNavigator,
  DrawerNavigationProp,
} from '@react-navigation/drawer';
import DrawerMenu from '../screens/DrawerMenu';
import TabNavigator from './TabNavigator';

export type DrawerParamList = {
  // SomeScreen: undefined; // 해당 스크린에 파라미터가 없는 경우
  // AnotherScreen: {param1: string; param2: number}; // 파라미터가 있는 경우
  TabNavigator: undefined;
};

export type DrawerNavigation = DrawerNavigationProp<DrawerParamList>;

const Drawer = createDrawerNavigator<DrawerParamList>();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="TabNavigator"
      drawerContent={DrawerMenu}
      screenOptions={{
        drawerPosition: 'right',
        drawerStyle: {
          width: '100%',
        },
        drawerType: 'front',
        headerShown: false,
      }}>
      <Drawer.Screen name="TabNavigator" component={TabNavigator} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
