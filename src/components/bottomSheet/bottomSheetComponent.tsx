import React, { useMemo, useRef } from 'react';

import { BottomSheetModal } from '@gorhom/bottom-sheet/src';

import { TermsAndConditionComponent } from '../../screens/termsAndConditionScreen/termsAndConditionsComponent';

export const BottomSheetComponent = () => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ['90%', '90%'], []);
  const goToCloseBottomSheet = () => {
    bottomSheetModalRef.current?.close();
  };
  return (
    <BottomSheetModal
      handleComponent={null}
      ref={bottomSheetModalRef}
      index={1}
      snapPoints={snapPoints}
    >
      <TermsAndConditionComponent goToCloseBottomSheet={goToCloseBottomSheet} />
    </BottomSheetModal>
  );
};
