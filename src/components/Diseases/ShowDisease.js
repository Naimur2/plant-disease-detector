/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import EventManager from './common/EventManager';
import DiseasePage from './views/DiseasePage';

export default class ShowDisease extends EventManager {
  render() {
    const {recognitions, fileData, nextPage} = this.state;
    return (
      <LinearGradient
        colors={['#a89063', '#f2b01f']}
        style={styles.linearGradient}>
        <DiseasePage
          nextPage={nextPage}
          recognitions={recognitions}
          fileData={fileData}
          selectGalleryImage={this.selectGalleryImage}
          takePhoto={this.takePhoto}
        />
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
