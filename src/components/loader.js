import React from 'react';
import { View, Text, Modal, ActivityIndicator, StyleSheet,Image } from 'react-native';


const Loader = props => {    
    return(
        <Modal
            transparent={true}
            visible={props.visible}
            animationType="none">
            <View style={styles.loaderContainer}>
                <Image source={require('../assets/images/gifs/loader.gif')} style={{width:60,height:60}}/>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    loaderContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#rgba(0,0,0,0.2)'
    },
})

export default Loader;