import React, {FC} from 'react';
import {BarProps} from './types';
import {barStyles as styles} from './styles';
import Animated from 'react-native-reanimated';

const Bar: FC<BarProps> = ({animatedStyles}) => {
  return <Animated.View style={[styles.bar, animatedStyles]} />;
};

export default Bar;
