import { TextInputProps, TextProps } from 'react-native';

export type SearchScreenProps = {
  value: TextProps['children'];
  setInputValue: TextInputProps['onChangeText'];
};
