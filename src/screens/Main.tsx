import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Pressable,
  TouchableOpacity,
  Vibration,
} from 'react-native';
import Header from '../components/header/Header';
import colors from '../configs/colors';
import {useNavigation, DrawerActions} from '@react-navigation/native';
import {DrawerNavigation} from '../navigators/DrawerNavigator';
import {RootStackNavigation} from '../navigators/RootStackNavigator';
import Animated from 'react-native-reanimated';
import VibratingArrow from '../components/moveIcon/VibratingArrow';

const Main = () => {
  const RootStackNavigator = useNavigation<RootStackNavigation>();
  const drawerNavigation = useNavigation<DrawerNavigation>();

  const onPressMenu = () =>
    drawerNavigation.dispatch(DrawerActions.openDrawer());

  const onPressButton1 = () => {
    Vibration.vibrate();
    RootStackNavigator.navigate('Note');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="스포카 한 산스 네오" onPress={onPressMenu} />
      <View
        style={{flex: 1, flexDirection: 'row', backgroundColor: colors.silver}}>
        <Pressable
          onPress={onPressButton1}
          style={({pressed}) => [
            {
              maxWidth: 50,
              transform: [{scale: pressed ? 0.96 : 1}],
            },
          ]}>
          <View
            style={{
              height: 50,
              width: 50,
              borderRadius: 50,
              backgroundColor: colors.accent,
            }}
          />
        </Pressable>

        <VibratingArrow />
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
