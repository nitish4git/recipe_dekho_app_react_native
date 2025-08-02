import React from 'react';
import { View, Dimensions, StyleSheet, FlatList, Text } from 'react-native';
import { Image } from 'react-native-animatable';

const { width } = Dimensions.get('window');
const SPACING = 0;
const ITEM_WIDTH = width * 0.7;
// const FULL_ITEM_WIDTH = ITEM_WIDTH + SPACING * 2;

export const Card = ({ item, index }) => {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        {/* <Image source={item.image} resizeMode='contain' style={styles.imageContainer}/> */}
        <Text style={{ textAlign: 'center' , width:ITEM_WIDTH, height:200 }}>{item.productName}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SPACING,
  },
  imageContainer: {
    height: 200,
    width: ITEM_WIDTH,
  },item:{
    backgroundColor:"red"
  }
});
