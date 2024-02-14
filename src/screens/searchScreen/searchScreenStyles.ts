import { StyleSheet, ViewStyle } from 'react-native';

export type SearchScreenStyles = {
  rootContainer: ViewStyle;
};

export const searchScreenStyles = StyleSheet.create<SearchScreenStyles>({
  rootContainer: { backgroundColor: '#1d014b', flex: 1 },
});
