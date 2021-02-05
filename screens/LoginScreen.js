import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, TouchableOpacity, Alert} from 'react-native';
import db from '../config';
import firebase from 'firebase'

export default class LoginScreen extends React.Component{
    constructor() {
        super();
        this.state = {
            emailId: "",
            password:"",
        }
    }
    userLogin=(email, password)=>{
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(()=>{
            this.props.navigation.navigate('MainScreen')
        })
        .catch((error)=>{
            var errorcode = error.code;
            var errorMsg = error.message;
            return Alert.alert(errorMsg);
        })
    }

    render() {
        return(
            <KeyboardAvoidingView style = {styles.container}>
                <View>
                    <TextInput 
                        style = {styles.emailBox}
                        placeholder = "Your email"
                        placeholderTextColor = 'white'
                        keyboardType = 'email-address'
                        onChangeText = {(text)=>{
                            this.setState({
                                emailId: text
                            })
                        }}
                    />

                    <TextInput
                        style = {styles.passwordBox}
                        placeholder = "Password"
                        placeholderTextColor = 'white'
                        secureTextEntry = {true}
                        onChangeText = {(text)=>{
                            this.setState({
                                password: text
                            })
                        }}
                    />

                    <TouchableOpacity
                        style = {styles.button}
                        onPress = {()=>{
                            this.userLogin(this.state.emailId,this.state.password);
                        }}
                    >
                        <Text style = {styles.buttonText}>
                            Login
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style = {styles.button}
                        onPress = {()=>{
                            this.props.navigation.navigate('SignUpScreen')
                        }}
                    >
                        <Text style = {styles.buttonText}>
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#202020',
    },
    button:{
        width:200,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        borderRadius:10,
        marginTop:30,
        alignSelf: 'center',
        borderColor: 'gray'
    },
    buttonText:{
        color: 'white',
        fontSize:15,
        fontWeight:'bold'
    },
    emailBox:{
        width:"75%",
        height:35,
        alignSelf:'center',
        borderColor:'#202020',
        borderBottomWidth: 1.5,
        fontSize: 20,
        borderRadius:10,
        borderWidth:1,
        margin:10,
        paddingLeft:10,
        marginTop: 250,
    },
    passwordBox:{
        width:"75%",
        height:35,
        alignSelf:'center',
        borderColor:'#202020',
        borderBottomWidth: 1.5,
        fontSize: 20,
        borderRadius:10,
        borderWidth:1,
        margin:10,
        paddingLeft:10,
        marginTop: 10,
    }
})