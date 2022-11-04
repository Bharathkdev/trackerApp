import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const instance =  axios.create({
    baseURL: 'https://6982-103-16-12-61.in.ngrok.io'
});

instance.interceptors.request.use(   //function similar to express api use function(this means apply to all the requests that are made with this axios)
    async (config) => {                          //function which is called before making a request   
        const token = await AsyncStorage.getItem('token');
        if(token) {
            config.headers.Authorization = `Bearer ${token}`;   //Attaching bearer token to all the requests if token is available
        }
        return config;                  //returning the modified config
    },                       
    (err) => {                         //function which is called if there is any error making the request
        return Promise.reject(err);
    }
);

export default instance;