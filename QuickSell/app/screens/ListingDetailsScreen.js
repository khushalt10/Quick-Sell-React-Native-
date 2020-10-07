import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import AppText from '../components/AppText'
import ListItem from '../components/ListItem'
import colors from '../config/colors'

export default function ListingDetailsScreen() {
    return (
        <View>
            <Image style={styles.image} source={require('../assets/jacket.jpg')} />
            <View style={styles.container}>
            <AppText style={styles.title}>Red jacket For Sale</AppText>
            <AppText style={styles.price}>$100</AppText>
            <View style={styles.userContainer}>

            <ListItem
                image={require("../assets/sea.jpg")}
                title="Khushal Thepane"
                subtitle="5 Listings"
            />
            </View>
            </View>           
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300
    },
    container: {
        padding: 20
    },
    title: {
        fontSize: 24,
        fontWeight: "500"
    },
    price: {
        color: colors.secondary,
        fontWeight: "bold",
        fontSize: 20,
        marginVertical: 10
    },
    userContainer: {
        marginVertical: 40,
    }
})
