//this file is to fake user's location is changing

import Geolocation from "@react-native-community/geolocation";

const tenMetersWithDegrees = 0.0001;

const getLocation = increment => {          
    return {
        timestamp: 10000000,
        coords: {
            speed: 0,
            heading: 0,
            accuracy: 5,
            altitudeAccuracy: 5,
            altitude: 5,
            longitude: -122.4324 + increment * tenMetersWithDegrees,
            latitde: 37.78825 + increment * tenMetersWithDegrees
        }
    }
}

let counter = 0;

setInterval(() => {
    Geolocation.addListener('locationChanged', {
        watchId: Geolocation.watchPosition(),
        location: getLocation(counter)
    })
    counter++;
}, 1000)