import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/color'
import { hp, RFValue, wp } from '../utils/responsive'
import { fonts } from '../constants/fonts'

const CustomTextInput = ({placeholder , title , secureTextEntry}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.textStyle}>{title}</Text>
     <TextInput placeholder={placeholder} placeholderTextColor={colors.subText} style={styles.inputText} secureTextEntry={secureTextEntry}/>
    </View>
  )
}

export default CustomTextInput

const styles = StyleSheet.create({
    container:{
        width:wp(90),
        alignSelf:"center"
    },inputText:{
        backgroundColor:"#F0F5FA",
        padding:hp(2.5),
        borderRadius:hp(1),
        color:colors.black,
        fontFamily:fonts.regular
        ,fontSize:RFValue(12)
        
    },textStyle:{
        fontSize:RFValue(12),
        fontFamily:fonts.medium,
        color:"#5E616E"
    }
})