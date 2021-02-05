import React from 'react'
import {createBottomTabNavigator} from 'react-navigation-tabs';
import AppStackNavigator from './AppStackNavigator';
import MainScreen from '../screens/MainScreen';
import FriendsScreen from '../screens/FriendsScreen'

export const AppTabNavigator = createBottomTabNavigator({
    Chat: {
        screen : MainScreen,
        navigationOptions: {
            tabBarLabel: "Chat with friends"
        }
    },

    Friends: {
        screen : FriendsScreen,
        navigationOptions: {
            tabBarLabel: "Your friends list"
        }
    }

})