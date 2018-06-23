import {Platform, StyleSheet} from 'react-native';
import * as defaultStyle from '../../../style';

const STYLESHEET_ID = 'stylesheet.day.period';

const FILLER_HEIGHT = 32;

export default function styleConstructor(theme={}) {
  const appStyle = {...defaultStyle, ...theme};
  return StyleSheet.create({
    wrapper: {
      flex: 1,
      alignItems: 'center',
      alignSelf: 'stretch'
    },
    base: {
      //borderWidth: 1,
      width: 32,
      height: FILLER_HEIGHT,
      alignItems: 'center'
    },
    fillers: {
      position: 'absolute',
      height: FILLER_HEIGHT,
      flexDirection: 'row',
      left: 0,
      right: 0
    },
    leftFiller: {
      height: FILLER_HEIGHT,
      flex: 1
    },
    rightFiller: {
      height: FILLER_HEIGHT,
      flex: 1
    },
    text: {
        marginTop: Platform.OS === 'android' ? 4 : 6,
        fontSize: appStyle.textDayFontSize,
        fontFamily: appStyle.textDayFontFamily,
        fontWeight: '300',
        color: appStyle.dayTextColor,
        backgroundColor: 'rgba(255, 255, 255, 0)'
    },
    todayText: {
        color: appStyle.todayTextColor
    },
    disabledText: {
      color: appStyle.textDisabledColor
    },
    quickAction: {
      backgroundColor: 'white',
      borderWidth: 1,
      borderColor: '#c1e4fe'
    },
    quickActionText: {
      marginTop: 6,
      color: appStyle.textColor
    },
    firstQuickAction: {
      backgroundColor: appStyle.textLinkColor
    },
    firstQuickActionText: {
      color: 'white'
    },
    naText: {
      color: '#b6c1cd'
    },
    ...(theme[STYLESHEET_ID] || {})
  });
}
