import React, { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import ImagePicker from 'react-native-image-picker';
import LinearGradient from 'react-native-linear-gradient';
import TfLite from 'tflite-react-native';



let tfLite = new TfLite();
var modelFile = 'models/model.tflite';
var labelsFile = 'models/labels.txt';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recognitions: null,
      source: null,
      filePath: {
        data:'',
        uri:''
      },
          fileData:'' ,
          fileUri: ''
    };
    tfLite.loadModel({model: modelFile, labels: labelsFile}, (err, res) => {
      if (err) {
        console.log(err);
      } else {
        console.log(res);
      }
    });
  }

  selectGalleryImage() {
    console.log('ok');
    const options = {
      storageOptions:{
        skipBackup:false,
        path:'images'
      }
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
          fileUri: response.uri
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
              console.log({confidence:res[0].confidence*100,name:res[0].label});
              this.setState({
                recognitions: {confidence:(res[0].confidence*100).toFixed(0),name:res[0].label},
              });
            }
          },
        );
      }
    });
  }

  tatePhoto() {
    console.log('ok');
    const options = {
      storageOptions:{
        skipBackup:false,
        path:'images'
      }
    };


    ImagePicker.launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User Cancel Image Picker');
      } else if (response.customButton) {
        console.log('User Cancell Image PickPressed Custom Button');
      } else if (response.error) {
        console.log('Image Picker Error');
      } else {
       
        const sre = { uri: response.uri };
        this.setState({
          source: response.path,
          filePath: response,
          fileData: response.data,
          fileUri: response.uri
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
              console.log({confidence:res[0].confidence*100,name:res[0].label});
              this.setState({
                recognitions: {confidence:(res[0].confidence*100).toFixed(0),name:res[0].label},
              });
            }
          },
        );
      }
    });
  }



  render() {
    const {recognitions, source,fileData} = this.state;
    console.log(source)
    return (
      <LinearGradient
        colors={['#a89063', '#f2b01f']}
        style={styles.linearGradient}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Plant Disease Detector</Text>
          <Text style={styles.subtitle}>Created By Naimur</Text>
        </View>
        <View style={styles.imageContainer}>
          {recognitions ? (
            <View >
              <Image source={{ uri: 'data:image/jpeg;base64,' + fileData }} style={[styles.flowerImage,styles.round]} />
              <Text style={styles.recog}>Fruit Name: {recognitions.name.replace('___',",").split(",")[0]}</Text>
              <Text style={styles.recog}>Disease Name: {recognitions.name.replace('___',",").split(",")[1].replace("_"," ")}</Text>
              <Text style={styles.recog}>Accuraccy: {recognitions.confidence}%</Text>
            </View>
          ) : (
           
              <Image
                source={require('./assets/plant.png')}
                style={styles.flowerImage}
              />
            
          )}
        </View>
  
        <View style={styles.buttonContainer}>
          <Button
            title="Select From Gallery"
            buttonStyle={styles.buttonGallery}
            containerStyle={{margin: 5}}
            titleStyle={{fontSize: 20}}
            onPress={()=>this.selectGalleryImage()}
          />
          <Button
            title="Use Camera Roll"
            buttonStyle={styles.buttonCamera}
            containerStyle={{margin: 5}}
            titleStyle={{fontSize: 20}}
            onPress={()=>this.tatePhoto()}
          />
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 70,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  subtitle: {
    color: 'white',
    fontSize: 16,
  },
  recog: {
    fontSize: 20,
    textAlign:'center',
    marginTop:5,
    color:'black',
    fontWeight:'bold'

  },
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
    display:'flex'
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',  
    
  },
  flowerImage: {
    height: 250,
    width: 250,
  },
  round:{
    borderRadius:150,
    overflow:"hidden",
    borderWidth:5,
    borderColor:'#87f007'
  }
});
