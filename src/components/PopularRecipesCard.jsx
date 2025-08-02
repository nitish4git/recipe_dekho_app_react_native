import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { hp, RFValue, wp } from '../utils/responsive';
import { colors } from '../constants/color';
import { fonts } from '../constants/fonts';
import Fontisto from '@react-native-vector-icons/fontisto';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist, removeFromWishlist } from '../redux/Slice/recipeSlice';

const PopularRecipesCard = ({
  id,
  image,
  name,
  calories,
  cookTime,
  onPress,
}) => {
  const dispatch = useDispatch();
  const wishlistItem = useSelector(state => state.wishList?.items);
  const [wishlistRecipe, setWishlistRecipe] = useState({
    id: id,
    name: name,
    image: image,
    calories: calories,
    cookTime: cookTime,
  });
  // Checking item present in wishlist or not.
  const isInWishlist = wishlistItem.some(item => item.id === id);
  // Some() method returns only boolean like true and false
  // Pushing data to the Redux Store.
  const handleWishlist = () => {
    if (isInWishlist) {
      dispatch(removeFromWishlist(id));
    } else {
      dispatch(addToWishlist(wishlistRecipe));
    }
  };
  return (
    <TouchableOpacity
      style={styles.mainContainer}
      activeOpacity={0.9}
      onPress={onPress}
    >
      {/* Image container  */}

      <View style={styles.imageContainerStyle}>
        <Image
          source={{ uri: image }}
          resizeMode="cover"
          style={styles.imageStyle}
        />
      </View>
      {/* wishlist Icon  */}
      <TouchableOpacity
        style={styles.wishlistContainer}
        onPress={handleWishlist}
        activeOpacity={0.8}
      >
        <Fontisto
          name={isInWishlist ? 'heart' : 'heart-alt'}
          size={wp(4)}
          color={colors.primary}
        />
      </TouchableOpacity>
      {/* Details Container  */}
      <View style={styles.detailsContainer}>
        {/* name  */}
        <Text style={styles.recipeNameStyle}>{name}</Text>
        <View style={styles.kcalContainer}>
          {/* calories */}
          <Fontisto name="fire" size={hp(2.5)} color={colors.subText} />
          <Text style={styles.kcalStyle}>{`${calories} kcal`}</Text>
        </View>
        <View style={styles.kcalContainer}>
          {/* cook time */}
          <Fontisto name="clock" size={hp(2.5)} color={colors.subText} />
          <Text style={styles.kcalStyle}>{`${cookTime} Minutes`}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PopularRecipesCard;

const styles = StyleSheet.create({
  mainContainer: {
    height: hp(28),
    width: wp(48),
    backgroundColor: colors.white,
    borderRadius: 30,
    elevation: 5,
    overflow: 'hidden',
  },
  imageContainerStyle: {
    backgroundColor: 'transparent',
    width: wp(45),
    height: hp(13.5),
    alignSelf: 'center',
    borderRadius: 30,
    marginTop: hp(0.4),
    overflow: 'hidden',
  },
  imageStyle: {
    width: wp(45),
    height: hp(13.5),
  },
  detailsContainer: {
    // marginVertical:hp(1.5)
    marginHorizontal: hp(1.5),
    top: wp(-8),
  },
  recipeNameStyle: {
    fontSize: RFValue(14),
    fontFamily: fonts.bold,
    color:colors.black
  },
  kcalStyle: {
    fontFamily: fonts.medium,
    fontSize: RFValue(12),
    paddingTop: hp(0.2),
    color: colors.secondary,
  },
  kcalContainer: {
    flexDirection: 'row',
    // ,alignItems:"center",
    justifyContent: 'flex-start',
    gap: hp(0.8),
  },
  wishlistContainer: {
    height: 35,
    width: 35,
    backgroundColor: colors.white,
    position: 'relative',
    top: hp(-12),
    left: wp(35),
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
