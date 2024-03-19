import React, {FC, useState} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from '../configs/colors';
import WebView from 'react-native-webview';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigation} from '../navigators/RootStackNavigator';
import {KAKAO_APP_KEY} from '@env';

export interface WebViewProps {}

const WebViewPage: FC<WebViewProps> = () => {
  const [data, setData] = useState<any>();
  const rootStackNavigation = useNavigation<RootStackNavigation>();

  const goBack = () => {
    rootStackNavigation.goBack();
  };

  const yourHtmlString = `<!DOCTYPE html>
<html lang="kr">
<head>
    <meta charset="utf-8" />
    <title>Kakao JavaScript SDK example</title>
    <script src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.0/kakao.min.js"
      integrity="sha384-l+xbElFSnPZ2rOaPrU//2FF5B4LB8FiX5q4fXYTlfcG4PGpMkE1vcL7kNXI6Cci0"
      crossorigin="anonymous"></script>
      
    <script>
    // 페이지 로드 시 SDK 초기화 및 버튼 생성
    window.onload = function() {
      // SDK 초기화
      Kakao.init('${KAKAO_APP_KEY}'); // 여기서 'YOUR_APP_KEY'는 카카오에서 발급받은 자바스크립트 키입니다.
      
      // 자동으로 카카오톡 채널 추가 호출
      Kakao.Channel.addChannel({
          channelPublicId: '_xcLqmC' // 여기에 채널의 공개 ID를 입력해야 합니다.
      });
    }
  </script>
</head>
<body>
  <div id="add-channel-button"></div> <!-- 여기에 채널 추가 버튼이 생성됩니다. -->
</body>
</html>`;

  return (
    <SafeAreaView style={styles.container}>
      <Header goBack={goBack} />
      <WebView
        source={{html: yourHtmlString}}
        onMessage={event => {
          // 웹뷰에서 네이티브로 메시지를 받음
          setData(event.nativeEvent.data);
          console.log('========================================');
          console.log('event.nativeEvent.data:', event.nativeEvent.data);
          console.log('========================================');
        }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
      />
    </SafeAreaView>
  );
};

interface HeaderProps {
  goBack(): void;
}
const Header: FC<HeaderProps> = ({goBack}) => {
  return (
    <View>
      <TouchableOpacity onPress={goBack}>
        <Text>{`\<`}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.silver,
  },
});

export default WebViewPage;
