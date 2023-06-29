import React, { createContext, useContext, useReducer } from "react";
// using useReducer with useContext for better State management

//Creating a Context named StateContext
export const StateContext = createContext();


// Wrapping child components in the Context Provider and supply the state value.
//simplest way to do so is to create a component in the form of a function which would automatically create a stateprovider based on some props passed into it
//to create a Stateprovider in another file import StateProvider and use it as a component and pass the desired values to use Context objects,the children passed will have all the states of Context(i.e useReducer states)
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//indirect way of pulling objects from context
export const useStateValue = () => useContext(StateContext);