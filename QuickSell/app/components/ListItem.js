import React from 'react'
import { Image, StyleSheet, Text, TouchableHighlight, TouchableNativeFeedback, View } from 'react-native'
import colors from '../config/colors'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import AppText from './AppText'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function ListItem({title, subtitle, image, IconComponent, onPress, renderRightActions}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.lightgray} onPress={onPress}>
        <View style={styles.container}>
            {IconComponent}
            {image && <Image style={styles.image} source={image} />}
            <View style={styles.detailContainer}>
                <AppText numberOfLines={1} style={styles.title}>{title}</AppText>
                {subtitle && <AppText style={styles.subtitle}>{subtitle}</AppText>}
            </View>
            <MaterialCommunityIcons color={colors.lightgray} name="chevron-right" size={25} />
        </View>
        </TouchableHighlight>
        </Swipeable>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flexDirection: "row",
        padding: 15,
        backgroundColor: colors.white
    },
    detailContainer: {
        flex: 1,
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
