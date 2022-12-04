import { StyleSheet, Text, View,Pressable } from 'react-native'
import React from 'react'
import { colors } from '../styles/colors';
import { globalStyles, SCREEN_HEIGHT } from '../styles/globalStyle';


export default function Header(props) {
    const { title, isRightSide, onPress, leftSvg, rightSvg, onRightPress } = props;
    return (
      <View style={{ height: SCREEN_HEIGHT / 8, backgroundColor: colors.backgroundColor,borderBottomColor:colors.primary,borderBottomWidth:1 }}>
  
        <View style={styles.mainContainer}>
            <View style={styles.insideContainer}>
                <View style={styles.header}>
                    {leftSvg &&
                        <Pressable
                            onPress={onPress}
                            style={{ paddingHorizontal:20,paddingVertical:2 }}
                        >
                            {leftSvg}
                        </Pressable>
                    }
                    <Text style={styles.title}>{title}</Text>
                </View>
                <Pressable onPress={onRightPress} style={{marginRight:20}}>{rightSvg}</Pressable>
            </View>
        </View>
  
      </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor:colors.headerBackgroundColor
    },
    insideContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // marginHorizontal: 22,
        marginVertical: 16,
        alignItems:'center'
    },
    title: {
        marginHorizontal: 20,
        marginVertical: 2,
        ...globalStyles.boldItalicSmallText,
        fontSize: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center'
    },
})