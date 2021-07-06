/* eslint-disable prettier/prettier */
import { Formik } from 'formik';
import React from 'react';
import { Alert, KeyboardAvoidingView, ScrollView, StyleSheet, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Yup from 'yup';

export default function LoginPage({history, loginHandler, users }) {
  const {
    container,
    form,
    buttons,
    login,
    signup,
    buttonContainer,
    buttonTitle,
  } = styles;

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .min(6, 'Password is too short - should be 6 chars minimum')
      .required('Password is required'),
  });


  const logChecker = (values)=>{
    const findAccount = users.filter((m) => m.email === values.email && m.password === values.password );
    if (findAccount.length !== 0) {
      history.push('/home');
      loginHandler(findAccount);
    }
    else {
      Alert.alert('Email or password is incorrect,Please try again.');
    }
  };

  const register = () => history.push('/register');

  return (
    <KeyboardAvoidingView style={container}>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={LoginSchema}
        onSubmit={values => logChecker(values)}>
        {({handleChange, handleSubmit, errors, touched, values}) => (
          <ScrollView style={form}>
            <Input
              onChangeText={handleChange('email')}
              value={values.email}
              placeholder="Email"
              errorMessage={errors.email && touched.email ? errors.email : null}
              leftIcon={<Icon name="envelope" size={24} color="skyblue" />}
            />

            <Input
              errorMessage={
                errors.password && touched.password ? errors.password : null
              }
              onChangeText={handleChange('password')}
              value={values.password}
              secureTextEntry={true}
              maxLength={16}
              placeholder="Password"
              leftIcon={<Icon name="key" size={24} color="skyblue" />}
            />

            <View style={buttonContainer}>
              <Button
                titleStyle={buttonTitle}
                buttonStyle={[buttons, login]}
                title="Login"
                onPress={handleSubmit}
              />
              <Button
                titleStyle={buttonTitle}
                buttonSstyle={[buttons, signup]}
                title="Sign Up"
                onPress={register}
              />
            </View>
          </ScrollView>
        )}
      </Formik>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column',
  },
  form: {
    marginTop: '50%',
    width: '90%',
  },
  buttons: {
    marginBottom: 10,
    borderRadius: 5,
  },
  login: {
    backgroundColor: 'green',
  },
  signup: {
    backgroundColor: 'blue',
  },
  buttonContainer: {
    marginTop: '10%',
  },
  buttonTitle: {
    fontSize: 16,
    textTransform: 'uppercase',
  },
});
