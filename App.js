/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import LinearGradient from 'react-native-linear-gradient';
import TfLite from 'tflite-react-native';
import ButtonView from './src/components/home/ButtonView';
import TitleContainer from './src/components/home/TitleContainer';
import HomePage from './src/HomePage';
import OutputPage from './src/OutputPage';
const tfLite = new TfLite();
const modelFile = 'models/model.tflite';
const labelsFile = 'models/labels.txt';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recognitions: null,
      source: null,
      filePath: {
        data: '',
        uri: '',
      },
      fileData: '',
      fileUri: '',
    };
    tfLite.loadModel({model: modelFile, labels: labelsFile}, (err, res) => {
      if (err) {
        console.log(err);
      } else {
        console.log(res);
      }
    });
  }

  selectGalleryImage=()=> {
    console.log('ok');
    const options = {
      storageOptions: {
        skipBackup: false,
        path: 'images',
      },
    };

    ImagePicker.launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User Cancel Image Picker');
      } else if (response.customButton) {
        console.log('User Cancell Image PickPressed Custom Button');
      } else if (response.error) {
        console.log('Image Picker Error');
      } else {
        this.setState({
          source: response.path,
          filePath: response,
          fileData: response.data,
          fileUri: response.uri,
        });

        tfLite.runModelOnImage(
          {
            path: response.path, // required
            imageMean: 128.0, // defaults to 127.5
            imageStd: 128.0, // defaults to 127.5
            numResults: 38, // defaults to 5
            threshold: 0.05, // defaults to 0.1
          },
          (err, res) => {
            if (err) {
              console.log(err);
            } else {
              console.log({
                confidence: res[0].confidence * 100,
                name: res[0].label,
              });
              this.setState({
                recognitions: {
                  confidence: (res[0].confidence * 100).toFixed(0),
                  name: res[0].label,
                },
              });
            }
          },
        );
      }
    });
  }

  takePhoto=()=> {
    console.log('ok');
    const options = {
      storageOptions: {
        skipBackup: false,
        path: 'images',
      },
    };

    ImagePicker.launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User Cancel Image Picker');
      } else if (response.customButton) {
        console.log('User Cancell Image PickPressed Custom Button');
      } else if (response.error) {
        console.log('Image Picker Error');
      } else {

        this.setState({
          source: response.path,
          filePath: response,
          fileData: response.data,
          fileUri: response.uri,
        });

        tfLite.runModelOnImage(
          {
            path: response.path, // required
            imageMean: 128.0, // defaults to 127.5
            imageStd: 128.0, // defaults to 127.5
            numResults: 38, // defaults to 5
            threshold: 0.05, // defaults to 0.1
          },
          (err, res) => {
            if (err) {
              console.log(err);
            } else {
              console.log({
                confidence: res[0].confidence * 100,
                name: res[0].label,
              });
              this.setState({
                recognitions: {
                  confidence: (res[0].confidence * 100).toFixed(0),
                  name: res[0].label,
                },
              });
            }
          },
        );
      }
    });
  }

  render() {
    const {recognitions, fileData} = this.state;
    return (
      <LinearGradient
        colors={['#a89063', '#f2b01f']}
        style={styles.linearGradient}>
       <ScrollView>
         <TitleContainer />
         <OutputPage recognitions={recognitions} fileData={fileData} />
         <ButtonView selectGalleryImage={this.selectGalleryImage} takePhoto={this.takePhoto}/>
         <HomePage selectGalleryImage={this.selectGalleryImage} takePhoto={this.takePhoto} />
       </ScrollView>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    overflow:'scroll',
  },

});
