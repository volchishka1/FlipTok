import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { DownloadScreenComponent } from '../components/downloadScreenComponent/downloadScreenComponent';
import { SearchScreenComponent } from '../components/searchScreen/searchScreenComponent';
import { ROUTES } from '../constants/routes';

export const MainScreen = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
      <Tab.Screen
        name={ROUTES.SEARCH_SCREEN}
        component={SearchScreenComponent}
        options={{
          tabBarLabel: '',
          // tabBarIcon: ({ focused }) => {
          //   return focused ? <SvgBottomHomeActive /> : <SvgBottomHome />;
          // },
        }}
      />
      <Tab.Screen
        name={ROUTES.DOWNLOAD_SCREEN}
        component={DownloadScreenComponent}
        options={{
          tabBarLabel: '',
          // tabBarIcon: (focused) => {
          //   return <SvgBottomSearch />;
          // },
        }}
      />
    </Tab.Navigator>
  );
};
