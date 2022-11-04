import { useContext } from 'react';
import {Context as LocationContext} from '../context/LocationContext';
import {Context as TrackContext} from '../context/TrackContext';
import { useNavigation } from '@react-navigation/native';

const useSaveTrack = () => {
    const {state: {locations, name}, reset} = useContext(LocationContext);
    const {createTrack} = useContext(TrackContext);
    const navigation =useNavigation();

    const saveTrack = async () => {
        await createTrack(name, locations);     //wait for the asynchoronous operation to complete and do some operations after that
        reset();                                //reset the name and locations array after save is success on the server
        navigation.navigate('Tracks');
    }

    return [saveTrack];
};

export default useSaveTrack;