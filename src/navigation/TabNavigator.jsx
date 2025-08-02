import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/Home';
import Category from '../screens/Search/Search';
import Notification from '../screens/Notification/Notification';
import Profile from '../screens/Profile/Profile';
import FontAwesome from '@react-native-vector-icons/fontawesome';
import Lucide from "@react-native-vector-icons/lucide"
import Ionicon from "@react-native-vector-icons/ionicons"
import { colors } from '../constants/color';
import { hp, RFValue, wp } from '../utils/responsive';
import Fontisto from '@react-native-vector-icons/fontisto';
import Recipe from '../screens/Recipe/Recipe';
import Search from '../screens/Search/Search';

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBarItem,
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarIconStyle: styles.tabBarIcon,
      }}
    >
      <Tab.Screen
        name="Food"
        component={Home}
        options={{
          tabBarActiveTintColor: colors.primary,
          tabBarIcon: ({ focused, size, color }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarActiveTintColor: colors.primary,
          tabBarIcon: ({ focused, size, color }) => (
            <Fontisto name='search' size={size} color={color}/>
          ),
        }}
      />
      <Tab.Screen
        name="Recipe"
        component={Recipe}
        
        options={{
          tabBarActiveTintColor: colors.white,
          tabBarLabel:()=>null,
          tabBarIcon: ({ focused, size, color }) => (
            <View style={styles.recipeBtnStyle}>
              <Lucide name='chef-hat' size={size} color={color}/>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarActiveTintColor: colors.primary,
          tabBarIcon: ({ focused, size, color }) => (
            <Ionicon name='notifications-outline' size={size} color={color}/>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarActiveTintColor: colors.primary,
          tabBarIcon: ({ focused, size, color }) => (
            <FontAwesome name="user-o" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  tabBarItem: {
    position: 'absolute',
    bottom: hp(4),
    left: hp(3),
    right: hp(3),
    borderRadius: 50,
    height: hp(9),
    marginHorizontal: wp(3),backgroundColor:colors.white,
  },
  tabBarLabel: {
    fontSize: RFValue(12),
  },
  tabBarIcon: {
    marginTop: hp(1),
  },recipeBtnStyle:{
    alignItems:"center",
    justifyContent:"center",
    borderRadius:50,
    backgroundColor:colors.black,
    height:65,width:65,top:-20,elevation:5
  }
});
