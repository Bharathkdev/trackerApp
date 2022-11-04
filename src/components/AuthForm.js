import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import {StyleSheet, TouchableOpacity} from 'react-native';
import { Input, Text, Button } from '@rneui/themed';
import Spacer from './Spacer';

const AuthForm = ({headerText, errorMessage, onSubmit, submitButtonText, navigationText, navigationScreen}) => {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const navigation = useNavigation();

    return (
        <>
            <Spacer>
                <Text style={styles.headerStyle} h3>{headerText}</Text>
            </Spacer>
            <Input 
                label='Email' 
                value={email}
                onChangeText={setEmail}  
                autoCapitalize="none"
                autoCorrect={false}  
            />
            <Input 
                label='Password'
                value={password}
                onChangeText={setPassword} 
                autoCapitalize="none"
                autoCorrect={false} 
                secureTextEntry
            />
            {errorMessage ? <Text style={styles.errorTextStyle}>{errorMessage}</Text> : null}
            <Spacer>
                <Button title={submitButtonText} onPress = {() => {
                    onSubmit({email, password});          //axios api call for sign up/sign in
                }}></Button>
            </Spacer>
            <Spacer>
                <TouchableOpacity onPress = {() => navigation.navigate(navigationScreen)}>
                    <Text style = {styles.navigationTextStyle}>{navigationText}</Text>
                </TouchableOpacity>
            </Spacer>
        </>
    );
};

const styles = StyleSheet.create({
    headerStyle: {
        marginBottom: 20
    },
    errorTextStyle: {
        color: 'red',
        marginLeft: 20
    },
    navigationTextStyle: {
        color: 'blue',
        fontSize: 16,
        textAlign: 'center'
    }
});

export default AuthForm;

