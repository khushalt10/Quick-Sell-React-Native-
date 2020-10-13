
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Alert, Platform, StatusBar, Dimensions, TextInput, Image } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import {MaterialCommunityIcons } from '@expo/vector-icons'
import AppButton from './app/components/AppButton';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';
import LoginScreen from './app/screens/LoginScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
import ImageInput from './app/components/ImageInput';


export default function App() {
  const [imageUri, setImageUri] = useState()

  const requestPermissions = async() => {
    const result = await Permissions.askAsync(Permissions.CAMERA_ROLL, Permissions.LOCATION)
    const {granted} =  await ImagePicker.requestCameraPermissionsAsync()
    if (!granted)
      alert('You need to enable permission to access library')
  }

  useEffect(async () => {
    requestPermissions()
  }, [])

  const selectImage = async() => {
    try {      
      const result = await ImagePicker.launchImageLibraryAsync();
      if(!result.cancelled)
        setImageUri(result.uri)
    } catch (error) {
      console.log('Error is ', error)
    }
  }

return (
      <Screen>
          <Button title="Select Image" onPress={selectImage} />
          <Image source={{uri: imageUri }} style={{width: 200, height: 200}} />
          <ImageInput imageUri={imageUri} />
      </Screen>
  );
}

