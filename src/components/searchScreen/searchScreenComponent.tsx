import { Text, View } from 'react-native';

import React from 'react';

import { searchScreenStyles } from './searchScreenStyles';

export const SearchScreenComponent = () => {
  return (
    <View style={searchScreenStyles.rootContainer}>
      <Text style={{ color: 'white' }}>{'SearchScreen'}</Text>
    </View>
  );
};
