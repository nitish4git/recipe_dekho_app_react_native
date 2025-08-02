import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { hp, RFValue, wp } from '../utils/responsive';
import { colors } from '../constants/color';
import { fonts } from '../constants/fonts';

const MiniCard = ({ image, name , onPress}) => {
  const truncateText = (text, limit) => {
    return text.length > limit ? text.substring(0, limit) + '...' : text;
  };
  return (
    <TouchableOpacity style={styles.mainContainer} activeOpacity={0.9} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: image }}
          resizeMode="cover"
          style={styles.imageStyle}
        />
      </View>
      <Text style={styles.textStyle}>{truncateText(name, 8)}</Text>
    </TouchableOpacity>
  );
};

export default MiniCard;

const styles = StyleSheet.create({
  mainContainer: {
    height: hp(15),
    width: wp(26),
    backgroundColor: colors.white,
    borderRadius: 20,
    elevation: 10,
    overflow: 'hidden',
  },
  imageContainer: {
    width: wp(30),
    height: hp(11),
    paddingLeft: wp(1.7),
    paddingTop: wp(1.5),
  },
  imageStyle: {
    width: '80%',
    height: '100%',
    borderRadius: 20,
  },
  textStyle: {
    fontFamily: fonts.medium,
    fontSize: RFValue(12),
    paddingHorizontal: wp(2),
    paddingVertical: hp(0.5),
    color:colors.black
  },
});
