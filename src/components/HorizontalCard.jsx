import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { hp, RFValue, wp } from '../utils/responsive';
import { colors } from '../constants/color';
import { fonts } from '../constants/fonts';

const HorizontalCard = ({ image, name, calories, cuisine , onpress }) => {
  const shortName = (text, limit) => {
    return text.length > limit ? text.substring(0, limit) + '...' : text;
  };
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8} onPress={onpress}>
      {/* image----->  */}
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: image }}
          resizeMode="cover"
          style={styles.imageStyle}
        />
      </View>
      {/* details  */}
      <View style={styles.detailsContainer}>
        <Text style={styles.itemNameStyle}>{name}</Text>
        <View style={styles.extraTextStyle}>
          <Text style={styles.caloriesStyle}>{`${calories} Kcal`}</Text>
          <Text style={{ fontFamily: fonts.semiBold ,color:colors.secondary}}>|</Text>
          <Text style={styles.caloriesStyle}>{`${shortName(cuisine, 7)}`}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HorizontalCard;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: wp(5),
    width: wp(90),
    backgroundColor: colors.white,
    height: hp(12),
    borderRadius: hp(3.5),
    elevation: 10,
    overflow: 'hidden',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  imageContainer: {
    height: '85%',
    width: wp(35),
    backgroundColor: colors.subText,
    borderRadius: 30,
    marginLeft: wp(2),
    overflow: 'hidden',
  },
  detailsContainer: {
    width: wp(35),
    backgroundColor: colors.white,
    gap: wp(1.5),
  },
  itemNameStyle: {
    fontFamily: fonts.semiBold,
    fontSize: RFValue(12),
    color:colors.black
  },
  caloriesStyle: {
    fontFamily: fonts.medium,
    color: colors.secondary,
  },
  extraTextStyle: {
    flexDirection: 'row',
    gap: wp(2),
    justifyContent: 'center',
    paddingLeft: wp(2),
  },
  imageStyle: {
    height: '100%',
    width: '100%',
  },
});
