import React from 'react'
import { Platform,} from 'react-native'

export const fonts = {
    regularFont: Platform.OS === 'ios' ? 'Jost-Regular' : 'JostRegular',  // regular dropped fontweight doesn't work for android
    lightFont: Platform.OS === 'ios' ? 'Jost-Light' : 'JostLight',
    standardFont: Platform.OS === 'ios' ? 'Jost-Medium' : 'JostMedium', //same as regular bcoz fontweight doesn't work for android
    boldFont: Platform.OS === 'ios' ? 'Jost-Bold' : 'JostBold',
    italicFont: Platform.OS === 'ios' ? 'Jost-Italic' : 'JostItalic',
    boldItalicFont: Platform.OS === 'ios' ? 'Jost-BoldItalic' : 'JostBoldItalic',
}