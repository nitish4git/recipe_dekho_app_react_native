import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import foodCategory from '../data/foodCategory.json';
import { hp, wp } from '../utils/responsive';
import { fonts } from '../constants/fonts';
import { colors } from '../constants/color';
import { fetchAllRecipes } from '../API/Recipes_API';

const Category = ({ onPress }) => {
  const [selectedCategory, setSelctedCategory] = useState('Appetizer');
  const [mealType, setMealType] = useState();
  useEffect(() => {
    const getMealType = async () => {
      const response = await fetchAllRecipes(); // full array of recipes
      const allMealTypes = response.flatMap(item => item.mealType); // flatten all mealType arrays
      const uniqueSortedMealTypes = [...new Set(allMealTypes)].sort(); // dedupe and sort
      setMealType(uniqueSortedMealTypes);
    };
    getMealType();
  }, []);

  const handleCategory = item => {
    onPress,
    setSelctedCategory(item);
  };
  return (
    <View style={styles.categoryStyle}>
      <FlatList
        horizontal
        data={mealType}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              style={[
                styles.categoryContainer,
                {
                  backgroundColor:
                    item === selectedCategory ? colors.primary : colors.subText,
                },
              ]}
              activeOpacity={0.8}
              onPress={() => handleCategory(item)}
            >
              <Text style={styles.categoryText}>{item}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  categoryStyle: {
    paddingHorizontal: wp(0.5),
    // paddingLeft: wp(2),
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
