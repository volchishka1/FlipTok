import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

export type Styles = {
  rootContainer: ViewStyle;
  centerContainer: ViewStyle;
  bottomContainer: ViewStyle;
  textStyle: TextStyle;
  textDescriptionContainer: ViewStyle;
};

export const infoScreenStyles = StyleSheet.create<Styles>({
  rootContainer: {
    backgroundColor: '#1d014b',
    flex: 1,
    justifyContent: 'space-between',
  },
  centerContainer: {
    justifyContent: 'space-between',
    marginTop: '15%',
    height: '25%',
    marginHorizontal: '3%',
  },
  bottomContainer: {
    alignItems: 'center',
  },
  textDescriptionContainer: {
    marginTop: '5%',
  },
  textStyle: {
    fontFamily: 'Roboto-Bold',
    color: '#ffffff',
    fontSize: 20,
  },
});
