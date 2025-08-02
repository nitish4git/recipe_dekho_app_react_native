import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { hp, wp } from '../../utils/responsive';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';
const ItemCardLoader = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <ShimmerPlaceholder
      visible={isLoading}
      LinearGradient={LinearGradient}
      style={styles.mainContainer}
    ></ShimmerPlaceholder>
  );
};

export default ItemCardLoader;

const styles = StyleSheet.create({
  mainContainer: {
    height: hp(24),
    width: wp(48),
    backgroundColor: '#ede8e865',
    borderRadius: 30,alignSelf:'center'
  },
});
