import { Text, View } from 'react-native';

import React from 'react';

import { LogoComponent } from '../../components/logoComponent/logoComponent';

import { searchScreenStyles } from './searchScreenStyles';

export const SearchScreenComponent = () => {
  return (
    <View style={searchScreenStyles.rootContainer}>
      <LogoComponent />
      <Text style={{ color: 'white' }}>{'SearchScreen'}</Text>
    </View>
  );
};
