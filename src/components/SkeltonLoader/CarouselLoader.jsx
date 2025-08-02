import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { hp, wp } from '../../utils/responsive'
import ShimmerPlaceholder from 'react-native-shimmer-placeholder'
import LinearGradient from 'react-native-linear-gradient'

const CarouselLoader = () => {
    const [isLoading , setIsLoading] = useState(true)
  return (
    <View style={styles.MainContainer}>
        <ShimmerPlaceholder style={styles.container}
        visible={!isLoading}
        LinearGradient={LinearGradient}
        />
    </View>
  )
}

export default CarouselLoader

const styles = StyleSheet.create({
    MainContainer:{
        marginTop:hp(10),alignSelf:"center"
    },
    container:{
        height:hp(22),backgroundColor:"#ede8e88c",width:wp(90),borderRadius:30
    }
})