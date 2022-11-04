import React, {useContext} from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from '@rneui/themed';
import { Context as AuthContext } from '../context/AuthContext';

const AccountScreen = () => {
    const { signout } = useContext(AuthContext);

    return (
        <View style={styles.container}>
           <Button title='Sign Out' onPress={signout}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default AccountScreen;

