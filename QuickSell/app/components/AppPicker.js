import React, { useState } from 'react'
import { Button, FlatList, Modal, Platform, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import defaultStyles from '../config/styles'
import AppText from './AppText'
import Screen from './Screen'
import PickerItem from './PickerItem'

export default function AppPicker({icon,numberOfColumns = 1, PickerItemComponent = PickerItem, items,onSelectItem, width = '100%', placeholder, selectedItem, ...otherProps}) {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={[styles.container], {width}}>
                    {icon && <MaterialCommunityIcons name={icon} size={20} color={defaultStyles.colors.dark} style={styles.icon} />}
                    <TextInput {...otherProps} style={defaultStyles.text} />
                    {selectedItem ? <AppText style={styles.text}>{selectedItem.label}</AppText> : <AppText style={styles.placeholder}>{placeholder}</AppText>}

                    <MaterialCommunityIcons name="chevron-down" size={20} color={defaultStyles.colors.dark} />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType="slide" >
                <Screen>
                    <Button title="Close" onPress={() => setModalVisible(false)} />
                    <FlatList 
                        data={items}
                        numColumns={numberOfColumns}
                        keyExtractor={item => item.value.toString()}
                        renderItem={({ item }) => 
                            <PickerItemComponent
                                item={item}
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
        padding: 15,
        marginVertical: 10
    },
    icon: {
        marginRight: 10,
        paddingTop: 4
    },
    placeholder: {
        color: defaultStyles.colors.medium,
        flex: 1
    },
    text: {
        flex: 1
    }
})
