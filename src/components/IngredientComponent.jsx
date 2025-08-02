import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { hp, RFValue, wp } from '../utils/responsive';
import { colors } from '../constants/color';
import { fonts } from '../constants/fonts';

const IngredientComponent = ({ name }) => {
  return (
    <View style={styles.mainScreen}>
      <View style={styles.imageContainer} />
      <Text style={styles.textStyle}>{name}</Text>
    </View>
  );
};

export default IngredientComponent;

const styles = StyleSheet.create({
  mainScreen: {
    backgroundColor: colors.white,
    height: hp(8),
    width: wp(87),
    borderRadius: hp(2),
    justifyContent: 'flex-start',
    padding: wp(2),
    elevation: 5,
    flexDirection: 'row',
    gap: wp(5),
    alignItems: 'center',
    marginTop: wp(4),
  },
  imageContainer: {
    backgroundColor: 'gray',
    height: hp(7.5),
    width: wp(30),
    borderRadius: hp(2),
  },
  textStyle: {
    fontFamily: fonts.medium,
    color: colors.black,
    fontSize: RFValue(14),
    width: wp(48),
  },
});
