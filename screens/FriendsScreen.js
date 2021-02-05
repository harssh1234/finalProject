import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class FriendsScreen extends React.Component{
    render(){
        return(
            <View>
                <Text style = {{fontSize: 72}}>
                    FriendsScreen
                </Text>
            </View>
        );
    }
}