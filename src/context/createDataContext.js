import React, {useReducer} from "react";

export default (reducer, actions, defaultValue) => {
    const Context = React.createContext();      //create a context using React 

    const Provider = ({children}) => {

        const[state, dispatch] = useReducer(reducer, defaultValue);

        const boundActions = {};

        for(let key in actions) {
            boundActions[key] = actions[key](dispatch); //execute the action with dispatch and store the returned function in the bound actions key
                                                        //which can be called inside components with the required parameters
        }

        return (         //Need to wrap the components inside Context Provider to access the value property(App data)
           //the below value property combines both the actions object and the state object into a single object
           <Context.Provider value={{state, ...boundActions}}>         
                {children}
            </Context.Provider>
        )
    }
    
    return {Context, Provider};   //Provider is the whole data we need to utilize everywhere in the applied and Context is the one which allows us to access those data
};