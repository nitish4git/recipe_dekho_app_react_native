import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { hp, wp } from '../../utils/responsive'
import { colors } from '../../constants/color'
import ShimmerPlaceholder from 'react-native-shimmer-placeholder'
import LinearGradient from 'react-native-linear-gradient'

const MiniCarLoader = () => {
  return (
    <View style={styles.mainContainer}>
      <ShimmerPlaceholder 
      LinearGradient={LinearGradient}
      style={styles.container}/>
      <ShimmerPlaceholder 
      LinearGradient={LinearGradient}
      style={styles.container}/>
      <ShimmerPlaceholder 
      LinearGradient={LinearGradient}
      style={styles.container}/>
    </View>
  )
}

export default MiniCarLoader

const styles = StyleSheet.create({
    container:{
          height: hp(15),
            width: wp(26),backgroundColor:"#ede8e88c",borderRadius:hp(2.58)
    },mainContainer:{marginTop:hp(3),paddingLeft:30,flexDirection:'row',gap:wp(4)}
})