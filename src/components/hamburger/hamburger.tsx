import React from 'react';
import {TouchableOpacity} from 'react-native';
import {
  BAR_TRANSLATE,
  HAMBURGER_BAR_INTERPOLATE,
  hamburgerStyles as styles,
} from './styles';
import Bar from './bar';
import {
  interpolate,
  useDerivedValue,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

const Hamburger = () => {
  const animatedValue = useSharedValue(0);

  const getInterpolatedValue = (
    outputRangeMin: number,
    outputRangeMax: number,
  ) => {
    return useDerivedValue(() => {
      return interpolate(
        animatedValue.value,
        [0, 1],
        [outputRangeMin, outputRangeMax],
      );
    });
  };

  const getInterPolatedRotateValue = (
    outputRangeMin: number,
    outputRangeMax: number,
  ) => {
    return useDerivedValue(() => {
      const interpolatedValue = Math.round(
        interpolate(
          animatedValue.value,
          [0, 1],
          [outputRangeMin, outputRangeMax],
        ),
      );
      return `${interpolatedValue}deg`;
    });
  };

  const opacity2 = getInterpolatedValue(1, 0);

  const rotate1 = getInterPolatedRotateValue(0, 45);
  const rotate2 = getInterPolatedRotateValue(0, -45);

  const translateX1 = getInterpolatedValue(
    0,
    BAR_TRANSLATE - HAMBURGER_BAR_INTERPOLATE,
  );
  const translateY1 = getInterpolatedValue(
    0,
    BAR_TRANSLATE - HAMBURGER_BAR_INTERPOLATE,
  );
  const translateX3 = getInterpolatedValue(
    0,
    BAR_TRANSLATE - HAMBURGER_BAR_INTERPOLATE,
  );
  const translateY3 = getInterpolatedValue(
    0,
    -BAR_TRANSLATE + HAMBURGER_BAR_INTERPOLATE,
  );

  const animatedStyle1 = useAnimatedStyle(() => {
    return {
      transform: [
        {rotate: rotate1.value},
        {translateX: translateX1.value},
        {translateY: translateY1.value},
      ],
    };
  });
  const animatedStyle2 = useAnimatedStyle(() => {
    return {
      opacity: opacity2.value,
      transform: [{rotate: rotate2.value}],
    };
  });
  const animatedStyle3 = useAnimatedStyle(() => {
    return {
      transform: [
        {rotate: rotate2.value},
        {translateX: translateX3.value},
        {translateY: translateY3.value},
      ],
    };
  });

  const onPress = () => {
    const toValue = animatedValue.value === 0 ? 1 : 0;
    animatedValue.value = withTiming(toValue, {duration: 300});
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Bar animatedStyles={animatedStyle1} />
      <Bar animatedStyles={animatedStyle2} />
      <Bar animatedStyles={animatedStyle3} />
    </TouchableOpacity>
  );
};

export default Hamburger;
