import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Pressable,
  TouchableOpacity,
  Vibration,
  Text,
} from 'react-native';
import Header from '../components/header/Header';
import colors from '../configs/colors';
import {useNavigation, DrawerActions} from '@react-navigation/native';
import {DrawerNavigation} from '../navigators/DrawerNavigator';
import {RootStackNavigation} from '../navigators/RootStackNavigator';
import VibratingArrow from '../components/moveIcon/VibratingArrow';
import {Fonts} from '../configs/fonts';

const Main = () => {
  const RootStackNavigator = useNavigation<RootStackNavigation>();
  const drawerNavigation = useNavigation<DrawerNavigation>();

  const onPressMenu = () =>
    drawerNavigation.dispatch(DrawerActions.openDrawer());

  const onPressButton1 = () => {
    Vibration.vibrate(400);
    // RootStackNavigator.navigate('Note');
  };

  const cancelVibration = () => {
    Vibration.cancel();
  };

  const onPressVibratingButton = () => {
    Vibration.vibrate([0, 1000, 2000, 3000]);
    RootStackNavigator.navigate('WebViewPage');
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

        <VibratingArrow onPress={onPressVibratingButton} />

        <TouchableOpacity
          style={{
            height: 30,
            width: 30,
            borderRadius: 20,
            backgroundColor: colors.subtext,
          }}
          onPress={cancelVibration}
        />
        <View>
          <Text style={{fontFamily: Fonts.MaruBuri.Bold}}>1234</Text>
          <Text style={{fontFamily: Fonts.MaruBuri.ExtraLight}}>1234</Text>
          <Text style={{fontFamily: Fonts.MaruBuri.Light}}>1234</Text>
          <Text style={{fontFamily: Fonts.MaruBuri.Regular}}>1234</Text>
          <Text style={{fontFamily: Fonts.MaruBuri.SemiBold}}>1234</Text>
        </View>
        <View>
          <Text style={{fontFamily: Fonts.SpoqaHanSansNeo.Bold}}>1234</Text>
          <Text style={{fontFamily: Fonts.SpoqaHanSansNeo.Light}}>1234</Text>
          <Text style={{fontFamily: Fonts.SpoqaHanSansNeo.Medium}}>1234</Text>
          <Text style={{fontFamily: Fonts.SpoqaHanSansNeo.Regular}}>1234</Text>
          <Text style={{fontFamily: Fonts.SpoqaHanSansNeo.Thin}}>1234</Text>
        </View>
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
