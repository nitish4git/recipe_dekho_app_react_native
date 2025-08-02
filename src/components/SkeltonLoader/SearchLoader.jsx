import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { hp, wp } from '../../utils/responsive'
import ShimmerPlaceholder from 'react-native-shimmer-placeholder'
import LinearGradient from 'react-native-linear-gradient'

const SearchLoader = () => {
  return (
    <View style={styles.maincontainer}>
      <ShimmerPlaceholder LinearGradient={LinearGradient} style={styles.searchBarStyle}/>
    </View>
  )
}

export default SearchLoader

const styles = StyleSheet.create({
    searchBarStyle:{
        width:wp(90),
        height:hp(5),backgroundColor:"#ede8e88c",borderRadius:hp(1)
    },maincontainer:{
        alignSelf:"center",paddingTop:hp(10)
    }
})