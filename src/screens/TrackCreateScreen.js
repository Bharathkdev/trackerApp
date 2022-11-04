import React, { useContext, useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import Map from '../components/Map';
import {Context as LocationContext} from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';

const TrackCreateScreen = () => {
    const isFocused = useIsFocused();
    const {state: {recording}, addLocation} = useContext(LocationContext);
    const callback = useCallback(location => {
        addLocation(location, recording);
    }, [recording]);
    const [ ] = useLocation(isFocused || recording, callback);

    return (
        <View>
            <Map/>  
            <TrackForm/>
        </View>
    );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;

