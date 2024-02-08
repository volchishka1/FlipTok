import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { FolderSvg } from '../../assets/folder';
import { SearchSvg } from '../../assets/search';
import { DownloadScreenComponent } from '../components/downloadScreenComponent/downloadScreenComponent';
import { SearchScreenComponent } from '../components/searchScreen/searchScreenComponent';
import { ROUTES } from '../constants/routes';

export const MainScreen = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarLabelStyle: { color: '#6563ff', fontSize: 12 },
      }}>
      <Tab.Screen
        name={ROUTES.SEARCH_SCREEN}
        component={SearchScreenComponent}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ focused }) => {
            return <SearchSvg />;
          },
        }}
      />
      <Tab.Screen
        name={ROUTES.DOWNLOAD_SCREEN}
        component={DownloadScreenComponent}
        options={{
          tabBarLabel: 'Downloads',
          tabBarIcon: (focused) => {
            return <FolderSvg />;
          },
        }}
      />
    </Tab.Navigator>
  );
};
