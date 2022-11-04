import React, {useContext, useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Context as TrackContext} from '../context/TrackContext';
import MapView, {Polyline} from 'react-native-maps';        //also create a project in https://console.cloud.google.com/ and create a project and create api key and also enable Maps SDK for Android and iOS

const TrackDetailScreen = ({route, navigation}) => {
    const {state: {tracks}} = useContext(TrackContext);

    const _id = route.params._id;

    const track = tracks.find(t => t._id === _id);

    const initialCoords = track.locations[0].coords;

    useEffect(() => {
        navigation.setOptions({
            title: track.name
        })
    }, []);

    return (
        <>
            <MapView 
                style={styles.map} 
                initialRegion={{
                    ...initialCoords,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01
                }}
            >
            <Polyline coordinates={track.locations.map(t => t.coords)}/>
        </MapView>
        </>
    );
};

const styles = StyleSheet.create({
    map: {
        height: 800
    }
});

export default TrackDetailScreen;

