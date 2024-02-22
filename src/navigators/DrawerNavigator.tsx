import React from 'react';
import {
  createDrawerNavigator,
  DrawerNavigationProp,
} from '@react-navigation/drawer';
import Main from '../screens/Main';
import DrawerMenu from '../screens/DrawerMenu';

export type DrawerParamList = {
  // SomeScreen: undefined; // 해당 스크린에 파라미터가 없는 경우
  // AnotherScreen: {param1: string; param2: number}; // 파라미터가 있는 경우
  Main: undefined;
};

export type DrawerNavigation = DrawerNavigationProp<DrawerParamList>;

const Drawer = createDrawerNavigator<DrawerParamList>();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Main"
      drawerContent={DrawerMenu}
      screenOptions={{
        drawerType: 'front',
        drawerPosition: 'right',
        headerShown: false,
        drawerStyle: {
          width: '90%',
        },
      }}>
      <Drawer.Screen name="Main" component={Main} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
