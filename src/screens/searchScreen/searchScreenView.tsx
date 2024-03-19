import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import React, { FC } from 'react';

import { LogoComponent } from '../../components/logoComponent/logoComponent';

import { searchScreenStyles } from './styles';
import { SearchScreenProps } from './types';

export const SearchScreenView: FC<SearchScreenProps> = (props) => {
  const { value = '', setInputValue = () => {} } = props;
  return (
    <View style={searchScreenStyles.rootContainer}>
      <LogoComponent />
      <View style={searchScreenStyles.inputContainer}>
        <TextInput
          value={value}
          onChangeText={setInputValue}
          accessibilityLabel={'Text input field'}
          style={searchScreenStyles.input}
        />
        <TouchableOpacity style={searchScreenStyles.buttonStyle} accessibilityLabel={'button'}>
          <Text style={searchScreenStyles.textInput}>{'Скачать'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
