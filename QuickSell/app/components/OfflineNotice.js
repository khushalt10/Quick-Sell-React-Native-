import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../config/colors'
import Constants from 'expo-constants'
import {useNetInfo} from '@react-native-community/netinfo'

export default function OfflineNotice() {
    const netInfo = useNetInfo();

    if(netInfo.type !== "unknown" && netInfo.isInternetReachable === false) 
    {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>No Internet Connection</Text>
        </View>
    )}
    else {
        return null;
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        height: 50,
        position: "absolute",
        justifyContent: 'center',
        alignItems: 'center',
        top: Constants.statusBarHeight,
        width: '100%',
        zIndex: 1
    },
    text: {
        color: colors.white
    }
})
