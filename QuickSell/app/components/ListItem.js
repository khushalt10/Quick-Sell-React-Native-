import React from 'react'
import { Image, StyleSheet, Text, TouchableHighlight, TouchableNativeFeedback, View } from 'react-native'
import colors from '../config/colors'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import AppText from './AppText'

export default function ListItem({title, subtitle, image, IconComponent, onPress, renderRightActions}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.lightgray} onPress={onPress}>
        <View style={styles.container}>
            {IconComponent}
            {image && <Image style={styles.image} source={image} />}
            <View style={styles.detailContainer}>
                <AppText style={styles.title}>{title}</AppText>
                {subtitle && <AppText style={styles.subtitle}>{subtitle}</AppText>}
            </View>
        </View>
        </TouchableHighlight>
        </Swipeable>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 15,
        backgroundColor: colors.white
    },
    detailContainer: {
        marginLeft: 10,
        justifyContent: "center"
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    title: {
        fontWeight: "500"
    },
    subtitle: {
        color: colors.medium
    }

})
