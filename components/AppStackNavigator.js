import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import MainScreen from '../screens/MainScreen';
import FriendsScreen from '../screens/FriendsScreen';

export const AppStackNavigator = createStackNavigator({
    MainScreen : {
        screen: MainScreen,
        navigationOptions: {
            headerShown: false
        }
    },
    FriendsScreen : {
        screen: FriendsScreen,
        navigationOptions: {
            headerShown: false
        }
    },
},
{
    initialRouteName: 'MainScreen'
}
);
