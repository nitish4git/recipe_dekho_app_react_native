import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { fetchAllRecipes } from '../../API/Recipes_API.js';
import PopularRecipesCard from '../../components/PopularRecipesCard.jsx';
import Section from '../../components/Section.jsx';
import { hp, RFValue, wp } from '../../utils/responsive.js';
import { colors } from '../../constants/color.js';
import { fonts } from '../../constants/fonts.js';
import ItemCardLoader from '../../components/SkeltonLoader/ItemCardLoader.jsx';
import { navigate } from '../../navigation/NavigationServices.js';
import Category from '../../components/Category.jsx';

const Recipe = () => {
  const [allRecipe, setAllRecipe] = useState();
  const [totalCount, setTotalCount] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchedItem, setSearchedIem] = useState();
  useEffect(() => {
    const getAllRecipe = async () => {
      setIsLoading(true);
      const response = await fetchAllRecipes();
      const data = response;
      setAllRecipe(response);
      setTotalCount(data);
      setIsLoading(false);
    };
    getAllRecipe();
  }, []);

  // navigating to another screen

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
      ingredients:item.ingredients,
      instructions:item.instructions

    });
  };
  return (
    <View style={styles.mainContainer}>
      <View>
        <Section name="All Recipes" />
        <Text style={styles.subTextStyle}>{`${totalCount.length} Items`}</Text>
      </View>
      <View style={{ paddingBottom: wp(4) }}>
        <Category />
      </View>
      <FlatList
        data={allRecipe}
        numColumns={2}
        renderItem={({ item, index }) => {
          return (
            <>
              {isLoading ? (
                <ItemCardLoader key={index} />
              ) : (
                <View
                  key={index}
                  style={{ marginLeft: wp(1), marginVertical: wp(2) }}
                >
                  <PopularRecipesCard
                    id={item.id}
                    image={item.image}
                    name={item.name}
                    calories={item.caloriesPerServing}
                    cookTime={item.cookTimeMinutes}
                    onPress={() => handleOnPress(item)}
                  />
                </View>
              )}
            </>
          );
        }}
        ListFooterComponent={() => {
          return (
            <View style={styles.footercontainer}>
              <Text style={styles.footerText}>Made with ❤️ by NITISH ROY.</Text>
              <Text style={styles.footerText1}>
                at Abhiwan Technology Pvt. Ltd.
              </Text>
            </View>
          );
        }}
      />
      {/* <RecipeDetails /> */}
    </View>
  );
};

export default Recipe;

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: hp(5),
    flex: 1,
    backgroundColor: colors.white,
  },
  footerText: {
    justifyContent: 'flex-end',
    fontFamily: fonts.bold,
    fontSize: RFValue(22),
    color: colors.subText,
  },
  footercontainer: {
    height: hp(30),
    width: wp(80),
    marginLeft: wp(5),
    marginTop: wp(10),
  },
  subTextStyle: {
    paddingLeft: wp(5),
    fontFamily: fonts.semiBold,
    color: colors.subText,
    top: wp(-2),
  },
  footerText1: {
    justifyContent: 'flex-end',
    fontFamily: fonts.bold,
    fontSize: RFValue(12),
    color: colors.subText,
    top: wp(-3),
  },
});
