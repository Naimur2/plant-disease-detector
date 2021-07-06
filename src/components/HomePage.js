/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { Alert, BackHandler, StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { Link } from 'react-router-native';

export default function HomePage({history, userId}) {
  const {bottomNav, bottomNavIcon ,linkStyle ,active} = styles;

  const backAction = () => {
    Alert.alert('Hold on!', 'Are you sure you want to go back?', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      {text: 'YES', onPress: () => BackHandler.exitApp()},
    ]);
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, []);

  const icons = [
    {name:'home', type:'material', linkTo:'/home'},
    {name:'favorite', type:'material', linkTo:'/favourite'},
    {name:'scan1', type:'antdesign', linkTo:'/disease'},
    {name:'shopping-basket', type:'material', linkTo:'/cart'},
    {name:'person', type:'material', linkTo:'/account'},
  ];

console.log(history.location.pathname);

  return (
    <View style={bottomNav}>
      {
        icons.map((icon)=>
        <Link style={history.location.pathname === icon.linkTo ? [linkStyle,active] : [linkStyle] } key={icon.name} to={icon.linkTo}>
            <Icon
              iconStyle={bottomNavIcon}
              name={icon.name}
              type={icon.type}
              color={bottomNavIcon.color}
            />
        </Link>
        )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  bottomNav: {
    flex: 1,
    flexDirection:'row',
    alignItems: 'flex-end',

    backgroundColor:'blue',
    position:'absolute',
    left:0,
    right: 0,
    bottom:0,

  },
  bottomNavIcon: {
    fontSize: 30,
    color:'#fff',
  },
  linkStyle:{
    paddingLeft:25,
    paddingRight:25,
    paddingTop:10,
    paddingBottom:10,
  },
  active:{
    backgroundColor:'darkblue',
  },
});
