import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, { use, useEffect, useState } from 'react';
import Section from '../../components/Section';
import { fonts } from '../../constants/fonts';
import { RFValue } from 'react-native-responsive-fontsize';
import { hp, wp } from '../../utils/responsive';
import { colors } from '../../constants/color';
import Fontisto from '@react-native-vector-icons/fontisto';
import { useSelector } from 'react-redux';
import PopularRecipesCard from '../../components/PopularRecipesCard';
import { navigate } from '../../navigation/NavigationServices';

const Profile = () => {
  const recipes = useSelector(state => state.wishList.items);
  const handleOnPress = item => {
    navigate('RecipeDetails', {
      id: item.id,
      name: item.name,
      image: item.image,
      difficulty: item.difficulty,
      calories: item.caloriesPerServing,
      cuisine: item.cuisine,
      serving: item.servings,
      cookTime: item.cookTimeMinutes,
    });
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.headerText}>Account</Text>
      <TouchableOpacity style={styles.userCard} activeOpacity={0.8}>
        <View style={styles.userProfile}>
          <Image
            source={require('../../../assets/images/foodImage/foodImage.jpg')}
            resizeMode="cover"
            style={styles.image}
          />
        </View>
        <View>
          <Text style={styles.userNameText}>Nitish Kumar</Text>
          <Text style={styles.userNameSubText}>React Native Developer</Text>
        </View>
        <View style={styles.arrowContainer}>
          <Fontisto name="arrow-right" color={colors.white} />
        </View>
      </TouchableOpacity>
      <Section name="My Favourites" />
      <View style={{ gap: 10 }}>
        <FlatList
          data={recipes}
          numColumns={2}
          ListFooterComponent={<View style={{ height: 350 }} />}
          renderItem={({ item, index }) => {
            return (
              <View
                style={{ marginHorizontal: wp(1), marginTop: wp(4) }}
                key={index}
              >
                <PopularRecipesCard
                  id={item.id}
                  name={item.name}
                  calories={item.calories}
                  cookTime={item.cookTime}
                  image={item.image}
                  // onPress={() => handleOnPress(item)}
                />
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: hp(6),
    flex: 1,
    backgroundColor: colors.white,
  },
  headerText: {
    fontFamily: fonts.bold,
    fontSize: RFValue(18),
    alignSelf: 'center',
    color: colors.black,
  },
  userCard: {
    backgroundColor: colors.white,
    height: hp(11),
    width: wp(90),
    alignSelf: 'center',
    borderRadius: hp(1.5),
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(5),
    elevation: 5,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  userProfile: {
    backgroundColor: 'yellow',
    height: hp(9),
    width: wp(20),
    marginLeft: wp(5),
    borderRadius: hp(10),
    overflow: 'hidden',
  },
  userNameText: {
    fontFamily: fonts.bold,
    fontSize: RFValue(16),
    color: colors.black,
  },
  userNameSubText: {
    fontFamily: fonts.bold,
    fontSize: RFValue(12),
    color: colors.secondary,
    top: wp(-2),
  },
  arrowContainer: {
    height: 30,
    width: 30,
    backgroundColor: colors.black,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: '100%',
    width: '100%',
  },
});
