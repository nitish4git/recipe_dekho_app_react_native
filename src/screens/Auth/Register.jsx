import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { colors } from '../../constants/color';
import { hp, RFValue, wp } from '../../utils/responsive';
import { fonts } from '../../constants/fonts';
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';
import FontAwesome from '@react-native-vector-icons/fontawesome';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';
import LottieView from 'lottie-react-native';
import LoadingAnimation from "../../../assets/AnimatedIcons/LoadingAnimation.json"

const Register = () => {
  const [isLoading  , setIsLoading] = useState(false)
  const handleSignUp = () =>{
    setIsLoading(true)
    setTimeout(()=>{
      setIsLoading(false)
    },2000)
  }
  return (
    <View style={styles.container}>
      {/* <StatusBar backgroundColor="pink"/> */}
      <View style={styles.upperContainer}>
        <TouchableOpacity style={styles.backIconBtn} activeOpacity={0.8}>
          <FontAwesome name="angle-left" size={hp(3.5)} color={'#5E616E'} />
        </TouchableOpacity>
        <View style={styles.textContainer}>
          <Text style={styles.headingText}>Sign Up</Text>
          <Text style={styles.saloganText}>Please sign up to get started</Text>
        </View>
      </View>
      <View style={styles.lowerConatainer}>
        <View style={{ marginTop: 35 }}>
          <CustomTextInput placeholder="Name" title="NAME" />
        </View>
        <View style={{ marginTop: 20 }}>
          <CustomTextInput placeholder="example@gmail.com" title="EMAIL" />
        </View>
        <View style={{ marginTop: 20 }}>
          <CustomTextInput placeholder="Password" title="PASSWORD"  />
        </View>
        <View style={{ marginTop: 20 }}>
          <CustomTextInput
            placeholder="Re-Type Password"
            title="RE-TYPE PASSWORD"
            secureTextEntry={true}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <CustomButton title={isLoading ? <LottieView source={LoadingAnimation}  autoPlay loop  style={styles.loaderStyle}/>:"SIGN UP"} onPress={()=>handleSignUp()}/>
        </View>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    paddingTop: hp(6),
  },
  upperContainer: {
    backgroundColor: colors.black,
    height: hp(20),
    justifyContent: 'space-between',
  },
  lowerConatainer: {
    backgroundColor: colors.background,
    height: hp(65),
    borderTopLeftRadius: hp(2),
    borderTopRightRadius: hp(2),
    flex: 1,
  },
  textContainer: {
    position: 'relative',
    bottom: hp(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIconBtn: {
    height: hp(5),
    width: hp(5),

    backgroundColor: colors.white,
    borderRadius: 50,
    marginLeft: wp(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingText: {
    fontSize: RFValue(18),
    color: colors.white,
    fontFamily: fonts.semiBold,
  },
  saloganText: {
    fontSize: RFValue(12),
    color: colors.subText,
    fontFamily: fonts.medium,
  },loaderStyle:{
    height:hp(70),
    width:wp(70),
  }
});
