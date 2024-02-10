import { StatusBar, View } from 'react-native';

import React, { FC, useEffect } from 'react';

import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { LogoSvg } from '../../../assets/logo';
import { ROUTES } from '../../constants/routes';
import { MainStackScreenNavigatorParamList } from '../../navigation/types';

import { LoaderComponent } from './loaderComponent';
import { startScreenStyles } from './startScreenStyles';

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
    <View style={startScreenStyles.rootContainer}>
      <StatusBar backgroundColor={'#1d014b'} />
      <View style={startScreenStyles.centerContainer}>
        <LogoSvg />
      </View>
      <LoaderComponent />
    </View>
  );
};
