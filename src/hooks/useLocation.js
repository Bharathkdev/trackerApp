import { useEffect } from 'react';
import { PermissionsAndroid } from 'react-native';
import Geolocation from '@react-native-community/geolocation';

const useLocation = (shouldTrack, callback) => {
    useEffect(() => {

        let subscriber = null;

        const requestLocationPermission = async () => {
            try {
            const granted = await PermissionsAndroid.request( 
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                title: 'Location Access Required',
                message: 'This App needs to Access your location',
                buttonPositive: 'OK',
                },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {       //To Check, If Permission is granted
                console.log("Permission is granted");
                watchLocation();
            } else {
                console.log('Permission Denied');
            }
            } catch (err) {
            console.warn(err);
            }
        }
    
        const watchLocation = () => {
            const watchID = Geolocation.watchPosition(
            (position) => {
                //Will give you the location on each location change
                callback(position);  //adding the current location in the Location Context
            },
            (error) => {
                console.log(error.message);
            },
            {
                enableHighAccuracy: false,
                maximumAge: 1000
            },
            );
            subscriber = watchID;
        };
    
        if(shouldTrack) {
            requestLocationPermission();
        } else {
            if(subscriber) {
                Geolocation.clearWatch(subscriber);
            }
            subscriber = null;
        }

        return () => {
            if(subscriber) {
                Geolocation.clearWatch(subscriber);
            }
        }
    }, [shouldTrack, callback]);

    return [];
}

export default useLocation;