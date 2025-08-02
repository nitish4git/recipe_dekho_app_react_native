import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { hp, RFValue, wp } from '../utils/responsive'
import { colors } from '../constants/color'
import { fonts } from '../constants/fonts'

const CustomButton = ({title , onPress}) => {
  return (
      <TouchableOpacity style={styles.btn} activeOpacity={0.8} onPress={()=>onPress()}>
        <Text style={styles.textStyle}>{title}</Text>
      </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    btn:{
        width:wp(90),
        height:hp(8),
        backgroundColor:colors.primary,
        alignSelf:"center",
        borderRadius:hp(1.5),
        justifyContent:"center",
        alignItems:"center"
    },textStyle:{
        textAlign:"center",
        color:colors.white,
        fontSize:RFValue(12),
        fontFamily:fonts.semiBold
    }
})