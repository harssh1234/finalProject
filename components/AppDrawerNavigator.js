import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import FriendsScreen from '../screens/FriendsScreen';
import MainScreen from '../screens/MainScreen';
import {AppTabNavigator} from './AppTabNavigator'
import FriendsList from './FriendsList'

export const AppDrawerNavigator = createDrawerNavigator({
    Chat: {
        screen : MainScreen
    },
    Friends:{
        screen : FriendsScreen 
    },
   
},
{
    contentComponent : FriendsList
},
{
    initialRouteName : 'Chat'
}
)
