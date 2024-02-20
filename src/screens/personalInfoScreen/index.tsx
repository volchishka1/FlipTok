import { FC, useMemo, useRef } from 'react';

import { BottomSheetModal } from '@gorhom/bottom-sheet/src';

import { InfoScreenView } from './infoScreenView';

export type InfoScreenProps = {};
export const InfoScreen: FC<InfoScreenProps> = (props) => {
  const {} = props;
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ['90%', '90%'], []);
  const goToTermsAndConditionsModalScreen = () => {
    bottomSheetModalRef.current?.present();
  };

  const goToCloseBottomSheet = () => {
    bottomSheetModalRef.current?.close();
  };

  return (
    <InfoScreenView
      bottomSheetModalRef={bottomSheetModalRef}
      snapPoints={snapPoints}
      goToTermsAndConditionsModalScreen={goToTermsAndConditionsModalScreen}
      goToCloseBottomSheet={goToCloseBottomSheet}
    />
  );
};
