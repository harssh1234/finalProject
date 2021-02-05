import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Component } from 'react';

export default class MainScreen extends React.Component{
    render(){
        return(
            <View style = {{flex:1}}>
                <Text style = {{fontSize:72}}>MainScreen</Text>
            </View>
        );
    }
}