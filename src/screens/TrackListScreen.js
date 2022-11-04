import React, {useContext, useEffect} from 'react';
import { View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { ListItem } from '@rneui/themed';
import { Context as TrackContext } from '../context/TrackContext';

const TrackListScreen = ({navigation}) => {
    const {state: {tracks}, fetchTracks} = useContext(TrackContext);

    useEffect(() =>{
        const unsubscribe = navigation.addListener('focus', fetchTracks);

        return unsubscribe;
    }, [navigation]);

    return (
        <View style={{flex:1, backgroundColor: 'white'}}>  
            <FlatList 
                data={tracks}
                keyExtractor={item => item._id}
                renderItem={({item}) => {
                    return <TouchableOpacity onPress={() => navigation.navigate('TrackDetail', {_id: item._id})}>
                        <ListItem>
                            <ListItem.Content>
                                <ListItem.Title>{item.name}</ListItem.Title>
                            </ListItem.Content>
                            <ListItem.Chevron />
                        </ListItem>
                  </TouchableOpacity>
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default TrackListScreen;

