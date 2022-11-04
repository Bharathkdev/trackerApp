import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";

const authReducer = (state, action) => {
    switch(action.type) {
        case 'error': 
            return {...state, errorMessage: action.payload}
        case 'signin':
            return {errorMessage: '', token: action.payload}
        case 'clear_error_message':
            return {...state, errorMessage: ''}
        case 'loading': 
            return {...state, isLoading: false}
        case 'signout': 
            return {token: null, errorMessage: ''}
        default:
            return state;
    }
};

const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token');
    if(token) {
        dispatch({type: 'signin', payload: token});
    }
    dispatch({type: 'loading'});
};

const clearErrorMessage = (dispatch) => () => {
    dispatch({type: 'clear_error_message'});
};

const signup = (dispatch) => async ({email, password}) => {         //no return statement since we are returning only one function
    try{
        const response = await trackerApi.post('/signup', {email, password});
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({type: 'signin', payload: response.data.token});
    } catch(err) {
        dispatch({type: 'error', payload: 'Something went wrong with the sign up'});
    }
}


const signin = (dispatch) => async ({email, password}) => {
    try{
        const response = await trackerApi.post('/signin', {email, password});
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({type: 'signin', payload: response.data.token});
    } catch(err) {
        dispatch({type: 'error', payload: 'Something went wrong with the sign in'});
    }
}

const signout = (dispatch) => async () => {
    try{
        await AsyncStorage.removeItem('token');
        dispatch({type: 'signout'});
    } catch(err) {
        dispatch({type: 'error', payload: 'Something went wrong with the sign out'});
    }
}


export const {Context, Provider} = createDataContext(
    authReducer,
    {signup, signin, signout, clearErrorMessage, tryLocalSignin},
    {token: null, errorMessage: '', isLoading: true}
);