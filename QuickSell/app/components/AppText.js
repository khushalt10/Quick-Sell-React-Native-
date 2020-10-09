import React from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import defaultStyles from '../config/styles'

export default function AppText(props) {
    return (
    <Text style={[defaultStyles.text, props.style]}>{props.children}</Text>
    )
}

const styles = StyleSheet.create({
})
