import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import colors from '../config/colors'
import {MaterialCommunityIcons }  from '@expo/vector-icons'

export default function ImageInput({imageUri}) {
    return (
        <View style={styles.container}>
            {!imageUri && <MaterialCommunityIcons name="camera" color={colors.medium} size={40} />}
            {imageUri && <Image source={{uri: imageUri}} style={styles.image} />}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: colors.light,
        borderRadius: 15,
        justifyContent: "center",
        height: 100,
        width: 100,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%'
    }
})
