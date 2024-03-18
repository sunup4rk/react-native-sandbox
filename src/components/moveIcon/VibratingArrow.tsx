import React, {FC, useEffect, useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import colors from '../../configs/colors';

export interface VibratingArrowProps {}

const VibratingArrow: FC<VibratingArrowProps> = () => {
  // 공유 값으로 애니메이션 관리
  const animatedValue = useSharedValue(0);

  // 진동 애니메이션 정의
  useEffect(() => {
    animatedValue.value = withRepeat(
      withSequence(
        withTiming(8, {duration: 150}), // 위로 이동
        withTiming(-8, {duration: 150}), // 아래로 이동
        withTiming(8, {duration: 150}), // 위로 이동
        withTiming(-8, {duration: 150}), // 아래로 이동
        withTiming(0, {duration: 150}), // 원래 위치로
        withTiming(0, {duration: 3000}), // 대기시간
      ),
      -1, // 무한 반복
      true, // 애니메이션 반복시 반대로 실행
    );
  }, [animatedValue]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: animatedValue.value}],
    };
  });
  return <Animated.View style={[styles.container, animatedStyle]} />;
};

const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 70,
    borderRadius: 100,
    backgroundColor: colors.gold,
  },
});

export default VibratingArrow;
