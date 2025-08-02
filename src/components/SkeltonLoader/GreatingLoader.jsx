import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { hp, wp } from '../../utils/responsive'
import { colors } from '../../constants/color'
import ShimmerPlaceholder from "react-native-shimmer-placeholder"
import LinearGradient from "react-native-linear-gradient"

const GreatingLoader = () => {
    const [isLoading,setIsLoading]=useState(true)
  return (
    <View style={styles.mainContainer}>
      <View>
        <ShimmerPlaceholder 
        visible={!isLoading}
        LinearGradient={LinearGradient}
        style={styles.container1}>
        </ShimmerPlaceholder>
      </View>
    </View>
  )
}

export default GreatingLoader

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,marginTop:hp(6)
    },container1:{
        backgroundColor:"#ede8e88c"
        ,height:hp(6),width:wp(45),marginLeft:wp(5),borderRadius:30
    }
})