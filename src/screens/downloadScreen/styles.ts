import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

export type DownloadScreenStyles = {
  saveAriaView: ViewStyle;
  rootContainer: ViewStyle;
  centerContainer: ViewStyle;
  imageContainer: ViewStyle;
  button: ViewStyle;
  images: ImageStyle;
  videoStyle: ViewStyle;
};

export const downloadScreenStyles = StyleSheet.create<DownloadScreenStyles>({
  videoContainer: {},
  videoStyle: {
    height: '100%',
    alignSelf: 'stretch',
  },
  saveAriaView: {
    backgroundColor: '#1d014b',
    flex: 1,
    justifyContent: 'center',
  },
  rootContainer: {
    marginTop: '10%',
    marginHorizontal: 1,
  },
  centerContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  images: {
    height: 180,
    width: '100%',
  },
  imageContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 2,
    borderRadius: 10,
    width: '32%',
    height: 180,
  },
  button: {
    borderRadius: 7,
    height: 20,
  },
});
