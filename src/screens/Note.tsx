import {useNavigation} from '@react-navigation/native';
import React, {FC, useEffect, useState} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {RootStackNavigation} from '../navigators/RootStackNavigator';
import colors from '../configs/colors';
import Animated, {
  SharedValue,
  interpolate,
  useDerivedValue,
  useSharedValue,
} from 'react-native-reanimated';

export interface NoteProps {}

const Note: FC<NoteProps> = () => {
  const rootStackNavigation = useNavigation<RootStackNavigation>();
  const goBack = () => {
    rootStackNavigation.goBack();
  };

  const [pageHeight, setPageHeight] = useState(0);
  const [textInput, setTextInput] = useState('');
  const [isOpenContainer, setOpenContainer] = useState(false);

  const sharedValue = useSharedValue(0);
  let containerHeight = 0;
  const openContainerHeight = useDerivedValue(() => {
    return interpolate(sharedValue.value, [0, 1], [0, pageHeight]);
  });
  const closeContainerHeight = useDerivedValue(() => {
    return interpolate(sharedValue.value, [1, 0], [pageHeight, 0]);
  });
  const animatedStyles = useEffect(() => {
    const keyboard = Keyboard.addListener('keyboardDidShow', e =>
      setPageHeight(e.endCoordinates.height),
    );
    // 언마운트될 때 리스너 제거
    return () => {
      keyboard.remove();
    };
  }, []);

  useEffect(() => {
    if (isOpenContainer) Keyboard.dismiss();
  }, [isOpenContainer]);

  useEffect(() => {
    if (Keyboard.isVisible()) {
      setOpenContainer(false);
    }
  }, [Keyboard.isVisible()]);

  const onPressEmoticon = () => {
    if (!isOpenContainer) {
    } else {
    }

    setOpenContainer(!isOpenContainer);
  };
  return (
    <KeyboardAvoidingView
      behavior={'height'}
      style={styles.keyboardAvoidingView}>
      <SafeAreaView style={styles.container}>
        <Header goBack={goBack} />
        <ChatScreen setEmoticonContainer={() => setOpenContainer(false)} />
        <InputToolbar
          text={textInput}
          setTextInput={setTextInput}
          onPressEmoticon={onPressEmoticon}
        />
        {/* {isOpenContainer && <EmoticonContainer  />} */}
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

interface HeaderProps {
  goBack(): void;
}
const Header: FC<HeaderProps> = ({goBack}) => {
  return (
    <View style={headerStyles.container}>
      <Pressable
        style={pressed => [{transform: [{scale: pressed ? 0.96 : 1}]}]}
        onPress={goBack}>
        <Text>뒤로</Text>
      </Pressable>
    </View>
  );
};

interface ChatScreenProps {
  setEmoticonContainer(): void;
}
const ChatScreen: FC<ChatScreenProps> = ({setEmoticonContainer}) => {
  const dismissKeyboard = () => {
    Keyboard.dismiss();
    setEmoticonContainer();
  };

  return (
    <TouchableWithoutFeedback
      onPress={dismissKeyboard}
      style={chatStyles.container}>
      <View style={{flex: 1}}></View>
    </TouchableWithoutFeedback>
  );
};

interface InputToolbarProps {
  text: string;
  setTextInput(text: string): void;
  onPressEmoticon(): void;
}
const InputToolbar: FC<InputToolbarProps> = ({
  text,
  setTextInput,
  onPressEmoticon,
}) => {
  return (
    <View style={toolbarStyles.container}>
      <View style={toolbarStyles.wrapper}>
        <TextInput
          style={{flex: 1}}
          value={text}
          onChangeText={text => setTextInput(text)}
        />
        <TouchableOpacity onPress={onPressEmoticon}>
          <Text>🫥</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

interface EmoticonContainerProps {
  height: SharedValue<number>;
}
const EmoticonContainer: FC<EmoticonContainerProps> = ({}) => {
  return (
    <Animated.View style={{backgroundColor: colors.text}}>
      <View></View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    height: 40,
    flex: 1,
    justifyContent: 'center',
  },
  container: {flex: 1},
});

const headerStyles = StyleSheet.create({
  container: {
    height: 40,
    backgroundColor: colors.primary,
    justifyContent: 'center',
  },
});

const chatStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const toolbarStyles = StyleSheet.create({
  container: {
    height: 40,
    paddingHorizontal: 16,
    paddingVertical: 5,
    backgroundColor: colors.subtext,
    justifyContent: 'center',
  },
  wrapper: {
    height: 30,
    borderColor: '#000',
    borderRadius: 20,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  textInput: {},
});

export default Note;
