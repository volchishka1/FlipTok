import { StatusBar, View } from 'react-native';

import React from 'react';

import { LogoSvg } from '../../../assets/logo';
import { MainScreen } from '../../tabs/MainScreen';

import { mainScreenStyles } from './mainScreenStyles';

export const MainScreenComponent = () => {
  return (
    <View style={mainScreenStyles.rootContainer}>
      <StatusBar backgroundColor={'#6f42c1'} />
      <View style={mainScreenStyles.centerContainer}>
        <LogoSvg />
      </View>
      <MainScreen />
    </View>
  );
};
