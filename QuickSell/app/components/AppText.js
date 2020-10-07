import React from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'

export default function AppText(props) {
    return (
    <Text style={[styles.text, props.style]}>{props.children}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir"
    }
})
