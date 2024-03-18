import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import React, { FC } from 'react';

import { InsertSvg } from '../../../assets/insert';
import { LogoComponent } from '../../components/logoComponent/logoComponent';

import { searchScreenStyles } from './styles';
import { SearchScreenProps } from './types';

export const SearchScreenView: FC<SearchScreenProps> = (props) => {
  const { value = '', setInputValue = () => {}, insertDataLink = () => {} } = props;
  return (
    <View style={searchScreenStyles.rootContainer}>
      <LogoComponent />
      <View style={searchScreenStyles.inputContainer}>
        <TextInput
          clearTextOnFocus={true}
          value={value}
          onChangeText={setInputValue}
          accessibilityLabel={'Text input field'}
          style={searchScreenStyles.input}
        />
        <View style={searchScreenStyles.buttonContainer}>
          <TouchableOpacity
            style={searchScreenStyles.buttonInsertStyle}
            accessibilityLabel={'button'}
            onChangeText={insertDataLink}
          >
            <View style={searchScreenStyles.buttonInsertSvgStyle}>
              <InsertSvg />
            </View>
            <Text style={searchScreenStyles.textButton}>{'Вставить'}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={searchScreenStyles.buttonSaveStyle}
            accessibilityLabel={'button'}
          >
            <Text style={searchScreenStyles.textButton}>{'Скачать'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
