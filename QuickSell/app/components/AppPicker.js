import React, { useState } from 'react'
import { Button, FlatList, Modal, Platform, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import defaultStyles from '../config/styles'
import AppText from './AppText'
import Screen from './Screen'
import PickerItem from './PickerItem'

export default function AppPicker({icon, items,onSelectItem, placeholder, selectedItem, ...otherProps}) {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={styles.container}>
                    {icon && <MaterialCommunityIcons name={icon} size={20} color={defaultStyles.colors.dark} style={styles.icon} />}
                    <TextInput {...otherProps} style={defaultStyles.text} />
                    {selectedItem ? <AppText style={styles.text}>{selectedItem.lable}</AppText> : <AppText style={styles.placeholder}>{placeholder}</AppText>}

                    <MaterialCommunityIcons name="chevron-down" size={20} color={defaultStyles.colors.dark} />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType="slide" >
                <Screen>
                    <Button title="Close" onPress={() => setModalVisible(false)} />
                    <FlatList 
                        data={items}
                        keyExtractor={item => item.value.toString()}
                        renderItem={({ item }) => 
                            <PickerItem 
                                label={item.label}
                                onPress={() => {
                                    setModalVisible(false)
                                    onSelectItem(item)
                                }}
                            />
                    }
                    />
                </Screen>  
            </Modal>
        </>
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
    },
    placeholder: {
        colors: defaultStyles.colors.medium,
        flex: 1
    },
    text: {
        flex: 1
    }
})
