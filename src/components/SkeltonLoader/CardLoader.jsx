import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { hp, wp } from '../../utils/responsive'
import ShimmerPlaceholder from 'react-native-shimmer-placeholder'
import LinearGradient from 'react-native-linear-gradient'

const CardLoader = () => {
    const [isLoading , setIsLoading] = useState(true)
  return (
    <View style={styles.mainContainer}>
      <ShimmerPlaceholder
      visible={!isLoading}
      LinearGradient={LinearGradient}
      
      style={styles.subContainer}/>
      <ShimmerPlaceholder
      visible={!isLoading}
      LinearGradient={LinearGradient}
      
      style={styles.subContainer}/>
    </View>
  )
}

export default CardLoader

const styles = StyleSheet.create({
    mainContainer:{
        marginTop:hp(3),marginLeft:wp(5),flexDirection:"row",gap:10
    },subContainer:{
        height:hp(24),
        width:wp(48)
        ,backgroundColor:"#ede8e88c",borderRadius:30
    }
})