
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
import ImageInputList from './app/components/ImageInputList';
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer, useNavigation } from '@react-navigation/native' 
import AuthNavigator from './app/navigation/AuthNavigator';
import myTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';
import NetInfo, {useNetInfo} from '@react-native-community/netinfo'
import AsyncStorage from '@react-native-community/async-storage';

export default function App() {
  const demo = async() => {
    try {
      await AsyncStorage.setItem('person',JSON.stringify({id: 1}))
      const value = await AsyncStorage.getItem('person');
      const person = JSON.parse(value);
      console.log(person);
    } catch (error) {
      console.log(error)
    }
  } 

  demo()
  

  return (<ListingsScreen />);

}

