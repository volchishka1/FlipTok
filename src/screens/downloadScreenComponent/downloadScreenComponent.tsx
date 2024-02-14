import { Text, View } from 'react-native';

import React from 'react';

import { downloadScreenStyles } from './downloadScreenStyles';

export const DownloadScreenComponent = () => {
  return (
    <View style={downloadScreenStyles.rootContainer}>
      <Text style={{ color: 'white' }}>{'Hello app'}</Text>
    </View>
  );
};
