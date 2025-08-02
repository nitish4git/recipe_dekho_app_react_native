import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FontAwesome from '@react-native-vector-icons/fontawesome';
import { hp, RFValue, wp } from '../../utils/responsive';
import { fonts } from '../../constants/fonts';
import { colors } from '../../constants/color';
import Section from '../../components/Section';
import { fetchBannerRecipes, getPopularRecipes } from '../../API/Recipes_API';
import PopularRecipesCard from '../../components/PopularRecipesCard';
import HomeScreenLoader from '../../components/SkeltonLoader/HomeScreenLoader';
import Category from '../../components/Category';
import { navigate } from '../../navigation/NavigationServices';

const { width } = Dimensions.get('screen');
const SPACING = 10;
const ITEM_WIDTH = width * 0.8;
const FULL_ITEM_WIDTH = width + SPACING * 2;
const Home = () => {
  const [bannerData, setBannerData] = useState();
  const [popularRecipesData, setPopularRecipesData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  // <-----Fetching Banner Data ------->
  useEffect(() => {
    const getBannerData = async () => {
      setIsLoading(true);
      const bannerData = await fetchBannerRecipes();
      setBannerData(bannerData.recipes);
      setIsLoading(false);
    };
    getBannerData();
  }, []);
  // Popular Recipes ------>
  useEffect(() => {
    const getPopularRecipe = async () => {
      const popularRecipeData = await getPopularRecipes();
      setPopularRecipesData(popularRecipeData);
    };
    getPopularRecipe();
  }, []);

  // Navigate to another Screen
  const handlePress = item => {
    navigate('RecipeDetails', {
      id: item.id,
      name: item.name,
      image: item.image,
      difficulty: item.difficulty,
      calories: item.caloriesPerServing,
      cuisine: item.cuisine,
      serving: item.servings,
      cookTime: item.cookTimeMinutes,
      ingredients: item.ingredients,
      instructions: item.instructions,
    });
  };
  return (
    <>
      {isLoading ? (
        <HomeScreenLoader />
      ) : (
        <View style={styles.container}>
          <View style={styles.headerStyle}>
            <View style={styles.greatingStyle}>
              <FontAwesome
                name="sun-o"
                size={hp(4)}
                color={colors.primary}
                style={{ top: -6 }}
              />
            </View>
            <View>
              <Text style={styles.greatingText}>Good Morning</Text>
              <Text style={styles.userNameStyle}>Nitish Kumar</Text>
            </View>
          </View>
          {/* Banner Section--------->  */}
          <Section name="Featured" />
          <View style={{ height: hp(22), paddingLeft: wp(2) }}>
            <FlatList
              data={bannerData}
              horizontal
              keyExtractor={item => item.id}
              showsHorizontalScrollIndicator={false}
              // snapToInterval={FULL_ITEM_WIDTH}
              // contentContainerStyle={{
              //   paddingHorizontal: (width - ITEM_WIDTH) / 2,
              // }}
              // decelerationRate={'fast'}
              // snapToAlignment="center"
              renderItem={({ item, index }) => {
                return (
                  <View style={styles.bannerContainer}>
                    <ImageBackground
                      source={{ uri: item.image }}
                      imageStyle={{ borderRadius: 20 }}
                      blurRadius={1}
                      style={styles.backgroundImage}
                    >
                      <View style={styles.recipeContainerStyle}>
                        <Text style={styles.recipeNameStyle}>{item.name}</Text>
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                          }}
                        >
                          <View
                            style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                              gap: 5,
                            }}
                          >
                            <FontAwesome
                              name="clock-o"
                              size={hp(2.3)}
                              color={colors.white}
                            />
                            <Text
                              style={styles.cookTimeStyle}
                            >{`${item.cookTimeMinutes} Minutes`}</Text>
                          </View>
                          <View>
                            <Text style={styles.difficultyStyle}>
                              {item.difficulty}
                            </Text>
                          </View>
                        </View>
                      </View>
                    </ImageBackground>
                  </View>
                );
              }}
            />
          </View>
          {/* Category section ---------> */}
          <Section name="Category" />

          <Category />

          {/* Popular Recepies ----------> */}
          <Section name="Popular Recipes" />
          <View style={{ marginTop: hp(1) }}>
            <FlatList
              data={popularRecipesData}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item.id}
              renderItem={({ item, index }) => {
                return (
                  <View
                    style={{ paddingHorizontal: wp(3), paddingBottom: hp(4) }}
                  >
                    <PopularRecipesCard
                      id={item.id}
                      image={item.image}
                      name={item.name}
                      calories={item.caloriesPerServing}
                      cookTime={item.cookTimeMinutes}
                      onPress={() => handlePress(item)}
                    />
                  </View>
                );
              }}
            />
          </View>
        </View>
      )}
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingTop: hp(6),
    backgroundColor: colors.white,
    flex: 1,
  },
  greatingText: {
    fontSize: RFValue(12),
    fontFamily: fonts.medium,
    color: colors.black,
  },
  userNameStyle: {
    fontSize: RFValue(16),
    fontFamily: fonts.semiBold,
    color: colors.black,
    top: -10,
  },
  bannerContainer: {
    paddingHorizontal: SPACING,
  },
  headerStyle: {
    paddingHorizontal: wp(5),
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 10,
  },
  backgroundImage: {
    height: 175,
    width: ITEM_WIDTH,
  },
  recipeContainerStyle: {
    position: 'absolute',
    bottom: 0,
    paddingLeft: 10,
    backgroundColor: colors.primary,
    width: '100%',
    height: hp(10),
    borderRadius: 20,
    elevation: 10,
  },
  recipeNameStyle: {
    fontFamily: fonts.bold,
    color: colors.white,
    paddingTop: hp(2),
    fontSize: RFValue(14),
  },
  cookTimeStyle: {
    color: colors.white,
    fontFamily: fonts.semiBold,
  },
  difficultyStyle: {
    paddingRight: wp(5),
    fontFamily: fonts.medium,
    color: 'yellow',
  },
  categoryStyle: {
    paddingHorizontal: wp(0.5),
    marginLeft: wp(4),
  },
  categoryContainer: {
    marginLeft: wp(1),
    paddingHorizontal: wp(5),
    borderRadius: hp(4),
    height: hp(5),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(1),
  },
  categoryText: {
    fontFamily: fonts.medium,
    color: colors.white,
  },
});
