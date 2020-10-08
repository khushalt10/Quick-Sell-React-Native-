import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import Card from '../components/Card'
import Screen from '../components/Screen'
import colors from '../config/colors'


const listings = [
    {
        id: 1,
        title: "Red jacket For Sale",
        price: 100,
        image: require('../assets/jacket.jpg')
    },
    {
        id: 1,
        title: "Sofa kum Couch JetSpring",
        price: 250,
        image: require('../assets/couch.jpg')
    }
]

export default function ListingsScreen() {
    return (
        <Screen style={styles.screen}>
            <FlatList 
                data={listings}
                keyExtractor={listing => listing.id.toString()}
                renderItem={({ item }) => 
                    <Card 
                        title={item.title}
                        subtitle={"$" + item.price}
                        image={item.image}
                    />
                }
            />
        </Screen>
    )
}

const styles = StyleSheet.create({
    screen: {
        padding: 10,
        backgroundColor: colors.lightgray
    }
})
