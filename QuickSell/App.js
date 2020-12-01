import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import NetInfo, { useNetInfo} from '@react-native-community/netinfo'
import { Button } from "react-native";
import { AsyncStorage } from 'react-native';

export default function App() {
const demo = async() => {
  try {
    await AsyncStorage.setItem('person', JSON.stringify({ id: 2 }))
    const value = await AsyncStorage.getItem('person')
    const person = JSON.stringify(value)
    console.log(person)
  } catch (error) {
    console.log(error)
  }
}

demo()

  return null;
}
