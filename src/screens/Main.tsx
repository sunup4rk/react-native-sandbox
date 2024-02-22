import React from 'react';
import {StyleSheet, SafeAreaView, View} from 'react-native';
import Header from '../components/header/Header';
import colors from '../configs/colors';
import Hamburger from '../components/hamburger/hamburger';

const Main = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="스포카 한 산스 네오" />
      <View style={{flex: 1, backgroundColor: colors.silver}}>
        <Hamburger size={100} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Main;
