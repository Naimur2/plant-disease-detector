/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { ListItem, Text } from 'react-native-elements';


const areas = [
  {
    name: 'Mirpur',
    details:[
      {name:'Rupnagar Nursery',address:'Rd No. 23, Rupnagar Dhaka 1216',phone:'01234567891', time:'8am-10pm Everyday'},
      {name:'Dhaka Nursery',address:'Rd No. 10, Rupnagar Dhaka 1216',phone:'01238867891', time:'8am-10pm Everyday'},
    ],
  },
  {
    name: 'Mohammadpur',
    details:[
      {name:'Alesha Nursery',address:'Rd No. 23, Mohammadpur Dhaka 1216',phone:'01734567891', time:'8am-10pm Everyday'},
      {name:'Mohammadpur Nursery',address:'Rd No. 10, Mohammadpur Dhaka 1216',phone:'01938867891', time:'8am-10pm Everyday'},
    ],
  },
  {
    name: 'Gulshan',
    details:[
      {name:'Gulshan Nursery',address:'Rd No. 23, Gulshan Dhaka 1216',phone:'01734577891', time:'8am-10pm Everyday'},
      {name:'Gulshan GB Nursery',address:'Rd No. 10, Gulshan Dhaka 1216',phone:'01938877871', time:'8am-10pm Everyday'},
    ],
  },
  {
    name: 'Motijhil',
    details:[
      {name:'Daraz Nursery',address:'Rd No. 23, Motijhil Dhaka 1216',phone:'01734577891', time:'8am-10pm Everyday'},
      {name:'Evaly  Nursery',address:'Rd No. 10, Motijhil Dhaka 1216',phone:'01938877871', time:'8am-10pm Everyday'},
    ],
  },
  {
    name: 'Dhanmondi',
    details:[
      {name:'UCB Nursery',address:'Rd No. 23, Dhanmondi Dhaka 1216',phone:'01734577891', time:'8am-10pm Everyday'},
      {name:'PUBG  Nursery',address:'Rd No. 10, Dhanmondi Dhaka 1216',phone:'01938877871', time:'8am-10pm Everyday'},
    ],
  },
  {
    name: 'Uttara',
    details:[
      {name:'RTX Nursery',address:'Rd No. 23, Uttara Dhaka 1216',phone:'01734577891', time:'8am-10pm Everyday'},
      {name:'AMD  Nursery',address:'Rd No. 10, Uttara Dhaka 1216',phone:'01938877871', time:'8am-10pm Everyday'},
    ],
  },
  // more users here
];

export default function AreaSelector({navigation}) {
  const { title } = styles;

  const [nursery,setNursery] = useState([]);
  const [shops, setShop] = useState(areas);

  useEffect(()=>{
    const getData = async ()=>{
      fetch('http://10.0.2.2:4200/shops')
      .then((res)=>res.json())
      .then((data)=> setNursery(data) )
      .catch((error)=> console.error(error)  );
    };
    getData();
},[]);

  return (
    <View>
        <Text style={title} h4>Select Area</Text>
        <ScrollView>
          {shops.map((shop, i) => (
            <ListItem
            onPress={() => {
                navigation.navigate('Nurserys', {
                  area: shop.name,
                  shop: shop.details,
                });
              }}
            key={i} bottomDivider>
              <ListItem.Content>
                <ListItem.Title>{shop.name}</ListItem.Title>
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
