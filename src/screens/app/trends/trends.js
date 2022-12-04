import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../../components/header'
import { globalStyles } from '../../../styles/globalStyle'

export default function Trends() {
  return (
    <View style={globalStyles.container}>
        <Header
            title='Trends'
        />
    </View>
  )
}

const styles = StyleSheet.create({})