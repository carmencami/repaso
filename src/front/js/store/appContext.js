import React, { useState, useEffect } from "react";
import getState from "./flux.js";

// Initialize context, defaulting to null
export const Context = React.createContext(null);

const injectContext = (PassedComponent) => {
    const StoreWrapper = (props) => {
        // Initialize state with the getState function
        const [state, setState] = useState(
            getState({
                getStore: () => state.store,
                getActions: () => state.actions,
                setStore: (updatedStore) =>
                    setState({
                        store: { ...state.store, ...updatedStore },  // <-- Spread operator for a shallow copy
                        actions: { ...state.actions }  // Actions should remain unchanged
                    })
            })
        );

        // Example of fetching a message or executing any side effect on mount
        useEffect(() => {
            state.actions.getMessage();
        }, []);

        return (
            <Context.Provider value={state}>
                <PassedComponent {...props} />
            </Context.Provider>
        );
    };
    return StoreWrapper;
};

export default injectContext;
