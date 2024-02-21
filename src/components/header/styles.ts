import { StyleSheet } from "react-native";
import colors from "../../configs/colors";
import { Fonts } from "../../configs/fonts";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center'
  }, 
  text: {
    fontFamily: Fonts.SpoqaHanSansNeo.Bold,
    fontSize: 20,
    color: '#333'
  }
})