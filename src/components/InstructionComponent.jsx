import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { hp, RFValue, wp } from '../utils/responsive';
import { colors } from '../constants/color';
import { fonts } from '../constants/fonts';

const InstructionComponent = ({ name }) => {
  return (
    <View style={styles.mainScreen}>
      <Text style={styles.textStyle}>{name}</Text>
    </View>
  );
};

export default InstructionComponent;

const styles = StyleSheet.create({
  mainScreen: {
    backgroundColor: colors.white,
    height: hp(8),
    width: wp(87),
    borderRadius: hp(2),
    paddingHorizontal: wp(3),
    elevation: 5,
    flexDirection: 'row',
    gap: wp(5),
    alignItems: 'center',
    marginTop: wp(2),
  },
  imageContainer: {
    backgroundColor: 'gray',
    height: hp(7.5),
    width: wp(30),
    borderRadius: hp(2),
  },
  textStyle: {
    fontFamily: fonts.regular,
    color: colors.black,
    fontSize: RFValue(12),
  },
});
