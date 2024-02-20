import { TouchableOpacityProps } from 'react-native';

import { BottomSheetModal, BottomSheetModalProps } from '@gorhom/bottom-sheet';

export type InfoScreenViewProps = {
  bottomSheetModalRef?: React.Ref<BottomSheetModal>;
  snapPoints: BottomSheetModalProps['snapPoints'];
  goToTermsAndConditionsModalScreen: TouchableOpacityProps['onPress'];
  goToCloseBottomSheet: TouchableOpacityProps['onPress'];
};
