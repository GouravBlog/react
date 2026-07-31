import { createContext } from "react";
import { useState } from "react";

export const counterContext = createContext(0);


function CounterProvider({ children }) {
    // const initialState = { count: 0 };
    const [count, setCount] = useState(0)

    return (<counterContext.Provider value={{ count, setCount }}>
        {children}
    </counterContext.Provider>)
}


export default CounterProvider;