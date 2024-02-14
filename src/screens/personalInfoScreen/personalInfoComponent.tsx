import { Text, View } from 'react-native';

import React from 'react';

import { personalInfoScreenStyles } from './personalInfoScreenStyles';

export const PersonalInfoComponent = () => {
  return (
    <View style={personalInfoScreenStyles.rootContainer}>
      <Text style={{ color: 'white' }}>{'SettingScreen'}</Text>
    </View>
  );
};
