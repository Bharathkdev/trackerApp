import React, {useContext} from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import MapView, {Polyline, Circle} from 'react-native-maps';        //also create a project in https://console.cloud.google.com/ and create a project and create api key and also enable Maps SDK for Android and iOS
import {Context as LocationContext} from '../context/LocationContext'; 

const Map = () => {
    const {state: {currentLocation, locations}} = useContext(LocationContext);

    if(!currentLocation) {
        return <ActivityIndicator size='large' style={{marginTop: 200}}/>
    }

    return <MapView 
        style={styles.map} 
        initialRegion={{
            ...currentLocation.coords,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01
          }}
        // region={{                            //'region' is the location in the map shown to the user if you try to drag map somewhere it will automatically take you to the current region
        //     ...currentLocation.coords,
        //     latitudeDelta: 0.01,
        //     longitudeDelta: 0.01
        //   }}
        >
            <Circle 
                center={currentLocation.coords}
                radius={30}
                strokeColor='rgba(158, 158, 255, 1.0)'
                fillColor='rgba(158, 158, 255, 0.3)'
            />
            <Polyline coordinates={locations.map(location => location.coords)}/>
        </MapView>
}

const styles = StyleSheet.create({
    map: {
        height: 300
    }
});

export default Map;