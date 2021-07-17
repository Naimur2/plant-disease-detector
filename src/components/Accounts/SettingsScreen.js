/* eslint-disable prettier/prettier */
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Avatar, Icon, ListItem, Text } from 'react-native-elements';

export default function SettingsScreen({logOut,user}) {

  const list = [
    {
      title: user.displayName,
      icon: 'user',
      func:()=> console.log('change'),
    },
    {
      title: user.email,
      icon: 'envelope',
      func:()=> console.log('change'),
    },
    {
      title: '****************',
      icon: 'key',
      func:()=> console.log('change'),
    },
    {
      title: 'Log Out',
      icon: 'sign-in-alt',
      func:logOut,
    },

  ];

  return (
    <ScrollView style={styles.content}>
      <View style={styles.user}>
        <Text style={styles.text} h3>Asterisk Disease Detector </Text>
        <Avatar
          size="xlarge"
          rounded
          icon={{name: 'user', type: 'font-awesome'}}
          onPress={() => console.log('Works!')}
          activeOpacity={0.7}
          containerStyle={styles.userImage}
        />
      </View>

      {list.map((item, i) => (
        <ListItem onPress={item.func } key={i} bottomDivider>
          <Icon type="font-awesome-5" name={item.icon} />
          <ListItem.Content>
            <ListItem.Title>{item.title}</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ccc',
    width: '100%',
    height: 80,
    marginTop: 5,
    marginBottom: 5,
  },
  userImage:{
     margin: 'auto',
     backgroundColor:'#ccc',
     paddingHorizontal:20,
  },
  user:{
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    textAlign:'center',
    flex:0.5,
    paddingVertical:20,
  },
  content:{
   flex:1,
  },
text:{
  textAlign:'center',
  paddingVertical:20,
},
});
