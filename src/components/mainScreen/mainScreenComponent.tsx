import { StatusBar, View } from 'react-native';

import React from 'react';

import { LogoSvg } from '../../../assets/logo';
import { MainScreen } from '../../tabs/MainScreen';

export const MainScreenComponent = () => {
  return (
    <View style={{ height: '100%', backgroundColor: '#1d014b' }}>
      <StatusBar backgroundColor={'#6f42c1'} />
      <View
        style={{
          height: '15%',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#6f42c1',
          borderBottomLeftRadius: 100,
          borderBottomRightRadius: 100,
        }}
      >
        <LogoSvg />
      </View>
      <MainScreen />
    </View>
  );
};
