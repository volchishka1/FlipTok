import { Text, View } from 'react-native';

import React, { FC } from 'react';

import { useAppSelector } from '../../hooks/hooks';
import { getIsActive } from '../../store/homeScreen/selectors';

import { downloadScreenStyles } from './styles';
import { DownloadScreenProps } from './types';

export const DownloadScreenView: FC<DownloadScreenProps> = (props) => {
  const {} = props;
  const trueIsTrue = useAppSelector(getIsActive);
  return (
    <View style={downloadScreenStyles.rootContainer}>
      <Text style={{ color: 'white' }}>
        {trueIsTrue === true ? ' true Hello app' : 'false Hello app'}
      </Text>
    </View>
  );
};
