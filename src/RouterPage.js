/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import HomePage from './components/HomePage';
import EventManager from './EventManager';



export default class RouterPage extends EventManager {



  render() {
    const {recognitions, fileData,nextPage} = this.state;
    return (
      <LinearGradient
        colors={['#a89063', '#f2b01f']}
        style={styles.linearGradient}>

              <HomePage nextPage={nextPage} recognitions={recognitions} fileData={fileData} selectGalleryImage={this.selectGalleryImage} takePhoto={this.takePhoto} />

      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 2,
    alignItems: 'center',
    justifyContent:'space-between',
    overflow:'scroll',

  },

});
