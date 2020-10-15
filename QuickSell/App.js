
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

const Link = () => {
  const navigation = useNavigation()

  return(
    <Button 
      title="Click"
      onPress={() => navigation.navigate("TweetDetails", { id : 1 })}
    /> 
  )
}

const Tweets = () => (
  <Screen>
    <Text>Tweets</Text>
    <Link />
  </Screen>
)

const Account = () => (
  <Screen>
    <Text>Accounts</Text>
    <Link />
  </Screen>
)

const TweetDetails = ({ route }) => (
  <Screen>
    <Text>Tweet Details {route.params.id}</Text>
  </Screen>
)

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator screenOptions={{ headerStyle: {backgroundColor: 'dodgerblue'},
                                    headerTintColor: "white"  }}>
    <Stack.Screen name="Tweets" component={Tweets}  />
    <Stack.Screen name="TweetDetails" component={TweetDetails} options={{ title: "Tweet Details" }} />
  </Stack.Navigator>
)

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: 'tomato',
      activeTintColor: 'white',
      inactiveBackgroundColor: "lightgray",
      inactiveTintColor: 'black'
    }}
  >
    <Tab.Screen options={{ tabBarIcon: ({ size, color }) => <MaterialCommunityIcons color={color} name="home" size={size} />}} name="Tweets" component={StackNavigator} />
    <Tab.Screen options={{ tabBarIcon: ({ size, color }) => <MaterialCommunityIcons color={color} name="menu" size={size} />}} name="Accounts" component={Account} />
  </Tab.Navigator>
)

export default function App() {
return (
      <NavigationContainer theme={myTheme}>
        <AppNavigator />
      </NavigationContainer>
  );
}

