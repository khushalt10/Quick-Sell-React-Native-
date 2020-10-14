import React, { useEffect } from 'react'
import { Alert, Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import colors from '../config/colors'
import {MaterialCommunityIcons }  from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'

export default function ImageInput({imageUri, onChangeImage}) {

    useEffect(() => {
        requestPermissions()
    },[])

    const requestPermissions = async() => {
        const result = await Permissions.askAsync(Permissions.CAMERA_ROLL, Permissions.LOCATION)
        const {granted} =  await ImagePicker.requestCameraPermissionsAsync()
        if (!granted)
          alert('You need to enable permission to access library')
      }

    const handlePress = () => {
        if (!imageUri) selectImage()
        else Alert.alert('Delete', 'Are you sure you want to delete this image?', [
            { text: 'Yes', onPress: () => onChangeImage(null)},
            { text: 'No'}
        ])
    }

    const selectImage = async() => {
        try {      
          const result = await ImagePicker.launchImageLibraryAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.Images,
              quality: 0.5
          });
          if(!result.cancelled)
            onChangeImage(result.uri)
        } catch (error) {
          console.log('Error is ', error)
        }
      }

    return (
        <TouchableWithoutFeedback onPress={handlePress}>

        <View style={styles.container}>
            {!imageUri && <MaterialCommunityIcons name="camera" color={colors.medium} size={40} />}
            {imageUri && <Image source={{uri: imageUri}} style={styles.image} />}
        </View>
        </TouchableWithoutFeedback>
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
