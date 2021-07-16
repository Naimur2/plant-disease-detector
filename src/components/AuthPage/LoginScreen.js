/* eslint-disable prettier/prettier */
import { Link } from '@react-navigation/native';
import { Formik } from 'formik';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button, Icon, Input } from 'react-native-elements';
import * as Yup from 'yup';

export default function LoginScreen({navigation , loginHandler}) {
  const [inputType,setInputType] = useState({show:true,icon:'eye-slash'});

  const handleShowPass = () =>{
    const icon = inputType.icon === 'eye-slash' ? 'eye' : 'eye-slash';
    const show = !inputType.show;
    setInputType({
      show,icon,
    });
  };

  const {
    container,
    form,
    buttons,
    regSignLink,
    buttonTitle,
    socialButtons,
    registerArea,
    socialTitle,
    googleButton,
    fbButton,
    socialButton,
    forgetPass,
  } = styles;



  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .min(6, 'Password is too short - should be 6 chars minimum')
      .required('Password is required'),
  });

  return (
    <ScrollView contentContainerStyle={container}>
      <>
        <View style={socialButtons}>
          <Button
            titleStyle={socialTitle}
            buttonStyle={[googleButton, socialButton]}
            icon={
              <Icon name="google" type="font-awesome" size={15} color="white" />
            }
            title="Google"
          />
          <Button
            titleStyle={socialTitle}
            buttonStyle={[fbButton, socialButton]}
            icon={
              <Icon
                name="facebook-f"
                type="font-awesome"
                size={15}
                color="white"
              />
            }
            title="Facebook"
          />
        </View>
        <View style={form}>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={LoginSchema}
            onSubmit={values => loginHandler(values)}>
            {({handleChange, handleSubmit, errors, touched, values}) => (
              <>
                <Input
                  onChangeText={handleChange('email')}
                  value={values.email}
                  placeholder="Email"
                  errorMessage={
                    errors.email && touched.email ? errors.email : null
                  }
                  leftIcon={
                    <Icon
                      name="envelope"
                      type="font-awesome"
                      size={24}
                      color="#ACAFB4"
                    />
                  }
                />
                <Input
                  errorMessage={
                    errors.password && touched.password ? errors.password : null
                  }
                  onChangeText={handleChange('password')}
                  value={values.password}
                  secureTextEntry={inputType.show}
                  maxLength={16}
                  placeholder="Password"
                  leftIcon={
                    <Icon
                      name="key"
                      type="font-awesome"
                      size={24}
                      color="#ACAFB4"
                    />
                  }
                  rightIcon={
                   values.password ? (
                    <Icon
                    onPress={handleShowPass}
                    name={inputType.icon}
                    type="font-awesome-5"
                    size={24}
                    color="#ACAFB4"
                  />
                   ) : null
                  }
                />
                <Button
                  titleStyle={buttonTitle}
                  buttonStyle={buttons}
                  title="Login"
                  onPress={handleSubmit}
                />
                <Text style={forgetPass}>
                  Foreget Your Password?
                  <Link style={regSignLink} to="/Recover">
                    {' '}
                    Recover password.
                  </Link>
                </Text>
              </>
            )}
          </Formik>
        </View>
        <View style={registerArea}>
          <Text>
            Dont have any account?
            <Link style={regSignLink} to="/Register">
              {' '}
              Register.
            </Link>
          </Text>
        </View>
      </>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    paddingHorizontal: '5%',
  },
  form: {
    flex: 0.7,
    width: '100%',
    marginVertical: '5%',
  },
  buttons: {
    marginVertical: 12,
    borderRadius: 5,
    backgroundColor: '#359244',
  },
  regSignLink: {
    color: 'tomato',
  },
  buttonTitle: {
    fontSize: 16,
    textTransform: 'uppercase',
  },
  registerArea: {
    flex: 0.1,
    justifyContent: 'center',
  },
  socialButtons: {
    flexDirection: 'row',
    flex: 0.2,
    alignItems: 'flex-end',
    paddingBottom: '10%',
    justifyContent: 'center',
  },
  socialButton: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 5,
    alignSelf: 'stretch',
    minWidth: '46%',
    textAlign: 'center',
  },
  socialTitle: {
    color: 'white',
    paddingHorizontal: '5%',
  },
  fbButton: {
    backgroundColor: '#355492',
    marginLeft: '2%',
  },
  googleButton: {
    backgroundColor: 'red',
    marginRight: '2%',
  },
  forgetPass: {
    textAlign: 'center',
    marginBottom: 1,
  },
});
