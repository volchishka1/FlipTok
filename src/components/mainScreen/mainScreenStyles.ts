import { StyleSheet, ViewStyle } from 'react-native';

export type MainScreenStyles = {
  rootContainer: ViewStyle;
  centerContainer: ViewStyle;
};

export const mainScreenStyles = StyleSheet.create<MainScreenStyles>({
  rootContainer: { height: '100%', backgroundColor: '#1d014b' },
  centerContainer: {
    height: '15%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6f42c1',
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
  },
});
