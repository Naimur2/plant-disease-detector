/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';

export default function Card({name,address,phone,time}) {
  return (
    <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('../../../images/nursery.jpg')}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}> {name} </Text>
          <View style={styles.details}>
            <Icon name="business" type="material" color="#517fa4" />
            <Text style={styles.detailsText}>{address}</Text>
          </View>
          <View style={styles.details}>
            <Icon name="smartphone" type="material" color="#517fa4" />
            <Text style={styles.detailsText}> {phone} </Text>
          </View>
          <View style={styles.details}>
            <Icon name="clock" type="font-awesome-5" color="#517fa4" />
            <Text style={styles.detailsText}> {time} </Text>
          </View>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
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
        backgroundColor: 'white',
        flex: 0.28,
        flexDirection: 'row',
        alignItems:'center',
      },
      textContainer: {
        flex: 0.72,
        paddingHorizontal: 10,
      },
      image: {
        width: '100%',
        height: 100,
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
