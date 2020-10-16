import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import colors from '../config/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function NewListingButton({onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>

        <View style={styles.container}>
            <MaterialCommunityIcons name="plus-circle" color={colors.white} size={40} />
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        borderColor: colors.white,
        borderWidth: 10,
        height: 80,
        width: 80,
        borderRadius: 40,
        bottom: 25,
        alignItems: "center",
        justifyContent: "center"
    }
})
