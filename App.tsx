/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Main from './src/screen/Main';
import colors from './src/config/colors';

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView style={{flex: 1, backgroundColor: colors.primary}}>
      <Main />
    </GestureHandlerRootView>
  );
}

export default App;
