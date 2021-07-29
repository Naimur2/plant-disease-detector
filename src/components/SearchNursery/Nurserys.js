/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';

export default function Nurserys({route, navigation}) {
  const {area} = route.params;
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('../../images/nursery.jpg')}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Rupnagar Nursery</Text>
          <View style={styles.details}>
            <Icon name="business" type="material" color="#517fa4" />
            <Text style={styles.detailsText}>Rd No. 23, Rupnagar Dhaka 1216</Text>
          </View>
          <View style={styles.details}>
            <Icon name="smartphone" type="material" color="#517fa4" />
            <Text style={styles.detailsText}>01821660000</Text>
          </View>
          <View style={styles.details}>
            <Icon name="clock" type="font-awesome-5" color="#517fa4" />
            <Text style={styles.detailsText}>8am to 10pm Everyday</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    flexDirection: 'row',
    margin: 5,
    backgroundColor: '#fff',
    padding: 5,
    borderColor: '#ccc',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  imageContainer: {
    flex: 0.28,
    padding:10,

  },
  textContainer: {
    flex: 0.72,
    paddingHorizontal: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius:120,
    margin: 0,
  },
  text: {
    color: '#000',
    fontWeight: '700',
    fontSize: 19,
    alignItems: 'center',

    //textAlign:'right',
  },
  details: {
    flexDirection: 'row',
    marginVertical: 5,
    alignItems: 'center',
  },
  detailsText: {
    paddingLeft: 5,
  },
});
