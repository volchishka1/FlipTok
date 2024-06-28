import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { SearchSvg } from '../../assets/search';
import { SettingSvg } from '../../assets/setting';
import { ROUTES } from '../constants/routes';
import { InfoScreen } from '../screens/personalInfoScreen';
import { SearchScreen } from '../screens/searchScreen';
import { strings } from '../constants/textConst';
import { DownloadScreen } from '@screens/downloadScreen';
import { FolderSvg } from '@assets/folder';

export const MainScreen = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarLabelStyle: { color: '#6563ff', fontSize: 12, fontFamily: 'Roboto-Medium' },
      }}
    >
      <Tab.Screen
        name={ROUTES.SEARCH_SCREEN}
        component={SearchScreen}
        options={{
          tabBarLabel: `${strings.getString('search')}`,
          tabBarIcon: ({ focused }) => {
            return <SearchSvg />;
          },
        }}
      />
      <Tab.Screen
        name={ROUTES.DOWNLOAD_SCREEN}
        component={DownloadScreen}
        options={{
          tabBarLabel: 'Downloads',
          tabBarIcon: (focused) => {
            return <FolderSvg />;
          },
        }}
      />
      <Tab.Screen
        name={ROUTES.PERSONAL_INFO}
        component={InfoScreen}
        options={{
          tabBarLabel: `${strings.getString('information')}`,
          tabBarIcon: (focused) => {
            return <SettingSvg />;
          },
        }}
      />
    </Tab.Navigator>
  );
};
