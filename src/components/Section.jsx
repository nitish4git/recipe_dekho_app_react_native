import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { hp, RFValue, wp } from '../utils/responsive';
import { fonts } from '../constants/fonts';
import { colors } from '../constants/color';

const Section = ({ name }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

export default Section;

const styles = StyleSheet.create({
  container: {
    paddingTop: hp(2),
    paddingLeft: wp(5),
  },
  text: {
    fontSize: RFValue(16),
    fontFamily: fonts.bold,
    color:colors.black
  },
});
