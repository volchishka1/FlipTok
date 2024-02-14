import { StyleSheet, ViewStyle } from 'react-native';

export type LogoComponentStyles = {
  centerContainer: ViewStyle;
};

export const logoComponentStyles = StyleSheet.create<LogoComponentStyles>({
  centerContainer: {
    height: '15%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
});
