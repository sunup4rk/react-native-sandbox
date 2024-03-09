import React from 'react';
import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import Main from '../screens/Main';
import {useNavigation} from '@react-navigation/native';
import colors from '../configs/colors';
import Scroll from '../screens/Scroll';

export type TabParamList = {
  Main: undefined;
  Scroll: undefined;
};

export type TabNavigation = BottomTabNavigationProp<TabParamList>;

const Tab = createBottomTabNavigator<TabParamList>();

function TabNavigator() {
  const tabNavigation = useNavigation<TabNavigation>();

  return (
    <Tab.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.gold,
        },
      }}>
      <Tab.Screen
        name="Main"
        component={Main}
        listeners={{
          tabPress: () => tabNavigation.navigate('Main'),
        }}
      />
      <Tab.Screen
        name="Scroll"
        component={Scroll}
        listeners={{
          tabPress: () => tabNavigation.navigate('Scroll'),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
