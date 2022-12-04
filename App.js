import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import RootStackScreen from './src/navigation/routes'
import RNBootSplash from "react-native-bootsplash";

export default function App() {
    setTimeout(() => {
        RNBootSplash.hide({fade:true})
    }, 1000);
  return (
    <View style={styles.container}>
        <NavigationContainer>
            <RootStackScreen/>
        </NavigationContainer>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black'
    }
})