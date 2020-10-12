import React from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import defaultStyles from '../config/styles'

export default function AppText({style, children, ...otherProps}) {
    return (
    <Text style={[defaultStyles.text, style]} {...otherProps} >{children}</Text>
    )
}

const styles = StyleSheet.create({
})
