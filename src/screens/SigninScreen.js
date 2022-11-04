import React, {useContext, useEffect} from 'react';
import { View, StyleSheet } from 'react-native';
import AuthForm from '../components/AuthForm';
import { Context as AuthContext } from '../context/AuthContext';

const SigninScreen = ({navigation}) => {
    const { state, signin, clearErrorMessage } = useContext(AuthContext);

    useEffect(() => {
        const unsubscribe = navigation.addListener('blur', clearErrorMessage);
    
        return unsubscribe;
    }, [navigation]);

    return (
        <View style={styles.container}>
            <AuthForm 
                headerText='Welcome back'
                errorMessage={state.errorMessage}
                onSubmit={signin}
                submitButtonText='Sign In'
                navigationText='Want to Sign Up?'
                navigationScreen='Signup'
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

export default SigninScreen;

