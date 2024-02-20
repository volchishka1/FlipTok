import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import React, { useState } from 'react';

import { LogoComponent } from '../../components/logoComponent/logoComponent';

import { searchScreenStyles } from './searchScreenStyles';

export const SearchScreenComponent = () => {
  const [value, setValue] = useState('');
  return (
    <View style={searchScreenStyles.rootContainer}>
      <LogoComponent />
      <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: '5%' }}>
        <TextInput
          value={value}
          onChangeText={(text) => setValue(text)}
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
