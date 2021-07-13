/* eslint-disable prettier/prettier */
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import EventManager from './common/EventManager';
import OutputPage from './detectorPage/OutputPage';
import DiseasePage from './views/DiseasePage';

export default class ShowDisease extends EventManager {
  render() {
    const {recognitions, fileData} = this.state;
    return (
      <View
        style={styles.contents}>
        <ScrollView>
          <DiseasePage
            selectGalleryImage={this.selectGalleryImage}
            takePhoto={this.takePhoto}
          />
           <OutputPage recognitions={recognitions} fileData={fileData} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contents: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor:'gray',
  },
});
