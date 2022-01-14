import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {images} from '../../assets/images';
import {colors} from '../../constants/color';

let transaction = [
  {
    name: 'Money Transfer',
    date: '20 November',
    image: images.girl,
    number: '$180.00',
  },
  {
    name: 'Money Transfer',
    date: '20 November',
    image: images.girl,
    number: '$180.00',
  },
  {
    name: 'Money Transfer',
    date: '20 November',
    image: images.girl,
    number: '$180.00',
  },
  {
    name: 'Money Transfer',
    date: '20 November',
    image: images.girl,
    number: '$180.00',
  },
  {
    name: 'Money Transfer',
    date: '20 November',
    image: images.girl,
    number: '$180.00',
  },
];

const Transaction = () => {
  return (
    <View style={styles.container}>
      {transaction.map((e, i) => {
        return (
          <View style={styles.box}>
            <Text style={styles.text}>{e.name}</Text>
            <Text style={styles.text}>{e.number}</Text>
            <Text style={styles.text}>{e.date}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default Transaction;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {},
  image: {
    width: 60,
    height: 60,
  },
  text: {
    color: colors.black,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
});
