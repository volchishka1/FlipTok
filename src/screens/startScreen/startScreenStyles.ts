import { StyleSheet, ViewStyle } from 'react-native';

export type StartScreenStyles = {
  rootContainer: ViewStyle;
  centerContainer: ViewStyle;
};

export const startScreenStyles = StyleSheet.create<StartScreenStyles>({
  rootContainer: { height: '100%', backgroundColor: '#1d014b' },
  centerContainer: {
    top: '20%',
    height: '15%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
  },
});
