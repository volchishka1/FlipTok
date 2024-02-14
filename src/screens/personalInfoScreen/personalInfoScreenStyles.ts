import { StyleSheet, ViewStyle } from 'react-native';

export type PersonalInfoScreenStyles = {
  rootContainer: ViewStyle;
};

export const personalInfoScreenStyles = StyleSheet.create<PersonalInfoScreenStyles>({
  rootContainer: { backgroundColor: '#1d014b', flex: 1 },
});
