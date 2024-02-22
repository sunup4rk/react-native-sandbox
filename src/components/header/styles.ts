import { StyleSheet } from "react-native";
import colors from "../../configs/colors";
import { Fonts } from "../../configs/fonts";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 60,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 16,
  }, 
  text: {
    fontFamily: Fonts.SpoqaHanSansNeo.Medium,
    fontSize: 22,
    color: colors.text,
    marginLeft: 24
  }
})