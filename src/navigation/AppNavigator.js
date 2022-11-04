import { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { Provider as AuthProvider } from "../context/AuthContext";  
import { Provider as LocationProvider } from "../context/LocationContext";  
import { Provider as TrackProvider } from "../context/TrackContext";  
import { Context as AuthContext } from '../context/AuthContext';
import AccountScreen from "../screens/AccountScreen";
import SigninScreen from "../screens/SigninScreen";
import SignupScreen from "../screens/SignupScreen";
import TrackCreateScreen from "../screens/TrackCreateScreen";
import TrackListScreen from "../screens/TrackListScreen";
import TrackDetailScreen from "../screens/TrackDetailScreen";
import ResolveAuthScreen  from "../screens/ResolveAuthScreen";

const AuthStack = createStackNavigator();
const TrackListStack = createStackNavigator();
const BottomTabs = createBottomTabNavigator();

const AuthNavigator = () => (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
        <AuthStack.Screen name='Signup' component={SignupScreen} />
        <AuthStack.Screen name='Signin' component={SigninScreen} />
    </AuthStack.Navigator>
);

const TrackListNavigator = () => (
    <TrackListStack.Navigator>
        <TrackListStack.Screen name='TrackList' component={TrackListScreen} options={{title: "Tracks"}}/>
        <TrackListStack.Screen name='TrackDetail' component={TrackDetailScreen} options={{title: "Track Details"}}/>
    </TrackListStack.Navigator>
);

const BottomNavigator = () => {
    return (
        <BottomTabs.Navigator screenOptions={{
            tabBarActiveTintColor: "black",
            tabBarLabelStyle: {
              fontSize: 13,
            },
            tabBarStyle: {
                paddingBottom: 10,
                paddingTop: 10,
                height: 60
            }
          }}>
            <BottomTabs.Screen name='Tracks' component={TrackListNavigator} options={{headerShown: false, tabBarIcon:({color}) => {
            return <Ionicons name='list-outline' size={25} color={color}/>
        }}}/>
            <BottomTabs.Screen name='TrackCreate' component={TrackCreateScreen} options={{title: 'Add track', tabBarIcon:({color}) => {
            return <Ionicons name='add' size={25} color={color}/>
        }}}/>
            <BottomTabs.Screen name='Account' component={AccountScreen} options={{title: 'Account', tabBarIcon:({color}) => {
            return <MaterialCommunityIcons name='account' size={25} color={color}/>
        }}}/>
        </BottomTabs.Navigator>
    )
}

const AppNavigator = () => {
    const { state } = useContext(AuthContext);      //created a seperate function named "App" to wrap the AuthProvider
    if(state.isLoading) {
        return <ResolveAuthScreen/>
    }
    return <NavigationContainer>
            {!state.token ? <AuthNavigator/> : <BottomNavigator/>}
        </NavigationContainer>
};

export default App = () => (
    <>
        <TrackProvider>
            <LocationProvider>
                <AuthProvider>
                    <AppNavigator />
                </AuthProvider>
            </LocationProvider>
        </TrackProvider>
    </>
);