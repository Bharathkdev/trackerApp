import createDataContext from "./createDataContext";

const locationReducer = (state, action) => {
    switch(action.type) {
        case 'add_current_location': 
            return {...state, currentLocation: action.payload};
        case 'start_recording':
            let points = [];
            for(let i=0; i<5; i++) {
                points.push({
                    coords: {
                        accuracy: 3000,
                        altitude: 0,
                        heading: 0,
                        latitude: 11.0245268 + i * 0.001,
                        longitude: 78.0702134 + i * 0.001,
                        latitudeDelta: 0.01,
                        longitudeDelta: 0.01,
                        speed: 0
                    },
                    timestamp: 1667499472118
                })
            }
            return {...state, recording: true, locations: points};
        case 'stop_recording':
            return {...state, recording: false};
        case 'add_location':
            return {...state, locations: [...state.locations, action.payload]};
        case 'change_track_name':
            return {...state, name: action.payload};
        case 'reset': 
            return {...state, name: '', locations: []};
        default:
            return state;
    }
};

const changeTrackName = dispatch => (name) => {
    dispatch({type: 'change_track_name', payload: name});
};

const startRecording = dispatch => () => {
    dispatch({type: 'start_recording'})
};

const stopRecording = dispatch => () => {
    dispatch({type: 'stop_recording'})
};

const addLocation = dispatch => (location, recording) => {
    dispatch({type: 'add_current_location', payload: location});
    if(recording) {
        dispatch({type: 'add_location', payload: location});
    }
};

const reset = dispatch => () => {
    dispatch({type: 'reset'});
};

export const {Context, Provider} = createDataContext(
    locationReducer,
    {startRecording, stopRecording, addLocation, changeTrackName, reset},
    {name: '', recording: false, locations: [], currentLocation: null}
);