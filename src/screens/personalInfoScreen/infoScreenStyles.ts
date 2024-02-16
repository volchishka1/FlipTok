import { StyleSheet, ViewStyle } from 'react-native';

export type InfoScreenStyles = {
  rootContainer: ViewStyle;
};

export const infoScreenStyles = StyleSheet.create<InfoScreenStyles>({
  rootContainer: { backgroundColor: '#1d014b', flex: 1 },
});
