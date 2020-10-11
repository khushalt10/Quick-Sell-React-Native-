import React from 'react'
import { Platform, StyleSheet, Text, TextInput, View } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import defaultStyles from '../config/styles'

export default function AppTextInput({icon, ...otherProps }) {
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons name={icon} size={20} color={defaultStyles.colors.dark} style={styles.icon} />}
            <TextInput placeholderTextColor={defaultStyles.colors.medium} {...otherProps} style={defaultStyles.text} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.lightgray,
        borderRadius: 25,
        flexDirection: "row",
        width: '100%',
        padding: 15,
        marginVertical: 10
    },
    icon: {
        marginRight: 10,
        paddingTop: 4
    }
})
