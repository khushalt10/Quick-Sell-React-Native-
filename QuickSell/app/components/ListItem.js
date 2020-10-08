import React from 'react'
import { Image, StyleSheet, Text, TouchableHighlight, TouchableNativeFeedback, View } from 'react-native'
import colors from '../config/colors'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import AppText from './AppText'

export default function ListItem({title, subtitle, image, onPress, renderRightActions}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.lightgray} onPress={onPress}>
        <View style={styles.container}>
            <Image style={styles.image} source={image} />
            <View>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subtitle}>{subtitle}</AppText>
            </View>
        </View>
        </TouchableHighlight>
        </Swipeable>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 15
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 10
    },
    title: {
        fontWeight: "500"
    },
    subtitle: {
        color: colors.medium
    }

})
