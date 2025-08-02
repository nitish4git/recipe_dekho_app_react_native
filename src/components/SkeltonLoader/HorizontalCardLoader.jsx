import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { hp, wp } from '../../utils/responsive';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';

const HorizontalCardLoader = () => {
  return (
    <View style={styles.parentContainer}> 
    <ShimmerPlaceholder
      LinearGradient={LinearGradient}
      style={styles.mainContainer}
    />
    <ShimmerPlaceholder
      LinearGradient={LinearGradient}
      style={styles.mainContainer}
    />
    </View>
  );
};

export default HorizontalCardLoader;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: hp(1),
    paddingHorizontal: wp(5),
    width: wp(90),
    height: hp(12),
    backgroundColor: '#ede8e88c',
    alignSelf: 'center',
    borderRadius: hp(2),
  },parentContainer:{
    marginTop:hp(7)
  }
});
