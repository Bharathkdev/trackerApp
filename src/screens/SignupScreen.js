import React, {useContext, useEffect} from 'react';
import { View, StyleSheet } from 'react-native';
import AuthForm from '../components/AuthForm';
import { Context as AuthContext } from '../context/AuthContext';

const SignupScreen = ({navigation}) => {
    const { state, signup, clearErrorMessage } = useContext(AuthContext);

    useEffect(() => {
        const unsubscribe = navigation.addListener('blur', clearErrorMessage);
    
        return unsubscribe;
    }, [navigation]);

    return (
        <View style={styles.container}>
            <AuthForm 
                headerText='Create an account now'
                errorMessage={state.errorMessage}
                onSubmit={signup}
                submitButtonText='Sign Up'
                navigationText='Want to Sign In?'
                navigationScreen='Signin'
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
    }
});

export default SignupScreen;

