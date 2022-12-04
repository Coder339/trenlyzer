import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import Home from '../screens/app/home/home'
import Profile from '../screens/app/profile/profile'
import Search from '../screens/app/search/search'
import Trends from '../screens/app/trends/trends'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {

    return (
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen
            name="home"
            component={Home}
            options={{ headerShown: false }}
        />
      </Stack.Navigator>
    )
};

function SearchStack() {

    return (
      <Stack.Navigator initialRouteName="search">
        <Stack.Screen
            name="search"
            component={Search}
            options={{ headerShown: false }}
        />
      </Stack.Navigator>
    )
};

function TrendStack() {

    return (
      <Stack.Navigator initialRouteName="trends">
        <Stack.Screen
            name="trends"
            component={Trends}
            options={{ headerShown: false }}
        />
      </Stack.Navigator>
    )
};

function ProfileStack() {

    return (
      <Stack.Navigator initialRouteName="profile">
        <Stack.Screen
            name="profile"
            component={Profile}
            options={{ headerShown: false }}
        />
      </Stack.Navigator>
    )
};

function AppStack() {
    return (
    <Tab.Navigator
        tabBarPosition='bottom'
        screenOptions={{
            tabBarShowLabel:false,
            headerShown:false,
            showIcon: true,
            tabBarHideOnKeyboard: true,
            tabBarStyle: {
                backgroundColor: '#000',
            },
        }}
      >
        <Tab.Screen
            name="homeStack"
            component={HomeStack}
            options={{
                tabBarIcon: ({ focused }) =>
                focused ? (
                    <Image source={require('../assets/images/tabIcons/home.png')} style={{...styles.icon,width:24,height:24}}/>
                ) : (
                    <Image source={require('../assets/images/tabIcons/home.png')}style={{...styles.icon,width:24,height:24}}/>
                ),
    
            }}
        />
        <Tab.Screen
            name="searchStack"
            component={SearchStack}
            options={{
                tabBarIcon: ({ focused }) =>
                focused ? (
                    <Image source={require('../assets/images/tabIcons/search.png')} style={styles.icon}/>
                ) : (
                    <Image source={require('../assets/images/tabIcons/search.png')} style={styles.icon}/>
                ),
            }}
        />
        <Tab.Screen
            name="trendStack"
            component={TrendStack}
            options={{
                tabBarIcon: ({ focused }) =>
                focused ? (
                    <Image source={require('../assets/images/tabIcons/globe.png')} style={{...styles.icon,width:22,height:22}}/>
                ) : (
                    <Image source={require('../assets/images/tabIcons/globe.png')} style={{...styles.icon,width:22,height:22}}/>
                ),
            }}
        />
        <Tab.Screen
            name="profileStack"
            component={ProfileStack}
            options={{
                tabBarIcon: ({ focused }) =>
                focused ? (
                    <Image source={require('../assets/images/tabIcons/user.png')} style={{...styles.icon,width:20,height:20}}/>
                ) : (
                    <Image source={require('../assets/images/tabIcons/user.png')} style={{...styles.icon,width:20,height:20}}/>
                ),
            }}
        />
    </Tab.Navigator>
    )
};

export default function RootStackScreen() {

    return (
      <Stack.Navigator initialRouteName="App">
        {/* <Stack.Screen
            name="splash"
            component={Splash}
            options={{ headerShown: false }}
        /> */}
        {/* <Stack.Screen
            name="Auth"
            component={AuthStack}
            options={{ headerShown: false }}
        /> */}
        <Stack.Screen
            name="App"
            component={AppStack}
            options={{ headerShown: false }}
        />
      </Stack.Navigator>
    )
};

const styles = StyleSheet.create({
    icon:{
        width:26,
        height:26
    }
})