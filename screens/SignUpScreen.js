import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TouchableOpacity, TextInput, Alert} from 'react-native';
import db from '../config';
import firebase from 'firebase'

export default class SignUpScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            emailId: '',
            password: '',
            confirmPassword: '',
        }
    }

    userSignup=(username,password,confirmPassword)=>{
        if(password !== confirmPassword) {
            return Alert.alert("Password does not match\nCheck your password")
        } else {
            firebase.auth().createUserWithEmailAndPassword(username,password)
            .then(()=>{
                db.collection('users').add({
                    username: this.state.emailId,
                    password: this.state.password,
                })
                return Alert.alert("User added Successfully")
            })
            .catch((error)=>{
                var errorcode = error.code;
                var errorMsg = error.message;
                return Alert.alert(errorMsg);
            })
            
        }
    }

    render(){
        return(
            <KeyboardAvoidingView style = {styles.container}>
                <View>
                    <Text style = {styles.headerText}>Sign Up</Text>

                    <TextInput
                        style = {styles.emailBox}
                        placeholder = "Email Address"
                        placeholderTextColor = 'white'
                        keyboardType = 'email-address'
                        onChangeText = {(text)=>{
                            this.setState({
                                emailId: text
                            });
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
                            });
                        }}
                    />

                    <TextInput
                        style = {styles.passwordBox}
                        placeholder = "Confirm Password"
                        placeholderTextColor = 'white'
                        secureTextEntry = {true}
                        onChangeText = {(text)=>{
                            this.setState({
                                confirmPassword: text
                            });
                        }}
                    />

                    <TouchableOpacity
                        style = {styles.button}
                        onPress = {()=>{
                            this.userSignup(this.state.emailId,this.state.password,this.state.confirmPassword)
                        }}
                    ><Text style = {styles.buttonText}>Sign Up and Login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style = {styles.button}
                        onPress = {()=>{
                            this.props.navigation.navigate('LoginScreen')
                        }}
                    >
                        <Text style = {styles.cancelButtonText}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#202020'
    },
    headerText:{
        alignSelf: 'center',
        fontSize: 60,
        marginTop: 50,
        color: 'white', 
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
        marginTop: 50,
        color: 'gray'
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
        color: 'gray'
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
    cancelButtonText:{
        color: 'red',
        fontSize:15,
        fontWeight:'bold'
    }
});