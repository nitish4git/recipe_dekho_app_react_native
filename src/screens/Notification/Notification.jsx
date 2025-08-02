import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../constants/color'
import { hp, RFValue, wp } from '../../utils/responsive'
import { fonts } from '../../constants/fonts'
import LottieView from 'lottie-react-native';
import notifcationIcon from "../../../assets/AnimatedIcons/Notification.json"

const Notification = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Notification</Text>
      <View style={styles.bellContainer}>
        <LottieView source={notifcationIcon} autoPlay style={{height:150,width:150}}/>
        <Text style={styles.notiStyle}>No Notification </Text>
      </View>
    </View>
  )
}

export default Notification

const styles = StyleSheet.create({
  container:{
    flex:1,backgroundColor:colors.white,paddingVertical:hp(6),paddingHorizontal:wp(5)
  },headerText:{
    fontSize:RFValue(18),
    fontFamily:fonts.bold,
    color:colors.black
  },bellContainer:{
    justifyContent:'center'
    ,alignItems:"center",marginTop:hp(20)
  },notiStyle:{
    fontFamily:fonts.bold,color:colors.secondary,fontSize:RFValue(16)
  }
})