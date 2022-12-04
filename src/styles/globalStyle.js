import React from 'react'
import { Dimensions, Platform, StyleSheet } from 'react-native'
import { colors } from './colors'
import { fonts } from './fonts'

export const SCREEN_WIDTH = Dimensions.get('screen').width
export const SCREEN_HEIGHT = Dimensions.get('screen').height


export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundColor
    },
    viewContainer:{
        marginHorizontal:20,
    },

    // for text
    regularSmallText:{
        fontFamily:fonts.regularFont,
        fontSize:12,
        color:colors.text
    },
    regularMediumText:{
        fontFamily:fonts.regularFont,
        color:colors.text
    },
    regularLargeText:{
        fontFamily:fonts.regularFont,
        fontSize:16,
        color:colors.text
    },
    lightSmallText:{
        fontFamily:fonts.lightFont,
        fontSize:12,
        color:colors.text
    },
    lightMediumText:{
        fontFamily:fonts.lightFont,
        color:colors.text
    },
    lightLargeText:{
        fontFamily:fonts.lightFont,
        fontSize:16,
        color:colors.text
    },

    standardSmallText:{
        fontFamily:fonts.standardFont,
        fontSize:12,
        color:colors.text
    },
    standardMediumText:{
        fontFamily:fonts.standardFont,
        color:colors.text
    },
    standardLargeText:{
        fontFamily:fonts.standardFont,
        fontSize:16,
        color:colors.text
    },

    boldSmallText:{
        fontFamily:fonts.boldFont,
        fontSize:12,
        color:colors.text
    },
    boldMediumText:{
        fontFamily:fonts.boldFont,
        color:colors.text
    },
    boldLargeText:{
        fontFamily:fonts.boldFont,
        fontSize:16,
        color:colors.text
    },

    italicSmallText:{
        fontFamily:fonts.italicFont,
        fontSize:12,
        color:colors.text
    },
    italicMediumText:{
        fontFamily:fonts.italicFont,
        color:colors.text
    },
    italicLargeText:{
        fontFamily:fonts.italicFont,
        fontSize:16,
        color:colors.text
    },

    boldItalicSmallText:{
        fontFamily:fonts.boldItalicFont,
        fontSize:12,
        color:colors.text
    },
    boldItalicMediumText:{
        fontFamily:fonts.boldItalicFont,
        color:colors.text
    },
    boldItalicLargeText:{
        fontFamily:fonts.boldItalicFont,
        fontSize:16,
        color:colors.text
    },

})