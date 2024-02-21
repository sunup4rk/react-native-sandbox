import React from 'react';
import {StyleSheet, SafeAreaView, Text} from 'react-native';

const Main = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Main</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Main;
