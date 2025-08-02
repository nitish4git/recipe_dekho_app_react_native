import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { hp, wp } from '../../utils/responsive';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';

const CategoryLoader = () => {
    const [isLoading , setIsLoading] = useState(true)
  return (
    <View style={styles.mainContainer}>
     <ShimmerPlaceholder 
     visible={!isLoading}
     LinearGradient={LinearGradient}
     style={styles.subConatiner}/>
     <ShimmerPlaceholder 
     visible={!isLoading}
     LinearGradient={LinearGradient}
     style={styles.subConatiner}/>
     <ShimmerPlaceholder 
     visible={!isLoading}
     LinearGradient={LinearGradient}
     style={styles.subConatiner}/>
    </View>
  )
}

export default CategoryLoader

const styles = StyleSheet.create({
    mainContainer:{
        marginTop:hp(6),marginLeft:wp(5),flexDirection:"row",gap:10
    },subConatiner:{
        height:hp(6),width:wp(28),backgroundColor:"#ede8e88c",borderRadius:30,marginTop:wp(5)
    }
})