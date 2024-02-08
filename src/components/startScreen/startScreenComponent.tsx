import { StatusBar, View } from 'react-native';

import React, { FC, useEffect } from 'react';

import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import LottieView from 'lottie-react-native';

import { LogoSvg } from '../../../assets/logo';
import { ROUTES } from '../../constants/routes';
import { MainStackScreenNavigatorParamList } from '../../navigation/types';

export type StartScreenComponentProps = CompositeScreenProps<
  NativeStackScreenProps<MainStackScreenNavigatorParamList, ROUTES.MAIN_SCREEN>,
  any
>;

export const StartScreenComponent: FC<StartScreenComponentProps> = (props) => {
  const { navigation } = props;
  const navigateToMainScreen = () => {
    navigation.navigate(ROUTES.MAIN_SCREEN);
  };

  useEffect(() => {
    setTimeout(() => {
      navigateToMainScreen();
    }, 9000);
  });

  return (
    <View style={{ height: '100%', backgroundColor: '#1d014b' }}>
      <StatusBar backgroundColor={'#1d014b'} />
      <View
        style={{
          top: '20%',
          height: '15%',
          justifyContent: 'center',
          alignItems: 'center',
          // backgroundColor: '#6f42c1',
          borderBottomLeftRadius: 100,
          borderBottomRightRadius: 100,
        }}
      >
        <LogoSvg />
      </View>
      <LottieView
        source={require('../../../assets/animation_lkgrv9gp.json')}
        autoPlay={true}
        loop={true}
        style={{
          flex: 1,
        }}
      />
    </View>
  );
};
