import React, {FC} from 'react';
import {StyleSheet, Text, SafeAreaView} from 'react-native';
import colors from '../configs/colors';

export interface DrawerMenuProps {}

const DrawerMenu: FC<DrawerMenuProps> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Drawer</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryDark,
  },
});

export default DrawerMenu;
