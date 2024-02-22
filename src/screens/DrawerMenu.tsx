import React, {FC} from 'react';
import {StyleSheet, Text, SafeAreaView} from 'react-native';

export interface DrawerMenuProps {}

const DrawerMenu: FC<DrawerMenuProps> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Drawer</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default DrawerMenu;
