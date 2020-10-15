import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react';
import AccountScreen from '../screens/AccountScreen';
import ListingEditScreen from '../screens/ListingEditScreen';
import ListingsScreen from '../screens/ListingsScreen';
import AccountNavigator from './AccountNavigator';
import FeedNavigator from './FeedNavigator';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../config/colors';
import NewListingButton from './NewListingButton';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen options={{ tabBarIcon: ({color, size}) => <MaterialCommunityIcons name="home" color={color} size={size} />}} name="Feed" component={FeedNavigator} />
        <Tab.Screen options={({navigation}) => ({ tabBarButton: () => <NewListingButton onPress={() => navigation.navigate("ListingEdit")} /> , tabBarIcon: ({color, size}) => <MaterialCommunityIcons name="plus-circle" color={color} size={size} />})} name="ListingEdit" component={ListingEditScreen} />
        <Tab.Screen options={{ tabBarIcon: ({color, size}) => <MaterialCommunityIcons name="account" color={color} size={size} />}} name="Account" component={AccountNavigator} />
    </Tab.Navigator>
)

export default AppNavigator