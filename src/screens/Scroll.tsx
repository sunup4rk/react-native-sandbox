import React, {FC, useEffect, useMemo, useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Dimensions,
  LayoutChangeEvent,
} from 'react-native';
import InfinitePager, {
  InfinitePagerPageComponent,
} from 'react-native-infinite-pager';
import colors from '../configs/colors';
import Header from '../components/header/Header';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  useDerivedValue,
} from 'react-native-reanimated';
import {
  Gesture,
  GestureDetector,
  GestureEvent,
  PanGestureHandler,
  PanGestureHandlerEventPayload,
} from 'react-native-gesture-handler';

export interface ScrollProps {}

const Scroll: FC<ScrollProps> = () => {
  const [pageHeight, setPageHeight] = useState(0);

  const offset = useSharedValue(300);

  const gesture = Gesture.Pan()
    .onBegin(() => {
      offset.value = offset.value;
    })
    .onUpdate(e => {
      const {translationY} = e;
      console.log('========================================');
      console.log('translationY:', translationY);
      console.log('pageHeight:', pageHeight);
      console.log('========================================');
      offset.value =
        e.translationY + offset.value < pageHeight ||
        e.translationY + offset.value > 0
          ? e.translationY + offset.value
          : pageHeight;
      // if (translationY > 10) {
      //   offset.value = pageHeight + translationY;
      // } else if (translationY < 10) {
      //   offset.value = pageHeight - translationY;
      // }
    })
    .onEnd(() => {
      if (offset.value < pageHeight / 4) {
        offset.value = withTiming(0, {duration: 500});
      } else if (offset.value < (pageHeight * 3) / 4) {
        offset.value = withTiming(pageHeight / 2, {duration: 500});
      } else {
        offset.value = withTiming(pageHeight, {duration: 500});
      }
    });

  const onLayout = (e: LayoutChangeEvent) => {
    const height = e.nativeEvent.layout.height;
    setPageHeight(height);
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: pageHeight,
    };
  });

  const animatedStyle1 = useAnimatedStyle(() => {
    return {
      height: offset.value,
    };
  });

  const animatedStyle2 = useAnimatedStyle(() => {
    return {
      height: pageHeight - offset.value,
    };
  });

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Scroll" onPress={() => {}} />
      <View style={{flex: 1}} onLayout={onLayout}>
        <GestureDetector gesture={gesture}>
          <Animated.View style={[animatedStyle, {flex: 1}]}>
            <Animated.View style={[animatedStyle1, {flex: 1}]}></Animated.View>
            <Animated.View style={[animatedStyle2, {flex: 1}]}></Animated.View>
          </Animated.View>
        </GestureDetector>
      </View>
    </SafeAreaView>
  );
};

const PageComponent: InfinitePagerPageComponent = ({index, pageHeightAnim}) => {
  return (
    <Animated.View style={pageStyles.container}>
      <Text style={pageStyles.text}>{index}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
});

const pageStyles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {},
});

export default Scroll;
