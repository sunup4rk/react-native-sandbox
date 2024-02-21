import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {HeaderProps} from './types';
import {styles} from './styles';

const Header: FC<HeaderProps> = ({title}) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
    </View>
  );
};

export default Header;
