import { View } from 'react-native';

import React from 'react';

import { MainScreen } from '../../tabs/MainScreen';

import { mainScreenStyles } from './styles';

export const MainScreenView = () => {
  return (
    <View style={mainScreenStyles.rootContainer}>
      <MainScreen />
    </View>
  );
};
