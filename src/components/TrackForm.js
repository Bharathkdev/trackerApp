import React, {useContext} from 'react';
import { Input, Button } from '@rneui/themed';
import Spacer from './Spacer';
import { Context as LocationContext } from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';

const TrackForm = () => {
    const {
        state: {name, recording, locations},
        startRecording,
        stopRecording,
        changeTrackName
    } = useContext(LocationContext);

    const [saveTrack] = useSaveTrack();

    return (
        <>  
            <Spacer>
                <Input value={name} onChangeText={changeTrackName} placeholder='Enter name'/>
            </Spacer>
            <Spacer>
                <Button title={recording ? 'Stop Recording': 'Start Recording'} onPress={recording ? stopRecording : startRecording}/>
            </Spacer>
            <Spacer>
                {!recording && locations.length ? 
                    <Button title = 'Save Recording' onPress={saveTrack} /> :
                    null
                }
            </Spacer>
        </>
    )
};

export default TrackForm;