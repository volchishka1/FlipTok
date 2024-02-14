import { StyleSheet, ViewStyle } from 'react-native';

export type DownloadScreenStyles = {
  rootContainer: ViewStyle;
};

export const downloadScreenStyles = StyleSheet.create<DownloadScreenStyles>({
  rootContainer: { backgroundColor: '#1d014b', flex: 1 },
});
