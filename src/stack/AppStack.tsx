import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MainScreenComponent } from '../components/mainScreen/mainScreenComponent';
import { StartScreenComponent } from '../components/startScreen/startScreenComponent';
import { ROUTES } from '../constants/routes';

export const AppStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ROUTES.START_SCREEN} component={StartScreenComponent} />
      <Stack.Screen name={ROUTES.MAIN_SCREEN} component={MainScreenComponent} />
    </Stack.Navigator>
  );
};
