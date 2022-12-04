import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../../components/header'
import { globalStyles } from '../../../styles/globalStyle'

export default function Search() {
  return (
    <View style={globalStyles.container}>
        <Header
            title='Search'
        />
    </View>
  )
}

const styles = StyleSheet.create({})