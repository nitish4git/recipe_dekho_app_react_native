import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { colors } from '../../constants/color';
import { hp, RFValue, wp } from '../../utils/responsive';
import { fonts } from '../../constants/fonts';
import FontAwesome from '@react-native-vector-icons/fontawesome';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';
import LottieView from 'lottie-react-native';
import LoadingAnimation from '../../../assets/AnimatedIcons/LoadingAnimation.json';
import { navigate } from '../../navigation/NavigationServices';

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const handleSignUp = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    navigate('Home');
  };
  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <TouchableOpacity style={styles.backIconBtn} activeOpacity={0.8}>
          <FontAwesome name="angle-left" size={hp(3.5)} color={'#5E616E'} />
        </TouchableOpacity>
        <View style={styles.textContainer}>
          <Text style={styles.headingText}>Log In</Text>
          <Text style={styles.saloganText}>
            Please sign in to your existing account
          </Text>
        </View>
      </View>
      <View style={styles.lowerConatainer}>
        <View style={{ marginTop: 20 }}>
          <CustomTextInput placeholder="example@gmail.com" title="EMAIL" />
        </View>
        <View style={{ marginTop: 20 }}>
          <CustomTextInput
            placeholder="Password"
            title="PASSWORD"
            secureTextEntry={true}
          />
        </View>
        <View style={styles.passStyle}>
          <Text style={styles.text1}>Remember Password</Text>
          <Text style={styles.text2}>Forgot Password</Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <CustomButton
            title={
              isLoading ? (
                <LottieView
                  source={LoadingAnimation}
                  autoPlay
                  loop
                  style={styles.loaderStyle}
                />
              ) : (
                'LOG IN'
              )
            }
            onPress={() => handleSignUp()}
          />
        </View>
        <View style={styles.crateAcc}>
          <Text style={styles.textStyleAcc1}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigate('Register')}>
            <Text style={styles.textStyleAcc2}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
        {/* <Text style={styles.lineBreaker}>Or</Text> */}
      </View>
    </View>
  );
};

export default Login;

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
  },
  loaderStyle: {
    height: hp(70),
    width: wp(70),
  },
  passStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(5),
    paddingTop: hp(2),
  },
  text1: {
    color: colors.subText,
    fontFamily: fonts.semiBold,
  },
  text2: {
    color: colors.primary,
    fontFamily: fonts.semiBold,
  },
  crateAcc: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: hp(5),
    flexDirection: 'row',
    gap: 10,
  },
  textStyleAcc1: {
    fontFamily: fonts.semiBold,
    color: colors.subText,
  },
  textStyleAcc2: {
    color: colors.primary,
    fontFamily: fonts.semiBold,
  },
  lineBreaker: {
    textAlign: 'center',
    paddingTop: hp(5),
    fontFamily: fonts.semiBold,
    color: colors.subText,
  },
});
