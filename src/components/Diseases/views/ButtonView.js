/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';

export default function ButtonView({selectGalleryImage,takePhoto}) {
  return (
    <View style={styles.buttonContainer}>
            <Button
              title="Select From Gallery"
              buttonStyle={styles.buttonGallery}
              containerStyle={styles.containerStyle}
              titleStyle={styles.titleStyle}
              onPress={() => selectGalleryImage()}
            />

            <Button
              title="Use Camera Roll"
              buttonStyle={styles.buttonCamera}
              containerStyle={styles.containerStyle}
              titleStyle={styles.titleStyle}
              onPress={() => takePhoto()}
            />
          </View>
  );
}

const styles = StyleSheet.create({
  buttonGallery: {
    width: 300,
    height: 57,
    backgroundColor: 'black',
    borderRadius: 30,
  },
  buttonCamera: {
    width: 300,
    height: 57,
    backgroundColor: '#786742',
    borderRadius: 30,
  },
  buttonContainer: {
    justifyContent: 'flex-end',
    paddingBottom: 40,
    display: 'flex',
    alignItems: 'center',
    marginTop: 10,
    marginBottom:10,
  },
  containerStyle: {
    margin: 5,
  },
  titleStyle: {
    fontSize: 20,
  },
});
