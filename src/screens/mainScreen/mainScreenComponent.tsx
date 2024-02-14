import { View } from 'react-native';

import React from 'react';

import { MainScreen } from '../../tabs/MainScreen';

import { mainScreenStyles } from './mainScreenStyles';

export const MainScreenComponent = () => {
  return (
    <View style={mainScreenStyles.rootContainer}>
      <MainScreen />
    </View>
  );
};
