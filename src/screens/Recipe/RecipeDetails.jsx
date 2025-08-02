import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { hp, RFValue, wp } from '../../utils/responsive';
import { colors } from '../../constants/color';
import { fonts } from '../../constants/fonts';
import Fontisto from '@react-native-vector-icons/fontisto';
import Ionicons from '@react-native-vector-icons/ionicons';
import Lucide from '@react-native-vector-icons/lucide';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';
import TopTabBar from '../../components/TopTabNavigation';
import InstructionScreen from '../InstructionScreen';
import IngredientScreen from '../IngredientScreen';
import IngredientComponent from '../../components/IngredientComponent';
import InstructionComponent from '../../components/InstructionComponent';

const { height, width } = Dimensions.get('screen');
const IMAGE_HEIGHT = height * 0.4;
const TABS = ['INGREDIENT', 'INSTRUCTION'];
const RecipeDetails = ({ route }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const translateX = useSharedValue(0);
  const handleTabPress = index => {
    setActiveIndex(index);
    translateX.value = withTiming(index * (width / TABS.length), {
      duration: 200,
    });
  };

  // ----------------------------
  const data = route.params;
  const seperateIngrediant = data.ingredients.map(item => [item]);
  const seperateInstruction = data.instructions.map(item => [item]);

  const scrollY = useSharedValue(0);
  const handleScrollY = useAnimatedScrollHandler(event => {
    scrollY.value = event.contentOffset.y;
  });

  const animatedStyle = useAnimatedStyle(() => {
    const transform = interpolate(
      scrollY.value,
      [20, IMAGE_HEIGHT],
      [0, -IMAGE_HEIGHT + 50],
      Extrapolation.CLAMP,
    );
    return {
      transform: [{ translateY: transform }],
    };
  });
  return (
    <View style={styles.mainContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: data.image }}
          resizeMode="cover"
          style={styles.imageStyle}
        />
        <LinearGradient
          colors={['rgba(255, 255, 255, 0.7)', 'transparent']}
          style={styles.gradient}
        />
      </View>
      <Animated.View style={[styles.detailContainer, animatedStyle]}>
        <View
          style={{
            backgroundColor: colors.white,
            paddingBottom: wp(3),
            width: wp(90),
          }}
        >
          <View
            style={{
              height: hp(0.5),
              width: wp(20),
              backgroundColor: colors.secondary,
              alignSelf: 'center',
              marginTop: hp(1),
              borderRadius: 100,
            }}
          ></View>
        </View>
        {/* Scrollable area  */}
        <Animated.ScrollView
          showsVerticalScrollIndicator={false}
          onScroll={handleScrollY}
          scrollEventThrottle={16}
          contentContainerStyle={{ paddingBottom: hp(20) }}
        >
          <View>
            <View style={styles.nameContainer}>
              <View style={{ width: wp(50) }}>
                <Text style={styles.nameTextStyle}>{data.name}</Text>
              </View>
              <View style={styles.timeStyle}>
                <Fontisto name="clock" size={hp(1.9)} color={colors.primary} />
                <Text
                  style={styles.minuteTextStyle}
                >{`${data.cookTime} Minutes`}</Text>
              </View>
            </View>
            <Text style={styles.descriptionStyle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              optio eveniet molestia.
            </Text>

            {/* icons  */}
            <View style={styles.detailsContainer1}>
              <View style={{ gap: 10 }}>
                <View style={styles.firstNutritonContainer}>
                  <View
                    style={{
                      height: 50,
                      width: 50,
                      backgroundColor: '#E6EBF2',
                      borderRadius: 15,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Lucide
                      name="clock"
                      size={hp(3)}
                      color={colors.secondary}
                    />
                  </View>
                  <View>
                    <Text style={styles.nutritionText}>Difficulty</Text>
                    <Text style={styles.nutritionText1}>{data.difficulty}</Text>
                  </View>
                </View>
                <View style={styles.firstNutritonContainer}>
                  <View
                    style={{
                      height: 50,
                      width: 50,
                      backgroundColor: '#E6EBF2',
                      borderRadius: 15,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Lucide
                      name="utensils"
                      size={hp(3)}
                      color={colors.secondary}
                    />
                  </View>
                  <View>
                    <Text style={styles.nutritionText}>Cuisine</Text>
                    <Text style={styles.nutritionText1}>{data.cuisine}</Text>
                  </View>
                </View>
              </View>
              {/* second line  */}
              <View style={{ gap: 10 }}>
                <View style={styles.firstNutritonContainer}>
                  <View
                    style={{
                      height: 50,
                      width: 50,
                      backgroundColor: '#E6EBF2',
                      borderRadius: 15,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Ionicons
                      name="bonfire-outline"
                      size={hp(3)}
                      color={colors.secondary}
                    />
                  </View>
                  <View>
                    <Text style={styles.nutritionText}>Calories</Text>
                    <Text
                      style={styles.nutritionText1}
                    >{`${data.calories} Kcal`}</Text>
                  </View>
                </View>
                <View style={styles.firstNutritonContainer}>
                  <View
                    style={{
                      height: 50,
                      width: 50,
                      backgroundColor: '#E6EBF2',
                      borderRadius: 15,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Ionicons
                      name="fast-food-outline"
                      size={hp(3)}
                      color={colors.secondary}
                    />
                  </View>
                  <View>
                    <Text style={styles.nutritionText}>Serving</Text>
                    <Text
                      style={styles.nutritionText1}
                    >{`${data.serving} People`}</Text>
                  </View>
                </View>
              </View>
            </View>
            {/* manualtapbar---------->  */}
            <View style={{ marginTop: hp(2) }}>
              <TopTabBar
                tabs={TABS}
                activeIndex={activeIndex}
                onTabPress={handleTabPress}
                translateX={translateX}
              />
            </View>
            <View style={styles.screenContainer}>
              {activeIndex === 0
                ? seperateIngrediant.map(item => (
                    <IngredientComponent name={item} />
                  ))
                : seperateInstruction.map(item => (
                    <InstructionComponent name={item} />
                  ))}
            </View>
          </View>
        </Animated.ScrollView>
      </Animated.View>
    </View>
  );
};

export default RecipeDetails;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.white,
  },
  imageContainer: {
    height: IMAGE_HEIGHT,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    height: hp(45),
    width: wp(100),
  },
  detailContainer: {
    backgroundColor: colors.white,
    height: hp(100),
    borderTopLeftRadius: hp(2),
    borderTopRightRadius: hp(2),
    paddingHorizontal: wp(5),
  },
  nameTextStyle: {
    fontFamily: fonts.bold,
    fontSize: RFValue(18),
    paddingTop: wp(3),
    color: colors.black,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  timeStyle: {
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'center',
    top: hp(1.1),
  },
  minuteTextStyle: {
    fontFamily: fonts.semiBold,
    color: colors.primary,
  },
  descriptionStyle: {
    fontFamily: fonts.regular,
    color: colors.secondary,
    fontSize: RFValue(12),
  },
  detailsContainer1: {
    paddingVertical: wp(2),
    gap: wp(2),
    flexDirection: 'row',
    gap: wp(10),
  },
  firstNutritonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(2),
  },
  nutritionText: {
    fontFamily: fonts.semiBold,
    color: colors.black,
  },
  nutritionText1: {
    fontFamily: fonts.medium,
    color:colors.secondary
  },screenContainer:{
    marginBottom:hp(10)
  }
});
