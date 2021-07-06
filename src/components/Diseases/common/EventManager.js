/* eslint-disable prettier/prettier */
import { Component } from 'react';
import ImagePicker from 'react-native-image-picker';
import TfLite from 'tflite-react-native';
const tfLite = new TfLite();
const modelFile = 'models/model.tflite';
const labelsFile = 'models/labels.txt';


export default class RouterPage extends Component {
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
      nextPage:false,
    };
    tfLite.loadModel({model: modelFile, labels: labelsFile}, (err, res) => {
      if (err) {
        console.log(err);
      } else {
        console.log(res);
      }
    });

  }

  selectGalleryImage=async (history)=> {
    console.log('ok');
    const options = {
      storageOptions: {
        skipBackup: false,
        path: 'images',
      },
    };

  await  ImagePicker.launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User Cancel Image Picker');
      } else if (response.customButton) {
        console.log('User Cancell Image PickPressed Custom Button');
      } else if (response.error) {
        console.log('Image Picker Error');
      } else {
        console.log(response);
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
                  nextPage:true,
                }
                ,
              });
            }
          },
        );
      }
    });
  }

  takePhoto=async ()=> {
    console.log('ok');
    const options = {
      storageOptions: {
        skipBackup: false,
        path: 'images',
      },
    };

   await ImagePicker.launchCamera(options, response => {
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



}


