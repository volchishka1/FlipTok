import { Image, SafeAreaView, TouchableOpacity, View } from 'react-native';

import React, { FC } from 'react';

import { ScrollView } from 'react-native-gesture-handler';
import { downloadScreenStyles } from './styles';
import { DownloadScreenProps } from './types';
import { FullScreenVideo } from '@components/fullScreenVideo/fullScreenVideoComponent';

export const DownloadScreenView: FC<DownloadScreenProps> = (props) => {
  const { photos, url, setUrl, deleteFile } = props;
  return (
    <>
      {url && <FullScreenVideo url={url} setUrl={setUrl} deleteFile={deleteFile} />}
      <SafeAreaView style={downloadScreenStyles.saveAriaView}>
        <ScrollView style={downloadScreenStyles.rootContainer}>
          <View style={downloadScreenStyles.centerContainer}>
            {photos.map((img) => (
              <TouchableOpacity
                key={img?.node?.image?.uri}
                onPress={() => {
                  setUrl(img.node.image.uri);
                }}
              >
                <View style={downloadScreenStyles.itemContainer}>
                  <View style={downloadScreenStyles.imageContainer}>
                    <Image style={downloadScreenStyles.images} source={img.node.image} />
                  </View>
                  <View style={downloadScreenStyles.buttonContainer}></View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
