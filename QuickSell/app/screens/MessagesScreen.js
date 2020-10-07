import React from 'react'
import { FlatList, Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import ListItem from '../components/ListItem'
import Constants from 'expo-constants'
import Screen from '../components/Screen'

const messages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../assets/sea.jpg')
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/sea.jpg')
    }
]

export default function MessagesScreen() {
    return (
        <Screen> 
            <FlatList
                 data={messages}
                 keyExtractor={message => message.id.toString()}
                 renderItem={({item}) => <ListItem title={item.title} subtitle={item.description} image={item.image} />}
            />
        </Screen>
    )
}

const styles = StyleSheet.create({
})
