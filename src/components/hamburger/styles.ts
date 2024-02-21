import { Dimensions, StyleSheet } from "react-native";
import colors from "../../configs/colors";

export const WINDOW_HEIGHT = Dimensions.get("window").height

export const HAMBURGER_MENU_HEIGHT = 24
export const HAMBURGER_MENU_WIDTH = HAMBURGER_MENU_HEIGHT
export const HAMBURGER_MENU_PADDING_VERTICAL = 6
export const HAMBURGER_MENU_PADDING_HORIZONTAL = 3

export const HAMBURGER_BAR_HEIGHT = 2
export const HAMBURGER_BAR_WIDTH = HAMBURGER_MENU_WIDTH - HAMBURGER_MENU_PADDING_HORIZONTAL * 2
export const HAMBURGER_BAR_INTERPOLATE =  HAMBURGER_BAR_HEIGHT / 2

export const BAR_TRANSLATE = ((HAMBURGER_MENU_HEIGHT - 2 * HAMBURGER_MENU_PADDING_VERTICAL) / 4) * Math.sqrt(2)

export const hamburgerStyles = StyleSheet.create({
  container: {
        height: HAMBURGER_MENU_HEIGHT,
    width: HAMBURGER_MENU_WIDTH,
    justifyContent: 'space-between',
    paddingVertical: HAMBURGER_MENU_PADDING_VERTICAL,
    paddingHorizontal: HAMBURGER_MENU_PADDING_HORIZONTAL,
  }
})

export const barStyles= StyleSheet.create({
  bar: {
    width: HAMBURGER_BAR_WIDTH,
    height: HAMBURGER_BAR_HEIGHT,
    backgroundColor: colors.text
  },
})