import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { FolderSvg } from '../../assets/folder';
import { SearchSvg } from '../../assets/search';
import { SettingSvg } from '../../assets/setting';
import { ROUTES } from '../constants/routes';
import { DownloadScreenComponent } from '../screens/downloadScreenComponent/downloadScreenComponent';
import { PersonalInfoComponent } from '../screens/personalInfoScreen/personalInfoComponent';
import { SearchScreenComponent } from '../screens/searchScreen/searchScreenComponent';

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
      <Tab.Screen
        name={ROUTES.PERSONAL_INFO}
        component={PersonalInfoComponent}
        options={{
          tabBarLabel: 'Information',
          tabBarIcon: (focused) => {
            return <SettingSvg />;
          },
        }}
      />
    </Tab.Navigator>
  );
};
