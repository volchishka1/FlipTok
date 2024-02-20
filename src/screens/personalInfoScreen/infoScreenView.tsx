import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

import React, { FC } from 'react';

import { BottomSheetModal } from '@gorhom/bottom-sheet/src';

import { TermsAndConditionComponent } from '../termsAndConditionScreen/termsAndConditionsComponent';

import { infoScreenStyles } from './styles';
import { InfoScreenViewProps } from './types';

export const InfoScreenView: FC<InfoScreenViewProps> = (props) => {
  const {
    bottomSheetModalRef,
    snapPoints,
    goToTermsAndConditionsModalScreen = () => {},
    goToCloseBottomSheet = () => {},
  } = props;

  return (
    <SafeAreaView style={infoScreenStyles.rootContainer}>
      <BottomSheetModal
        handleComponent={null}
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={snapPoints}
      >
        <TermsAndConditionComponent goToCloseBottomSheet={goToCloseBottomSheet} />
      </BottomSheetModal>
      <View>
        <TouchableOpacity accessibilityRole={'button'} onPress={goToTermsAndConditionsModalScreen}>
          <Text style={{ color: 'white' }}>{'Terms and conditions'}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
