import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MiniCarLoader from '../../components/SkeltonLoader/MiniCarLoader'
import SearchLoader from '../../components/SkeltonLoader/SearchLoader'
import CategoryLoader from '../../components/SkeltonLoader/CategoryLoader'
import GreatingLoader from '../../components/SkeltonLoader/GreatingLoader'
import HorizontalCardLoader from '../../components/SkeltonLoader/HorizontalCardLoader'

const SearchScreenLoader = () => {
  return (
    <View>
      <SearchLoader/>
      <CategoryLoader/>
     <MiniCarLoader/>
     <GreatingLoader/>
     <HorizontalCardLoader/>
    </View>
  )
}

export default SearchScreenLoader

const styles = StyleSheet.create({})