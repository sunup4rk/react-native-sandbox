import React from 'react';
import {StyleSheet, SafeAreaView, Text} from 'react-native';
import Header from '../component/header/Header';

const Main = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Main" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Main;
