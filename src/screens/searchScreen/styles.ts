import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

export type Styles = {
  rootContainer: ViewStyle;
  input: ViewStyle;
  buttonStyle: ViewStyle;
  textInput: TextStyle;
};

export const searchScreenStyles = StyleSheet.create<Styles>({
  rootContainer: { backgroundColor: '#1d014b', flex: 1 },
  input: {
    width: '100%',
    height: 50,
    padding: 10,
    borderRadius: 7,
    backgroundColor: 'white',
  },
  buttonStyle: {
    width: 80,
    height: 50,
    backgroundColor: '#be54ff',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -80,
  },
  textInput: {
    color: 'white',
  },
});
