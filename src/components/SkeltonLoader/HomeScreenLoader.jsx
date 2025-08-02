import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import GreatingLoader from '../../components/SkeltonLoader/GreatingLoader'
import CarouselLoader from '../../components/SkeltonLoader/CarouselLoader'
import CategoryLoader from '../../components/SkeltonLoader/CategoryLoader'
import CardLoader from '../../components/SkeltonLoader/CardLoader'

const HomeScreenLoader = () => {
  return (
    <View>
      <GreatingLoader/>
      <CarouselLoader/>
      <GreatingLoader/>
      <CategoryLoader/>
      {/* <GreatingLoader/> */}
      <CardLoader/>



    </View>
  )
}

export default HomeScreenLoader

const styles = StyleSheet.create({})