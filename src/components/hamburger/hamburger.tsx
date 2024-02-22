import React, {FC} from 'react';
import {TouchableOpacity, ViewStyle} from 'react-native';
import Animated, {
  AnimatedStyle,
  interpolate,
  useDerivedValue,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  SharedValue,
} from 'react-native-reanimated';
import colors from '../../configs/colors';

export interface HamburgerProps {
  animation?: boolean;
  size?: number;
  onPressButton(): void;
}

export interface BarProps {
  barStyles: ViewStyle;
  animatedStyles: AnimatedStyle;
}

const Hamburger: FC<HamburgerProps> = ({
  animation = false,
  size = 24,
  onPressButton,
}) => {
  const {
    HEIGHT,
    WIDTH,
    PADDING_VERTICAL,
    PADDING_HORIZONTAL,
    BAR_HEIGHT,
    BAR_WIDTH,
    BAR_TRANSLATE_Y,
  } = getStyleConstants(size);

  const animatedValue = useSharedValue(0);

  const opacity = getInterpolatedValue(animatedValue, 1, 0);
  const translateY = getInterpolatedValue(animatedValue, 0, BAR_TRANSLATE_Y);
  const rotate1 = getInterPolatedRotateValue(animatedValue, 0, 45);
  const rotate2 = getInterPolatedRotateValue(animatedValue, 0, -45);

  const animatedStyle1 = useAnimatedStyle(() => {
    return {
      transform: [{translateY: translateY.value}, {rotate: rotate1.value}],
    };
  });

  const animatedStyle2 = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{rotate: rotate2.value}],
    };
  });

  const animatedStyle3 = useAnimatedStyle(() => {
    return {
      transform: [{translateY: -translateY.value}, {rotate: rotate2.value}],
    };
  });

  const onPress = () => {
    if (animation) {
      const toValue = animatedValue.value === 0 ? 1 : 0;
      animatedValue.value = withTiming(toValue, {duration: 300});
    }
    onPressButton();
  };

  const Bar: FC<BarProps> = ({animatedStyles, barStyles}) => (
    <Animated.View style={[animatedStyles, barStyles]} />
  );

  const styles: ViewStyle = {
    height: HEIGHT,
    width: WIDTH,
    justifyContent: 'space-between',
    paddingVertical: PADDING_VERTICAL,
    paddingHorizontal: PADDING_HORIZONTAL,
  };

  const barStyles: ViewStyle = {
    width: BAR_WIDTH,
    height: BAR_HEIGHT,
    backgroundColor: colors.text,
  };

  return (
    <TouchableOpacity style={styles} onPress={onPress}>
      <Bar animatedStyles={animatedStyle1} barStyles={barStyles} />
      <Bar animatedStyles={animatedStyle2} barStyles={barStyles} />
      <Bar animatedStyles={animatedStyle3} barStyles={barStyles} />
    </TouchableOpacity>
  );
};

const getStyleConstants = (size: number) => {
  const HEIGHT = size;
  const WIDTH = HEIGHT;
  const PADDING_VERTICAL = HEIGHT / 4;
  const PADDING_HORIZONTAL = HEIGHT / 8;
  const BAR_HEIGHT = HEIGHT / 12;
  const BAR_WIDTH = WIDTH - PADDING_HORIZONTAL * 2;
  const BAR_SPACE = (HEIGHT - PADDING_VERTICAL * 2 - BAR_HEIGHT * 3) / 2;
  const BAR_TRANSLATE_Y = BAR_SPACE + BAR_HEIGHT;

  return {
    HEIGHT,
    WIDTH,
    PADDING_VERTICAL,
    PADDING_HORIZONTAL,
    BAR_HEIGHT,
    BAR_WIDTH,
    BAR_TRANSLATE_Y,
  };
};

const getInterpolatedValue = (
  animatedValue: SharedValue<number>,
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
  animatedValue: SharedValue<number>,
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

export default Hamburger;
