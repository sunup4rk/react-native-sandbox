import React from 'react';
import {StyleSheet, SafeAreaView, View} from 'react-native';
import Header from '../components/header/Header';
import colors from '../configs/colors';
import {useNavigation, DrawerActions} from '@react-navigation/native';
import {DrawerNavigation} from '../navigators/DrawerNavigator';

const Main = () => {
  const drawerNavigation = useNavigation<DrawerNavigation>();

  const onPressMenu = () =>
    drawerNavigation.dispatch(DrawerActions.openDrawer());

  return (
    <SafeAreaView style={styles.container}>
      <Header title="스포카 한 산스 네오" onPress={onPressMenu} />
      <View style={{flex: 1, backgroundColor: colors.silver}}></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Main;
