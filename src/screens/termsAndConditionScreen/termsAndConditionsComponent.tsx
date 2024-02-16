import { TouchableOpacity, View } from 'react-native';

import React, { FC } from 'react';

import { CloseWindowSvg } from '../../../assets/closeModalWindow';

export type TermsAndConditionsTypes = {
  goToCloseBottomSheet: () => void;
};

export const TermsAndConditionComponent: FC<TermsAndConditionsTypes> = ({
  goToCloseBottomSheet,
}) => {
  return (
    <View>
      <TouchableOpacity accessibilityRole={'button'} onPress={goToCloseBottomSheet}>
        <CloseWindowSvg />
      </TouchableOpacity>
    </View>
  );
};
