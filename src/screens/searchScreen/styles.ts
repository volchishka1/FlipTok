import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

export type Styles = {
  rootContainer: ViewStyle;
  inputContainer: ViewStyle;
  input: ViewStyle;
  buttonSaveStyle: ViewStyle;
  buttonInsertStyle: ViewStyle;
  textButton: TextStyle;
  buttonContainer: ViewStyle;
  buttonInsertSvgStyle: ViewStyle;
};

export const searchScreenStyles = StyleSheet.create<Styles>({
  rootContainer: { backgroundColor: '#1d014b', flex: 1 },
  inputContainer: {
    flexDirection: 'row',
    marginHorizontal: '5%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 190,
    marginLeft: -120,
  },
  input: {
    width: '80%',
    height: 50,
    padding: 10,
    borderRadius: 7,
    backgroundColor: 'white',
  },
  buttonSaveStyle: {
    width: 80,
    height: 50,
    backgroundColor: '#be54ff',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonInsertStyle: {
    width: 100,
    height: 30,
    zIndex: 1,
    justifyContent: 'center',
    backgroundColor: '#191a40',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 7,
  },
  buttonInsertSvgStyle: {
    width: 30,
    height: 18,
  },
  textButton: {
    color: 'white',
  },
});
