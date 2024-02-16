import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

import React, { useMemo, useRef } from 'react';

import { BottomSheetModal } from '@gorhom/bottom-sheet/src';

import { TermsAndConditionComponent } from '../termsAndConditionScreen/termsAndConditionsComponent';

import { infoScreenStyles } from './infoScreenStyles';

export const InfoComponent = () => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ['90%', '90%'], []);
  const goToTermsAndConditionsModalScreen = () => {
    bottomSheetModalRef.current?.present();
  };

  const goToCloseBottomSheet = () => {
    bottomSheetModalRef.current?.close();
  };

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
