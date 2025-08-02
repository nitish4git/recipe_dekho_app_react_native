import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Fontisto from '@react-native-vector-icons/fontisto';
import { hp, RFValue, wp } from '../../utils/responsive';
import { fonts } from '../../constants/fonts';
import { colors } from '../../constants/color';
import Category from '../../components/Category';
import Section from '../../components/Section';
import MiniCard from '../../components/MiniCard';
import SearchScreenLoader from '../../components/SkeltonLoader/SearchScreenLoader';
import {
  getPopularThreeRecipes,
  getEditorsChoiceRecipes,
} from '../../API/Recipes_API';
import HorizontalCard from '../../components/HorizontalCard';
import { goBack, navigate } from '../../navigation/NavigationServices';

const Search = () => {
  const [popularRecipes, setPopularRecipes] = useState();
  const [editorRecipes, setEditorRecipes] = useState();
  const [isLoading, setIsLoading] = useState(false);
  //Getting Popular Recipes
  useEffect(() => {
    const getThreeRecipe = async () => {
      setIsLoading(true);
      const response = await getPopularThreeRecipes();
      setPopularRecipes(response);
      setIsLoading(false);
    };
    getThreeRecipe();
  }, []);
  //Gettig Editor Recipes

  useEffect(() => {
    const getEditorRecipe = async () => {
      const response = await getEditorsChoiceRecipes();
      setEditorRecipes(response);
    };
    getEditorRecipe();
  }, []);

  const handleMiniCard = item => {
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
        <SearchScreenLoader />
      ) : (
        <View style={styles.mainContainer}>
          {/* Header -----> */}
          <View style={styles.header}>
            <TouchableOpacity activeOpacity={0.7} onPress={() => goBack()}>
              <Fontisto
                name="arrow-left"
                size={hp(2.5)}
                color={colors.secondary}
              />
            </TouchableOpacity>
            <Text style={styles.headerText}>Search</Text>
          </View>
          {/* Search bar---------------> */}
          <View style={styles.searchBox}>
            <Fontisto name="search" size={hp(2)} color={colors.secondary} />
            <TextInput
              placeholder="Search"
              placeholderTextColor={colors.secondary}
              style={styles.inputTextStyle}
            />
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            {/* Popular Section ---------> */}
            <Section name="Popular Recipes" />
            <View>
              <FlatList
                data={popularRecipes}
                horizontal
                style={styles.FlatListStyle}
                keyExtractor={item => item.id}
                renderItem={({ item, index }) => {
                  return (
                    <View style={styles.container}>
                      <MiniCard
                        image={item.image}
                        name={item.name}
                        onPress={() => handleMiniCard(item)}
                      />
                    </View>
                  );
                }}
              />
            </View>
            {/* Editor's Choice --------------->  */}
            <View style={styles.editorTagStyle}>
              <Section name="Editor's Choice" />
            </View>
            {/* Horizontal card ------------------>  */}
            <FlatList
              data={editorRecipes}
              keyExtractor={item => item.id}
              renderItem={({ item, index }) => {
                return (
                  <View style={styles.cardContainer}>
                    <HorizontalCard
                      image={item.image}
                      name={item.name}
                      calories={item.caloriesPerServing}
                      cuisine={item.cuisine}
                      onpress={() => handleMiniCard(item)}
                    />
                  </View>
                );
              }}
              ListFooterComponent={() => {
                return (
                  <View style={styles.footercontainer}>
                    <Text style={styles.footerText}>
                      Made with ❤️ by NITISH ROY.
                    </Text>
                    <Text style={styles.footerText1}>
                      at Abhiwan Technology Pvt. Ltd.
                    </Text>
                  </View>
                );
              }}
            />
          </ScrollView>
        </View>
      )}
    </>
  );
};

export default Search;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: hp(6),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: wp(5),
  },
  headerText: {
    fontFamily: fonts.semiBold,
    fontSize: RFValue(16),
    position: 'absolute',
    left: '50%',
    transform: [{ translateX: wp(-8) }],
    color: colors.black,
  },
  searchBox: {
    width: wp(90),
    borderWidth: 1.5,
    borderColor: colors.primary,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: wp(2),
    marginTop: hp(3),
    alignSelf: 'center',
    marginVertical: hp(1.5),
  },
  inputTextStyle: {
    fontFamily: fonts.medium,
    fontSize: RFValue(12),
    paddingLeft: wp(3),
    color: colors.black,
  },
  container: {
    marginLeft: wp(5),
    marginTop: hp(2),
  },
  FlatListStyle: {
    paddingBottom: hp(5),
  },
  editorTagStyle: {
    position: 'relative',
    top: hp(-2.5),
  },
  cardContainer: {
    paddingVertical: wp(2),
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
  footerText1: {
    justifyContent: 'flex-end',
    fontFamily: fonts.bold,
    fontSize: RFValue(12),
    color: colors.subText,
    top: wp(-3),
  },
});
