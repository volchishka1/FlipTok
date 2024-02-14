import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ROUTES } from '../constants/routes';
import { MainScreenComponent } from '../screens/mainScreen/mainScreenComponent';
import { StartScreenComponent } from '../screens/startScreen/startScreenComponent';

export const MainStackNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ROUTES.START_SCREEN} component={StartScreenComponent} />
      <Stack.Screen name={ROUTES.MAIN_SCREEN} component={MainScreenComponent} />
    </Stack.Navigator>
  );
};
