import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {HeaderProps} from './types';
import {styles} from './styles';
import Hamburger from '../hamburger/hamburger';

const Header: FC<HeaderProps> = ({title, onPress}) => {
  return (
    <View style={styles.container}>
      <Hamburger onPressButton={onPress} />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Header;
