/* eslint-disable prettier/prettier */
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import BottomNavigator from './src/components/BottomNavigator';
import StackNavigator from './src/components/StackNavigator';

const App = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '21251200248-j7ueqv6c0a77pao03t95iv7fun5qa9mf.apps.googleusercontent.com', // client ID of type WEB for your server (needed
    });
  }, []);

  const loginAnonymously = () => {
    auth()
      .signInAnonymously()
      .then(() => {
        console.log('User signed in anonymously');
      })
      .catch(error => {
        if (error.code === 'auth/operation-not-allowed') {
          console.log('Enable anonymous in your firebase console.');
        }

        console.error(error);
      });
  };

  const forgotPassword = Email => {
    auth()
      .sendPasswordResetEmail(Email)
      .then(function (member) {
        Alert.alert('Please check your email...');
      })
      .catch(function (e) {
        console.log(e);
      });
  };

  const googleSignIn = () => {
    onGoogleButtonPress();
  };

  const onGoogleButtonPress = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      // Get the users ID token
      const {idToken} = await GoogleSignin.signIn();
      console.log(idToken);
      // Create a Google credential with the token
      //const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // Sign-in the user with the credential
      //return auth().signInWithCredential(googleCredential);
    } catch (e) {
      console.log(e.message);
    }
  };

  const logOff = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };

  const logOut = () => {
    Alert.alert(
      'Log Out!',
      'Are you sure to log out?',
      [
        {text: 'Cancel', style: 'cancel'},
        {text: 'Yes', onPress: logOff},
      ],
      {cancelable: false},
    );
  };

  // Handle user state changes

  useEffect(() => {
    const onAuthStateChanged = users => {
      setUser(users);
      if (initializing) {
        setInitializing(false);
      }
    };
    return auth().onAuthStateChanged(onAuthStateChanged);
  }, [initializing]);

  if (initializing) {
    return null;
  }

  const handleLogin = values => {
    auth()
      .signInWithEmailAndPassword(values.email, values.password)
      .then(userCredentials => {
        setUser(userCredentials.user);
      })
      .catch(error => {
        Alert.alert('That email address is invalid!');
        if (error.code === 'auth/invalid-email') {
          Alert.alert('That email address is invalid!');
        }
      });
  };

  const registerHandler = values => {
    auth()
      .createUserWithEmailAndPassword(values.email, values.password)
      .then(userCredential => {
        let profile = userCredential.user;
        profile.updateProfile({
          displayName: values.name,
        });
        Alert.alert('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('That email address is already in use!');
        }
        if (error.code === 'auth/invalid-email') {
          Alert.alert('That email address is invalid!');
        }
      });
  };

  return (
    <NavigationContainer>
      {auth().onAuthStateChanged && user ? (
        <BottomNavigator user={user} logOut={logOut} />
      ) : (
        <StackNavigator
          loginHandler={handleLogin}
          registerHandler={registerHandler}
          googleSignIn={googleSignIn}
          loginAnonymously={loginAnonymously}
        />
      )}
    </NavigationContainer>
  );
};
export default App;
