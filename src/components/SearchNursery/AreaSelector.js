/* eslint-disable prettier/prettier */
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { ListItem, Text } from 'react-native-elements';


const areas = [
  {
    name: 'Mirpur',
  },
  {
    name: 'Mohammadpur',
  },
  {
    name: 'Gulshan',
  },
  {
    name: 'Motijhil',
  },
  {
    name: 'Dhanmondi',
  },
  {
    name: 'Uttara',
  },
  // more users here
];

export default function AreaSelector({navigation}) {
  const { title } = styles;

  return (
    <View>
        <Text style={title} h4>Select Area</Text>
        <ScrollView>
          {areas.map((area, i) => (
            <ListItem 
            onPress={() => {
                navigation.navigate('Nurserys', {
                  area: area.name,
                });
              }}
            key={i} bottomDivider>
              <ListItem.Content>
                <ListItem.Title>{area.name}</ListItem.Title>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>
          ))}
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    paddingVertical:20,
    textAlign:'center',
  },
});
