import React from 'react';
import {StyleSheet, SafeAreaView, Text} from 'react-native';
import Header from '../components/header/Header';

const Main = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="스포카 한 산스 네오" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Main;
