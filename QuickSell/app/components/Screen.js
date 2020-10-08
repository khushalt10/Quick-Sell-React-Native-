import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import Constants from 'expo-constants'

export default function Screen(props) {
    return (
        <SafeAreaView style={[styles.screen, props.style]}>
            <View style={props.style}>
            {props.children}

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
    }
})
