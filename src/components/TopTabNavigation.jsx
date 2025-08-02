import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import { hp, RFValue, wp } from '../utils/responsive';
import { colors } from '../constants/color';
import { fonts } from '../constants/fonts';

const { width } = Dimensions.get('window');

const TopTabBar = ({ tabs, activeIndex, onTabPress, translateX }) => {
  const tabWidth = width / tabs.length;

  const animatedBackgroundStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: withTiming(translateX.value, { duration: 100 }) }],
    };
  });

  return (
    <View style={styles.tabBar}>
      {/* Sliding background block */}
      <Animated.View
        style={[
          styles.sliderBackground,
          { width: tabWidth },
          animatedBackgroundStyle,
        ]}
      />

      {/* Tab Buttons */}
      {tabs.map((tab, index) => (
        <TouchableOpacity
          key={tab}
          onPress={() => onTabPress(index)}
          style={styles.tabButton}
          activeOpacity={0.7}
        >
          <Text
            style={[
              styles.tabText,
              activeIndex === index && styles.activeTabText,
            ]}
          >
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default TopTabBar;

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#E6EBF2',
    borderRadius: hp(1.5),
    overflow: 'hidden',
    position: 'relative',
  },
  sliderBackground: {
    height: '100%',
    backgroundColor: colors.primary,
    position: 'absolute',
    top: 0,
    left: 0,
    borderRadius: hp(1.5),
    zIndex: 0,
  },
  tabButton: {
    flex: 1,
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: wp(2.5),
  },
  tabText: {
    fontSize: RFValue(12),
    color: colors.black,
    fontFamily:fonts.semiBold
  },
  activeTabText: {
    fontFamily: fonts.semiBold,
    color: colors.white,
  },
});



// import React from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   Dimensions,
//   StyleSheet,
// } from 'react-native';
// import Animated, {
//   useAnimatedStyle,
//   withTiming,
// } from 'react-native-reanimated';
// import { hp, RFValue, wp } from '../utils/responsive';
// import { colors } from '../constants/color';
// import { fonts } from '../constants/fonts';

// const { width } = Dimensions.get('window');

// const TopTabBar = ({ tabs, activeIndex, onTabPress }) => {
//   return (
//     <View style={styles.tabBar}>
//       {tabs.map((tab, index) => {
//         const animatedStyle = useAnimatedStyle(() => {
//           return {
//             backgroundColor: withTiming(
//               activeIndex === index ? 'tomato' : 'transparent',
//               { duration: 200 }
//             ),
//             borderRadius: withTiming(activeIndex === index ? 10 : 0, {
//               duration: 300,
//             }),
//           };
//         });

//         return (
//           <TouchableOpacity
//             key={tab}
//             onPress={() => onTabPress(index)}
//             style={styles.tabButton}
//             activeOpacity={0.7}
//           >
//             <Animated.View style={[styles.animatedBackground, animatedStyle]}>
//               <Text
//                 style={[
//                   styles.tabText,
//                   activeIndex === index && styles.activeTabText,
//                 ]}
//               >
//                 {tab}
//               </Text>
//             </Animated.View>
//           </TouchableOpacity>
//         );
//       })}
//     </View>
//   );
// };

// export default TopTabBar;

// const styles = StyleSheet.create({
//   tabBar: {
//     flexDirection: 'row',
//     backgroundColor: '#E6EBF2',
//     elevation: 5,
//     borderRadius: hp(1.5),
//     overflow: 'hidden',
//   },
//   tabButton: {
//     flex: 1,
//   },
//   animatedBackground: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: wp(4),
//   },
//   tabText: {
//     fontSize: RFValue(12),
//     color: '#555',
//     fontFamily:fonts.semiBold
//   },
//   activeTabText: {
//     fontFamily: fonts.semiBold,
//     color: colors.black, // text becomes white on tomato background
//   },
// });





// import React from 'react';
// import {View,Text,TouchableOpacity,Dimensions,StyleSheet,} from 'react-native';
// import Animated, { useAnimatedStyle } from 'react-native-reanimated';
// import { hp, wp } from '../utils/responsive';
// import { colors } from '../constants/color';
// import { fonts } from '../constants/fonts';



// const { width } = Dimensions.get('window');

// const TopTabBar = ({ tabs, activeIndex, onTabPress, underlinePosition }) => {
    
//   const underlineStyle = useAnimatedStyle(() => ({
//     transform: [{ translateX: underlinePosition.value }],
//   }));

//   return (
//     <View style={styles.tabBar}>
//       {tabs.map((tab, index) => (
//         <TouchableOpacity
//           key={tab}
//           onPress={() => onTabPress(index)}
//           style={styles.tabButton}
//         >
//           <Text
//             style={[
//               styles.tabText,
//               activeIndex === index && styles.activeTabText,
//             ]}
//           >
//             {tab}
//           </Text>
//         </TouchableOpacity>
//       ))}
//       <Animated.View
//         style={[
//           styles.underline,
//           { width: width / tabs.length },
//           underlineStyle,
//         ]}
//       />
//     </View>
//   );
// };

// export default TopTabBar;

// const styles = StyleSheet.create({
//   tabBar: {
//     flexDirection: 'row',
//     borderBottomWidth: 1,
//     borderColor: '#ddd',
//     backgroundColor: '#E6EBF2',
//     position: 'relative',
//     elevation:5,borderRadius:hp(1.5)
//   },
//   tabButton: {
//     flex: 1,
//     alignItems: 'center',
//     paddingVertical: wp(4),
//   },
//   tabText: {
//     fontSize: 16,
//     color: '#555',
//   },
//   activeTabText: {
//     fontFamily:fonts.semiBold,
//     color: colors.black,
//   },
//   underline: {
//     height: "100%",
//     backgroundColor: '#007bff',
//     position: 'absolute',
//     bottom: 0,
//   },
// });
